import { useActivities } from '../../context/ActivitiesContext';

export default function OpportunityHygiene() {
  const { activitiesData, updateActivityData } = useActivities();
  const { opportunityHygiene } = activitiesData;

  const handleCheckbox = (e) => updateActivityData('opportunityHygiene', { [e.target.name]: e.target.checked });
  const handleText = (e) => updateActivityData('opportunityHygiene', { [e.target.name]: e.target.value });

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>ACE Opportunity Hygiene</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Practice best-in-class ACE pipeline submissions to prevent immediate rejections.
      </p>

      <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
        <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Pre-Submission Critical Checklist</h3>
        
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', cursor: 'pointer' }}>
          <input type="checkbox" name="customerConsent" checked={opportunityHygiene.customerConsent} onChange={handleCheckbox} style={{ width: '18px', height: '18px' }} />
          <span>Have you acquired explicit Customer Consent to share data with AWS?</span>
        </label>
        
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', cursor: 'pointer' }}>
          <input type="checkbox" name="architectureDefined" checked={opportunityHygiene.architectureDefined} onChange={handleCheckbox} style={{ width: '18px', height: '18px' }} />
          <span>Is the underlying AWS architecture (e.g., Bedrock, EC2, S3) clearly mapped for this deal?</span>
        </label>
      </div>

      <div className="input-block" style={{ marginBottom: '1.5rem' }}>
        <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Clear AWS Value (Why does the AWS rep care?)</label>
        <textarea name="clearAWSValue" value={opportunityHygiene.clearAWSValue} onChange={handleText} className="activity-textarea" placeholder="Does this drive massive AI compute? Does it accelerate a legacy database migration..?" rows={3} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Estimated Deal Size (TCV & ARR)</label>
          <input type="text" name="dealSize" value={opportunityHygiene.dealSize} onChange={handleText} className="activity-input" placeholder="e.g. $150k ARR / $450k TCV" />
        </div>
        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Primary Use Case</label>
          <input type="text" name="useCase" value={opportunityHygiene.useCase} onChange={handleText} className="activity-input" placeholder="e.g. Financial fraud detection automation" />
        </div>
      </div>
    </div>
  );
}
