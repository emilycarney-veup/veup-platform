import { useActivities } from '../../context/ActivitiesContext';

export default function OpportunityHygiene() {
  const { activitiesData, updateActivityData } = useActivities();
  const { opportunityHygiene } = activitiesData;

  const handleCheckbox = (e) => updateActivityData('opportunityHygiene', { [e.target.name]: e.target.checked });
  const handleText = (e) => updateActivityData('opportunityHygiene', { [e.target.name]: e.target.value });

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>ACE Pipeline Opportunity Form</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Practice best-in-class ACE pipeline submissions. Fill out these core requirements before pushing to AWS Partner Central to avoid manual rejection.
      </p>

      <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Pre-Submission Critical Checklist</h3>
        
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1rem', cursor: 'pointer' }}>
          <input type="checkbox" name="customerConsent" checked={opportunityHygiene.customerConsent || false} onChange={handleCheckbox} style={{ width: '18px', height: '18px', marginTop: '2px', accentColor: 'var(--primary-color)' }} />
          <div>
            <span style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>Customer Consent</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Have you acquired explicit customer consent to share their Personally Identifiable Information (PII) with AWS?</span>
          </div>
        </label>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>1. Customer & Account Details</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Customer Company Name</label>
            <input type="text" name="companyName" value={opportunityHygiene.companyName || ''} onChange={handleText} className="activity-input" placeholder="Official business entity name" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Customer Website</label>
            <input type="url" name="customerWebsite" value={opportunityHygiene.customerWebsite || ''} onChange={handleText} className="activity-input" placeholder="https://..." />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Industry Vertical</label>
            <input type="text" name="industry" value={opportunityHygiene.industry || ''} onChange={handleText} className="activity-input" placeholder="e.g. Financial Services" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Country</label>
            <input type="text" name="country" value={opportunityHygiene.country || ''} onChange={handleText} className="activity-input" placeholder="e.g. United States" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Postal Code</label>
            <input type="text" name="postalCode" value={opportunityHygiene.postalCode || ''} onChange={handleText} className="activity-input" placeholder="ZIP Code" />
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>2. Deal Economics & Timeline</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Estimated AWS MRR (USD)</label>
            <input type="number" name="expectedAWSRevenue" value={opportunityHygiene.expectedAWSRevenue || ''} onChange={handleText} className="activity-input" placeholder="e.g. 5000" />
            <p style={{marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)'}}>The AWS Monthly Recurring Revenue generated by hosting your solution.</p>
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Target Close Date</label>
            <input type="date" name="targetCloseDate" value={opportunityHygiene.targetCloseDate || ''} onChange={handleText} className="activity-input" />
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>3. Project Context</h3>
        
        <div className="input-block" style={{ marginBottom: '1.5rem' }}>
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Customer Business Problem</label>
          <textarea name="customerProblem" value={opportunityHygiene.customerProblem || ''} onChange={handleText} className="activity-textarea" placeholder="Describe the specific business challenge faced by the customer and how your solution tackles it..." rows={3} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Use Case</label>
            <input type="text" name="useCase" value={opportunityHygiene.useCase || ''} onChange={handleText} className="activity-input" placeholder="e.g. Migration, Security, Backup" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Solution Offered (Offering ID)</label>
            <input type="text" name="solutionOffered" value={opportunityHygiene.solutionOffered || ''} onChange={handleText} className="activity-input" placeholder="e.g. S-1234567 or 'Other'" />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>National Security Classification</label>
            <select name="isNatSec" value={opportunityHygiene.isNatSec || 'No'} onChange={handleText} className="activity-select">
              <option value="No">No - Standard Opportunity</option>
              <option value="Yes">Yes - Contains classified NS info</option>
            </select>
            <p style={{marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)'}}>If Yes, AWS CRM redacts customer details automatically.</p>
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Partner Primary Need from AWS</label>
            <select name="partnerPrimaryNeed" value={opportunityHygiene.partnerPrimaryNeed || ''} onChange={handleText} className="activity-select">
              <option value="">Select Assistance Scenario...</option>
              <option value="Visibility Only">Visibility Only (Do not need AWS Support)</option>
              <option value="Co-Sell">Co-Sell (Active AWS Sales involvement required)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
