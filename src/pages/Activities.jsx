import { useState } from 'react';
import { 
  Users, Zap, FileCode2, ShieldCheck, Award, 
  Target, FileText, BarChart3, Activity, Globe, ListOrdered, DollarSign, ArrowLeft, DownloadCloud
} from 'lucide-react';
import { useActivities } from '../context/ActivitiesContext';

import StakeholderMapping from '../components/activities/StakeholderMapping';
import BetterTogetherBuilder from '../components/activities/BetterTogetherBuilder';
import MarketplaceListingDrafter from '../components/activities/MarketplaceListingDrafter';
import FTRExercise from '../components/activities/FTRExercise';
import PartnerTierTracker from '../components/activities/PartnerTierTracker';
import OpportunityHygiene from '../components/activities/OpportunityHygiene';
import DocumentTemplates from '../components/activities/DocumentTemplates';
import QBRTracker from '../components/activities/QBRTracker';
import COSSReadinessAssessment from '../components/activities/COSSReadinessAssessment';
import ExpansionReadiness from '../components/activities/ExpansionReadiness';
import SalesPlaysRanker from '../components/activities/SalesPlaysRanker';
import FundingEligibilityChecker from '../components/activities/FundingEligibilityChecker';
import PLGReadinessAssessment from '../components/activities/PLGReadinessAssessment';

export default function Activities() {
  const [activeActivity, setActiveActivity] = useState(null);

  const activitiesList = [
    { id: 'stakeholders', name: 'Stakeholder Mapping', icon: <Users size={24} />, color: '#324ed8', component: <StakeholderMapping /> },
    { id: 'better-together', name: 'Better Together Story', icon: <Zap size={24} />, color: '#dfff00', component: <BetterTogetherBuilder /> },
    { id: 'listing', name: 'Marketplace Drafter', icon: <FileCode2 size={24} />, color: '#238636', component: <MarketplaceListingDrafter /> },
    { id: 'ftr', name: 'FTR Exercise & CIS', icon: <ShieldCheck size={24} />, color: '#a371f7', component: <FTRExercise /> },
    { id: 'tier', name: 'Partner Tier & Certs', icon: <Award size={24} />, color: '#e3b341', component: <PartnerTierTracker /> },
    { id: 'opportunity', name: 'ACE Opportunity Hygiene', icon: <Target size={24} />, color: '#f85149', component: <OpportunityHygiene /> },
    { id: 'templates', name: 'PR/FAQ & JVP Templates', icon: <FileText size={24} />, color: '#58a6ff', component: <DocumentTemplates /> },
    { id: 'qbr', name: 'QBR Tracker', icon: <BarChart3 size={24} />, color: '#3fb950', component: <QBRTracker /> },
    { id: 'coss', name: 'COSS Assessment', icon: <Activity size={24} />, color: '#d2a8ff', component: <COSSReadinessAssessment /> },
    { id: 'expansion', name: 'Expansion Readiness', icon: <Globe size={24} />, color: '#79c0ff', component: <ExpansionReadiness /> },
    { id: 'sales', name: 'Sales Plays Ranker', icon: <ListOrdered size={24} />, color: '#ff7b72', component: <SalesPlaysRanker /> },
    { id: 'funding', name: 'Funding Eligibility', icon: <DollarSign size={24} />, color: '#dfff00', component: <FundingEligibilityChecker /> },
    { id: 'plg-readiness', name: 'PLG Readiness Assessment', icon: <Target size={24} />, color: '#58a6ff', component: <PLGReadinessAssessment /> },
  ];

  const { activitiesData } = useActivities();

  const handleDownload = (activityId, activityName) => {
    // Get the specific data for this activity
    // Note: The context keys might not perfectly match the activity IDs, we map them here
    let contextKey = activityId;
    if (activityId === 'better-together') contextKey = 'betterTogether';
    if (activityId === 'tier') contextKey = 'partnerTier';
    if (activityId === 'opportunity') contextKey = 'opportunityHygiene';
    if (activityId === 'sales') contextKey = 'salesPlays';
    if (activityId === 'plg-readiness') contextKey = 'plgReadiness';

    const dataToExport = {
      veupActivityExport: true,
      activityId: contextKey, // Use context key so restore works perfectly
      activityName: activityName,
      data: activitiesData[contextKey] || {}
    };

    const jsonString = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = href;
    link.download = `VeUP_${activityName.replace(/\s+/g, '_')}_Completed.json`;
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  if (activeActivity) {
    const activeData = activitiesList.find(a => a.id === activeActivity);
    return (
      <div className="dashboard">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <button 
            onClick={() => setActiveActivity(null)}
            className="nav-btn"
          >
            <ArrowLeft size={16} /> Back to Hub
          </button>
          
          <button 
            onClick={() => handleDownload(activeData.id, activeData.name)}
            className="nav-btn"
            style={{ 
              backgroundColor: 'var(--primary-color)', 
              color: '#000', 
              borderColor: 'var(--primary-color)' 
            }}
          >
            <DownloadCloud size={16} /> Download Hard Copy
          </button>
        </div>
        <div style={{ backgroundColor: 'var(--sidebar-bg)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          {activeData.component}
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Interactive Hub</h1>
        <p className="dashboard-subtitle">Select a tool to put theory into practice. All progress is auto-saved locally.</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {activitiesList.map(activity => (
          <div 
            key={activity.id}
            onClick={() => setActiveActivity(activity.id)}
            style={{
              backgroundColor: 'var(--sidebar-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = activity.color;
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = `0 4px 20px -5px ${activity.color}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ 
              backgroundColor: `${activity.color}15`, 
              color: activity.color,
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '1rem'
            }}>
              {activity.icon}
            </div>
            <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{activity.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
