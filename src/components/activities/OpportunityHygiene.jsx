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
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>1. Customer Details</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Enter precise details to assist AWS with SME mapping and geo-segmentation.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Customer Company Name</label>
            <input type="text" name="companyName" value={opportunityHygiene.companyName || ''} onChange={handleText} className="activity-input" placeholder="Exact legal name (drives AWS matching)" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Industry Vertical</label>
            <input type="text" name="industry" value={opportunityHygiene.industry || ''} onChange={handleText} className="activity-input" placeholder="Most specific one (improves matching)" />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Customer Website</label>
            <input type="url" name="customerWebsite" value={opportunityHygiene.customerWebsite || ''} onChange={handleText} className="activity-input" placeholder="Full URL details" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Country</label>
            <input type="text" name="country" value={opportunityHygiene.country || ''} onChange={handleText} className="activity-input" placeholder="Full Details" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Postal Code</label>
            <input type="text" name="postalCode" value={opportunityHygiene.postalCode || ''} onChange={handleText} className="activity-input" placeholder="Full Details" />
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>DUNS (Optional)</label>
            <input type="text" name="duns" value={opportunityHygiene.duns || ''} onChange={handleText} className="activity-input" placeholder="Include if known to validate identity" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>National Security Classification</label>
            <select name="isNatSec" value={opportunityHygiene.isNatSec || 'No'} onChange={handleText} className="activity-select">
              <option value="No">No - Standard Opportunity</option>
              <option value="Yes">Yes - Contains classified NS info</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>2. Project Details</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Opportunity Type</label>
            <select name="oppType" value={opportunityHygiene.oppType || 'New'} onChange={handleText} className="activity-select">
              <option value="New">Net New (Impacts prioritization)</option>
              <option value="Expansion">Expansion</option>
              <option value="Renewal">Renewal</option>
            </select>
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Project Title</label>
            <input type="text" name="projectTitle" value={opportunityHygiene.projectTitle || ''} onChange={handleText} className="activity-input" placeholder="Customer + Workload + Delivery Model" />
            <p style={{marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)'}}>SME scans for relevance based on this title.</p>
          </div>
        </div>

        <div className="input-block" style={{ marginBottom: '1.5rem' }}>
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Business Problem</label>
          <textarea name="customerProblem" value={opportunityHygiene.customerProblem || ''} onChange={handleText} className="activity-textarea" placeholder="2-3 lines, purely business focused (Critical for ML matching)" rows={3} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Solution / Use Case / Delivery Model</label>
            <input type="text" name="useCase" value={opportunityHygiene.useCase || ''} onChange={handleText} className="activity-input" placeholder="Select precisely (improves accuracy)" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>AWS Products</label>
            <input type="text" name="awsProducts" value={opportunityHygiene.awsProducts || ''} onChange={handleText} className="activity-input" placeholder="List key services (improves technical match)" />
          </div>
        </div>

        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Next Steps</label>
          <input type="text" name="nextSteps" value={opportunityHygiene.nextSteps || ''} onChange={handleText} className="activity-input" placeholder="Add 1 line (e.g. workshop date) to show momentum" />
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>3. Financials</h3>
        
        <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.9rem', marginBottom: '1.5rem', borderLeft: '4px solid #e3b341' }}>
          <strong style={{ color: '#e3b341', display: 'block', marginBottom: '0.5rem' }}>General PDM Tip</strong>
          <span style={{ color: 'var(--text-muted)' }}>
            MRR "placeholders" are used (ie $2500, $5000 etc) but ONLY before a project has been scoped. Once the Simply Monthly Calculator (SMC) has been established <strong>ADJUST THE MRR IN SALESFORCE IMMEDIATELY</strong>. CONTACT THE AWS AM VIA SLACK OR EMAIL REQUESTING THEY MATCH THE NEW SALES STAGE AND MRR ON THEIR SIDE. What most partners don't know is this requires a manual process for the AWS Sellers. Their Salesforce is the source of the truth and is what feeds directly into your AWS consumption contribution and your PDMs.
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Est. AWS MRR Forecast</label>
            <input type="number" name="expectedAWSRevenue" value={opportunityHygiene.expectedAWSRevenue || ''} onChange={handleText} className="activity-input" placeholder="Forecast 3 months post-launch ($1 if SaaS)" />
            <p style={{marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)'}}>Feeds directly into pipeline weighting.</p>
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Target Close Date</label>
            <input type="date" name="targetCloseDate" value={opportunityHygiene.targetCloseDate || ''} onChange={handleText} className="activity-input" />
            <p style={{marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)'}}>Future, realistic date (drives forecast accuracy).</p>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>4. Marketing (If Applicable)</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Source/Campaign</label>
            <input type="text" name="sourceCampaign" value={opportunityHygiene.sourceCampaign || ''} onChange={handleText} className="activity-input" placeholder="Format: Region-Partner-FY25-MKT-PPL" />
            <p style={{marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)'}}>Tracks marketing attribution and increases MDF chances.</p>
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>MDF Used?</label>
            <select name="mdfUsed" value={opportunityHygiene.mdfUsed || 'No'} onChange={handleText} className="activity-select">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            <p style={{marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)'}}>Measures MDF effectiveness.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
