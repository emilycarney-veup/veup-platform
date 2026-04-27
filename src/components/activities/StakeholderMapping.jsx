import { useActivities } from '../../context/ActivitiesContext';

export default function StakeholderMapping() {
  const { activitiesData, updateActivityData } = useActivities();
  const { stakeholders } = activitiesData;

  const handleChange = (e) => {
    updateActivityData('stakeholders', { [e.target.name]: e.target.value });
  };

  const createInputGroup = (title, rolePrefix) => (
    <div style={{ marginBottom: '1.5rem', padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
      <h3 style={{ marginBottom: '1rem', color: '#fff', fontSize: '1.1rem' }}>{title}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Name</label>
          <input
            type="text"
            name={`${rolePrefix}Name`}
            value={stakeholders[`${rolePrefix}Name`]}
            onChange={handleChange}
            className="activity-input"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Title/Role</label>
          <input
            type="text"
            name={`${rolePrefix}Title`}
            value={stakeholders[`${rolePrefix}Title`]}
            onChange={handleChange}
            className="activity-input"
            placeholder="VP of Sales"
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email</label>
          <input
            type="email"
            name={`${rolePrefix}Email`}
            value={stakeholders[`${rolePrefix}Email`]}
            onChange={handleChange}
            className="activity-input"
            placeholder="jane@company.com"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>Define Your Stakeholders</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Success on AWS requires buy-in from multiple departments. Document the core team from Day 1 to prevent friction. (From Module 1)
      </p>

      {createInputGroup('Executive Sponsor (Owns the P&L)', 'sponsor')}
      {createInputGroup('Project Lead (Operational Heartbeat)', 'lead')}
      {createInputGroup('Technical Lead (Cloud Architect / FTR Owner)', 'tech')}
    </div>
  );
}
