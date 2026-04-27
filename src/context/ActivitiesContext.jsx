import { createContext, useContext, useState, useEffect } from 'react';

const ActivitiesContext = createContext();

export function ActivitiesProvider({ children }) {
  // Load initial state from localStorage or use defaults
  const [activitiesData, setActivitiesData] = useState(() => {
    const saved = localStorage.getItem('veup-activities');
    return saved ? JSON.parse(saved) : {
      stakeholders: {
        sponsorName: '', sponsorTitle: '', sponsorEmail: '',
        leadName: '', leadTitle: '', leadEmail: '',
        techName: '', techTitle: '', techEmail: ''
      },
      betterTogether: {
        problem: '',
        agility: '',
        security: '',
        procurement: '',
        story: ''
      },
      listing: {
        valueProp: '',
        architecture: 'SaaS',
        pricingModel: 'Pay-As-You-Go',
        targetAudience: ''
      }
    };
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('veup-activities', JSON.stringify(activitiesData));
  }, [activitiesData]);

  const updateActivityData = (activityKey, data) => {
    setActivitiesData(prev => ({
      ...prev,
      [activityKey]: {
        ...prev[activityKey],
        ...data
      }
    }));
  };

  return (
    <ActivitiesContext.Provider value={{ activitiesData, updateActivityData }}>
      {children}
    </ActivitiesContext.Provider>
  );
}

export const useActivities = () => useContext(ActivitiesContext);
