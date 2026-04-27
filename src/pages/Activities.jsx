import { useState } from 'react';
import { PenTool, Users, Zap, FileCode2 } from 'lucide-react';
import StakeholderMapping from '../components/activities/StakeholderMapping';
import BetterTogetherBuilder from '../components/activities/BetterTogetherBuilder';
import MarketplaceListingDrafter from '../components/activities/MarketplaceListingDrafter';

export default function Activities() {
  const [activeTab, setActiveTab] = useState('stakeholders');

  const tabs = [
    { id: 'stakeholders', name: 'Stakeholder Mapping', icon: <Users size={18} /> },
    { id: 'better-together', name: 'Better Together Story', icon: <Zap size={18} /> },
    { id: 'marketplace', name: 'Listing Drafter', icon: <FileCode2 size={18} /> }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Interactive Practice</h1>
        <p className="dashboard-subtitle">
          Apply what you've learned. All your work here is auto-saved locally.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: activeTab === tab.id ? 'var(--primary-color)' : 'transparent',
              color: activeTab === tab.id ? '#fff' : 'var(--text-muted)',
              border: activeTab === tab.id ? '1px solid var(--primary-color)' : '1px solid var(--border-color)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </div>

      <div className="activity-content-area" style={{ backgroundColor: 'var(--sidebar-bg)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
        {activeTab === 'stakeholders' && <StakeholderMapping />}
        {activeTab === 'better-together' && <BetterTogetherBuilder />}
        {activeTab === 'marketplace' && <MarketplaceListingDrafter />}
      </div>
    </div>
  );
}
