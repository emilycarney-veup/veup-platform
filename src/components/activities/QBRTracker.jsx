import { useActivities } from '../../context/ActivitiesContext';

export default function QBRTracker() {
  const { activitiesData, updateActivityData } = useActivities();
  const { qbr } = activitiesData;

  const handleText = (e) => updateActivityData('qbr', { [e.target.name]: e.target.value });

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>QBR Tracker</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Structure your Quarterly Business Reviews to track co-sell accomplishments.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Target Partner / AWS Org</label>
          <input type="text" name="partnerName" value={qbr.partnerName} onChange={handleText} className="activity-input" placeholder="e.g. AWS Healthcare Verticals Team" />
        </div>
        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>QBR Date</label>
          <input type="date" name="qbrDate" value={qbr.qbrDate} onChange={handleText} className="activity-input" />
        </div>
      </div>

      <div className="input-block" style={{ marginBottom: '1.5rem' }}>
        <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Key Wins & Milestones Achieved</label>
        <textarea name="wins" value={qbr.wins} onChange={handleText} className="activity-textarea" placeholder="List closed deals, MDF campaigns executed, technical competencies achieved..." rows={4} />
      </div>

      <div className="input-block" style={{ marginBottom: '1.5rem' }}>
        <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Revenue Impact & Pipeline Growth</label>
        <textarea name="revenueImpact" value={qbr.revenueImpact} onChange={handleText} className="activity-textarea" placeholder="Detail ACE pipeline injected, CPPO transactions scaled..." rows={3} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Escalations / Friction</label>
          <textarea name="escalations" value={qbr.escalations} onChange={handleText} className="activity-textarea" placeholder="Where do we need help? (e.g. FTR blocked, legal reviews slow)" rows={3} />
        </div>
        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Next Steps (KPIs for Next Quarter)</label>
          <textarea name="nextSteps" value={qbr.nextSteps} onChange={handleText} className="activity-textarea" placeholder="1. Launch PLG trial&#10;2. Submit 5 new ACE leads" rows={3} />
        </div>
      </div>
    </div>
  );
}
