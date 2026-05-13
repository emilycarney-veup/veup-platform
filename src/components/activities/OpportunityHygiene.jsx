import { useActivities } from '../../context/ActivitiesContext';

export default function OpportunityHygiene() {
  const { activitiesData, updateActivityData } = useActivities();
  const { opportunityHygiene } = activitiesData;

  const handleCheckbox = (e) => updateActivityData('opportunityHygiene', { [e.target.name]: e.target.checked });
  const handleText = (e) => updateActivityData('opportunityHygiene', { [e.target.name]: e.target.value });

  return (
    <div style={{ paddingBottom: '2rem' }}>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>ACE Pipeline Opportunity Submission</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Practice best-in-class ACE pipeline submissions. Fill out these core requirements before pushing to AWS Partner Central to avoid manual rejection.
      </p>

      <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Pre-Submission Critical Checklist</h3>
        
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1rem', cursor: 'pointer' }}>
          <input type="checkbox" name="customerConsent" checked={opportunityHygiene.customerConsent || false} onChange={handleCheckbox} style={{ width: '18px', height: '18px', marginTop: '2px', accentColor: 'var(--primary-color)' }} />
          <div>
            <span style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>Customer Consent (Required)</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Have you acquired explicit customer consent to share their information with AWS?</span>
          </div>
        </label>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>1. Customer Details</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Customer Company Name (Required)</label>
            <input type="text" name="companyName" value={opportunityHygiene.companyName || ''} onChange={handleText} className="activity-input" placeholder="Company name of end customer" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Industry Vertical (Required)</label>
            <input type="text" name="industry" value={opportunityHygiene.industry || ''} onChange={handleText} className="activity-input" placeholder="e.g. Healthcare, Retail" />
            <p style={{marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)'}}>Note: Government/Education requires RFx & Contract Vehicle.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Customer Website (Required)</label>
            <input type="url" name="customerWebsite" value={opportunityHygiene.customerWebsite || ''} onChange={handleText} className="activity-input" placeholder="Valid URL" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Country (Required)</label>
            <input type="text" name="country" value={opportunityHygiene.country || ''} onChange={handleText} className="activity-input" placeholder="e.g. United States" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Postal Code (Required)</label>
            <input type="text" name="postalCode" value={opportunityHygiene.postalCode || ''} onChange={handleText} className="activity-input" placeholder="Must match country format" />
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>2. Partner Needs & Co-Sell Support</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Partner Primary Need from AWS (Required)</label>
            <select name="primaryNeed" value={opportunityHygiene.primaryNeed || 'Co-Sell with AWS'} onChange={handleText} className="activity-select">
              <option value="Co-Sell with AWS">Co-Sell with AWS</option>
              <option value="Do Not Need Support">Do Not Need Support (Visibility Only)</option>
            </select>
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Specific Needs for Co-Sell</label>
            <select name="specificNeeds" value={opportunityHygiene.specificNeeds || ''} onChange={handleText} className="activity-select">
              <option value="">-- Select Specific Need --</option>
              <option value="Architectural Validation">Architectural Validation</option>
              <option value="Business Presentation">Business Presentation</option>
              <option value="Competitive Information">Competitive Information</option>
              <option value="Deal Support">Deal Support</option>
              <option value="Pricing Assistance">Pricing Assistance</option>
              <option value="Technical Consultation">Technical Consultation</option>
              <option value="TCO Evaluation">Total Cost of Ownership Evaluation</option>
              <option value="Support for Public Tender">Support for Public Tender / RFx</option>
            </select>
            <p style={{marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)'}}>Mandatory if Co-Sell is selected.</p>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>3. Project Details</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Opportunity Type (Required)</label>
            <select name="oppType" value={opportunityHygiene.oppType || 'New'} onChange={handleText} className="activity-select">
              <option value="New">Net New Business</option>
              <option value="Expansion">Expansion (Existing contract)</option>
              <option value="Renewal">Flat Renewal (No expansion)</option>
            </select>
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Partner Project Title (Required)</label>
            <input type="text" name="projectTitle" value={opportunityHygiene.projectTitle || ''} onChange={handleText} className="activity-input" placeholder="Customer + Workload + Delivery Model" />
          </div>
        </div>

        <div className="input-block" style={{ marginBottom: '1.5rem' }}>
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Customer Business Problem (Required)</label>
          <textarea name="customerProblem" value={opportunityHygiene.customerProblem || ''} onChange={handleText} className="activity-textarea" placeholder="Clear description of the customer's business problem/pain point you are trying to address. Must be > 20 characters." rows={3} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Solution Offered (Required)</label>
            <input type="text" name="solutionOffered" value={opportunityHygiene.solutionOffered || ''} onChange={handleText} className="activity-input" placeholder="Select up to 10 solutions" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Use Case (Required)</label>
            <input type="text" name="useCase" value={opportunityHygiene.useCase || ''} onChange={handleText} className="activity-input" placeholder="Type of workload" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Delivery Model (Required)</label>
            <select name="deliveryModel" value={opportunityHygiene.deliveryModel || 'SaaS or PaaS'} onChange={handleText} className="activity-select">
              <option value="SaaS or PaaS">SaaS or PaaS</option>
              <option value="BYOL or AMI">BYOL or AMI</option>
              <option value="Managed Services">Managed Services</option>
              <option value="Professional Services">Professional Services</option>
              <option value="Resell">Resell</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>4. Financials</h3>
        
        <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.9rem', marginBottom: '1.5rem', borderLeft: '4px solid #e3b341' }}>
          <strong style={{ color: '#e3b341', display: 'block', marginBottom: '0.5rem' }}>MRR Guidelines</strong>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-muted)' }}>
            <li><strong>AWS-based multi-tenant SaaS:</strong> Enter $1</li>
            <li><strong>Marketplace Private Offers (MPPO) / CPPO:</strong> Enter $1 (Channel Partner) or the Listing Fee (ISV)</li>
            <li><strong>WAFR / Cost Optimization:</strong> Enter $1 at time of submission</li>
            <li><strong>AWS ProServe:</strong> Enter the AWS ProServe contract value</li>
          </ul>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Est. AWS MRR Forecast (Required)</label>
            <input type="number" name="expectedAWSRevenue" value={opportunityHygiene.expectedAWSRevenue || ''} onChange={handleText} className="activity-input" placeholder="Expected monthly fee 3-months post-launch" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Target Close Date (Required)</label>
            <input type="date" name="targetCloseDate" value={opportunityHygiene.targetCloseDate || ''} onChange={handleText} className="activity-input" />
            <p style={{marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)'}}>Expected date production/billing starts. Must be a future date.</p>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>5. Marketing Activity</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>From Marketing Activity? (Required)</label>
            <select name="isMarketingActivity" value={opportunityHygiene.isMarketingActivity || 'No'} onChange={handleText} className="activity-select">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>AWS Campaign Name (Optional)</label>
            <input type="text" name="sourceCampaign" value={opportunityHygiene.sourceCampaign || ''} onChange={handleText} className="activity-input" placeholder="e.g. EMEA-Partner-FY22-MKT-PPL" />
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>MDF Used? (Required)</label>
            <select name="mdfUsed" value={opportunityHygiene.mdfUsed || 'No'} onChange={handleText} className="activity-select">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
