import { createContext, useContext, useState, useEffect } from 'react';

const ActivitiesContext = createContext();

export function ActivitiesProvider({ children }) {
  const [activitiesData, setActivitiesData] = useState(() => {
    const saved = localStorage.getItem('veup-activities-v2');
    return saved ? JSON.parse(saved) : {
      stakeholders: { sponsorName: '', sponsorTitle: '', sponsorEmail: '', leadName: '', leadTitle: '', leadEmail: '', techName: '', techTitle: '', techEmail: '' },
      betterTogether: { problem: '', agility: '', security: '', procurement: '', story: '' },
      listing: { productType: 'SaaS', shortDesc: '', longDesc: '', highlights: '', keywords: '', pricingModel: 'Pay-As-You-Go', pricingDimensions: '' },
      ftr: { isWellArchitected: false, hasCISReport: false, encryptionAtRest: false, tenantIsolation: false, notes: '' },
      partnerTier: { currentTier: 'Enrolled', certs: { cloudPractitioner: false, solutionsArchitectAssoc: false, solutionsArchitectPro: false, securitySpec: false } },
      opportunityHygiene: { customerConsent: false, architectureDefined: false, clearAWSValue: '', dealSize: '', useCase: '' },
      templates: { prTitle: '', prBody: '', faq1: '', faq2: '', jvp: '' },
      qbr: { partnerName: '', qbrDate: '', wins: '', revenueImpact: '', escalations: '', nextSteps: '' },
      coss: { q1: '1', q2: '1', q3: '1', q4: '1', q5: '1' },
      expansion: { market: '1', leadership: '1', ops: '1', finance: '1', sales: '1', product: '1' },
      salesPlays: { plays: [{id: 1, text: 'Data Migration to S3', rank: 1}, {id: 2, text: 'GenAI Pilot with Bedrock', rank: 2}, {id: 3, text: 'Legacy Monolith to EKS', rank: 3}] },
      funding: { transactedOver65k: false, ftrPassed: false, hasCompetency: false }
    };
  });

  useEffect(() => {
    localStorage.setItem('veup-activities-v2', JSON.stringify(activitiesData));
  }, [activitiesData]);

  const updateActivityData = (activityKey, data) => {
    setActivitiesData(prev => ({
      ...prev,
      [activityKey]: { ...prev[activityKey], ...data }
    }));
  };

  return (
    <ActivitiesContext.Provider value={{ activitiesData, updateActivityData }}>
      {children}
    </ActivitiesContext.Provider>
  );
}

export const useActivities = () => useContext(ActivitiesContext);
