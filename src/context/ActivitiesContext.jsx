import { createContext, useContext, useState, useEffect } from 'react';

const ActivitiesContext = createContext();

export function ActivitiesProvider({ children }) {
  const [activitiesData, setActivitiesData] = useState(() => {
    const defaultData = {
      stakeholders: { sponsorName: '', sponsorTitle: '', sponsorEmail: '', leadName: '', leadTitle: '', leadEmail: '', techName: '', techTitle: '', techEmail: '' },
      betterTogether: { problem: '', agility: '', security: '', procurement: '', story: '' },
      listing: { productType: 'SaaS', shortDesc: '', longDesc: '', highlights: '', keywords: '', pricingModel: 'Pay-As-You-Go', pricingDimensions: '', taxDetails: '', bankingDetails: '', companyAddress: '' },
      ftr: { 'DEF-001': {met: null, notes: ''}, 'PROJ-001': {met: null, notes: ''}, 'TECH-001': {met: null, notes: ''}, 'RISK-001': {met: null, notes: ''}, 'SEC-001': {met: null, notes: ''}, 'SEC-002': {met: null, notes: ''}, 'SAAS-001': {met: null, notes: ''}, 'CUS-001': {met: null, notes: ''} },
      partnerTier: { currentTier: 'Enrolled', certs: { cloudPractitioner: 0, solutionsArchitectAssoc: 0, solutionsArchitectPro: 0, securitySpec: 0 }, coSellJourney: 'Good', enablementStage: 'Early' },
      opportunityHygiene: { customerConsent: false, isNatSec: 'No', customerWebsite: '', industry: '', companyName: '', postalCode: '', country: 'United States', expectedAWSRevenue: '', targetCloseDate: '', solutionOffered: '', deliveryModel: 'SaaS', useCase: '', customerProblem: '', partnerPrimaryNeed: '', duns: '', oppType: 'New', projectTitle: '', awsProducts: '', nextSteps: '', sourceCampaign: '', mdfUsed: 'No' },
      templates: { prTitle: '', prBody: '', faq1: '', faq2: '', jvp: '', emailSubject: '', emailContext: '', emailAWSValue: '', emailAsk: '' },
      qbr: { partnerName: '', qbrDate: '', wins: '', revenueImpact: '', escalations: '', nextSteps: '' },
      coss: {
        partnerPrograms: [null, null, null, null, null],
        selection: [null, null, null, null],
        operational: [null, null, null, null, null],
        revenue: [null, null, null, null, null],
        salesAlignment: [null, null, null, null, null],
        enablement: [null, null, null, null, null]
      },
      expansion: { objectives: [], regions: [], challenges: [], market: '0', leadership: '0', ops: '0', finance: '0', tech: '0', product: '0', sales: '0', risk: '0' },
      salesPlays: { plays: [{id: 1, text: 'Data Migration to S3', rank: 1}, {id: 2, text: 'GenAI Pilot with Bedrock', rank: 2}, {id: 3, text: 'Legacy Monolith to EKS', rank: 3}] },
      funding: { transactedOver65k: false, ftrPassed: false, hasCompetency: false },
      plgReadiness: {
        categories: {
          marketplace: { 1: null, 2: null, 3: null },
          product: { 1: null, 2: null, 3: null },
          pricing: { 1: null, 2: null, 3: null },
          technical: { 1: null, 2: null, 3: null },
          gtm: { 1: null, 2: null, 3: null }
        }
      },
      plgActionPlan: {
        visionAndGoals: '',
        priorityAreas: '',
        actions: [
          { id: 1, category: 'Marketplace', action: 'Complete AWS Marketplace listing submission', owner: '', targetDate: '', status: 'Not Started' },
          { id: 2, category: 'Product', action: 'Implement self-service onboarding flow', owner: '', targetDate: '', status: 'Not Started' },
          { id: 3, category: 'Pricing', action: 'Define Pay-As-You-Go pricing dimensions', owner: '', targetDate: '', status: 'Not Started' }
        ]
      }
    };
    const saved = localStorage.getItem('veup-activities-v2');
    if (!saved) return defaultData;
    const parsed = JSON.parse(saved);
    return { 
      ...defaultData, 
      ...parsed, 
      expansion: { ...defaultData.expansion, ...(parsed.expansion || {}) }, // deep merge expansion to fix crash
      plgReadiness: { ...defaultData.plgReadiness, ...(parsed.plgReadiness || {}) },
      plgActionPlan: { ...defaultData.plgActionPlan, ...(parsed.plgActionPlan || {}) }
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
