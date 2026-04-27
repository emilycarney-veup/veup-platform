import { createContext, useContext, useState, useEffect } from 'react';

const ActivitiesContext = createContext();

export function ActivitiesProvider({ children }) {
  const [activitiesData, setActivitiesData] = useState(() => {
    const saved = localStorage.getItem('veup-activities-v2');
    return saved ? JSON.parse(saved) : {
      stakeholders: { sponsorName: '', sponsorTitle: '', sponsorEmail: '', leadName: '', leadTitle: '', leadEmail: '', techName: '', techTitle: '', techEmail: '' },
      betterTogether: { problem: '', agility: '', security: '', procurement: '', story: '' },
      listing: { productType: 'SaaS', shortDesc: '', longDesc: '', highlights: '', keywords: '', pricingModel: 'Pay-As-You-Go', pricingDimensions: '', taxDetails: '', bankingDetails: '', companyAddress: '' },
      ftr: { isWellArchitected: false, hasCISReport: false, encryptionAtRest: false, tenantIsolation: false, notes: '' },
      partnerTier: { currentTier: 'Enrolled', certs: { cloudPractitioner: false, solutionsArchitectAssoc: false, solutionsArchitectPro: false, securitySpec: false }, coSellJourney: 'Good', enablementStage: 'Early' },
      opportunityHygiene: { customerConsent: false, isNatSec: 'No', customerWebsite: '', industry: '', companyName: '', postalCode: '', country: 'United States', expectedAWSRevenue: '', targetCloseDate: '', solutionOffered: '', deliveryModel: 'SaaS', useCase: '', customerProblem: '', partnerPrimaryNeed: '', duns: '', oppType: 'New', projectTitle: '', awsProducts: '', nextSteps: '', sourceCampaign: '', mdfUsed: 'No' },
      templates: { prTitle: '', prBody: '', faq1: '', faq2: '', jvp: '', emailSubject: '', emailContext: '', emailAWSValue: '', emailAsk: '' },
      qbr: { partnerName: '', qbrDate: '', wins: '', revenueImpact: '', escalations: '', nextSteps: '' },
      coss: {
        partnerPrograms: [false, false, false, false, false],
        selection: [false, false, false, false],
        operational: [false, false, false, false, false],
        revenue: [false, false, false, false, false],
        salesAlignment: [false, false, false, false, false],
        enablement: [false, false, false, false, false]
      },
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
