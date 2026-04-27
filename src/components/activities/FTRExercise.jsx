import { useActivities } from '../../context/ActivitiesContext';

export default function FTRExercise() {
  const { activitiesData, updateActivityData } = useActivities();
  const { ftr } = activitiesData;

  const handleCheckbox = (e) => {
    updateActivityData('ftr', { [e.target.name]: e.target.checked });
  };

  const handleText = (e) => {
    updateActivityData('ftr', { [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>FTR Readiness & CIS Benchmarks</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Assess your readiness for the Foundational Technical Review.
      </p>

      <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
        <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Core FTR Checklist</h3>
        
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', cursor: 'pointer' }}>
          <input type="checkbox" name="isWellArchitected" checked={ftr.isWellArchitected} onChange={handleCheckbox} style={{ width: '18px', height: '18px' }} />
          <span>Have you completed the AWS Well-Architected Framework Self-Assessment?</span>
        </label>
        
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', cursor: 'pointer' }}>
          <input type="checkbox" name="hasCISReport" checked={ftr.hasCISReport} onChange={handleCheckbox} style={{ width: '18px', height: '18px' }} />
          <span>Can you provide a clean AWS Security Hub CIS Benchmark Report (0 critical/high findings)?</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', cursor: 'pointer' }}>
          <input type="checkbox" name="encryptionAtRest" checked={ftr.encryptionAtRest} onChange={handleCheckbox} style={{ width: '18px', height: '18px' }} />
          <span>Is Data Encryption at Rest verified for all volumes (EBS, S3, RDS)?</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', cursor: 'pointer' }}>
          <input type="checkbox" name="tenantIsolation" checked={ftr.tenantIsolation} onChange={handleCheckbox} style={{ width: '18px', height: '18px' }} />
          <span>If SaaS, are strict tenant isolation protocols formally documented?</span>
        </label>
      </div>

      <div className="input-block">
        <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Identified Gaps & Remediation Notes</label>
        <textarea name="notes" value={ftr.notes} onChange={handleText} className="activity-textarea" placeholder="Note any missing IAM policies, unencrypted volumes, or CloudTrail gaps..." rows={4} />
      </div>
    </div>
  );
}
