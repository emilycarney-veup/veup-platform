import { useActivities } from '../../context/ActivitiesContext';

export default function MarketplaceListingDrafter() {
  const { activitiesData, updateActivityData } = useActivities();
  const { listing } = activitiesData;

  const handleChange = (e) => {
    updateActivityData('listing', { [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>Marketplace Listing Drafter</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Prepare the technical metadata for your public AWS Marketplace listing. (From Module 1 & 2)
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Public Value Proposition (Max 250 words)</label>
          <textarea
            name="valueProp"
            value={listing.valueProp}
            onChange={handleChange}
            className="activity-textarea"
            placeholder="Enter the primary value proposition that will appear at the top of your AWS Marketplace listing..."
            rows={4}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Deployment Architecture</label>
            <select
              name="architecture"
              value={listing.architecture}
              onChange={handleChange}
              className="activity-select"
            >
              <option value="SaaS">SaaS (Fully Managed)</option>
              <option value="AMI">AMI (Amazon Machine Image)</option>
              <option value="Container">Container</option>
            </select>
          </div>

          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Primary Pricing Model</label>
            <select
              name="pricingModel"
              value={listing.pricingModel}
              onChange={handleChange}
              className="activity-select"
            >
              <option value="Pay-As-You-Go">Consumption (Pay-As-You-Go)</option>
              <option value="Annual-Contract">Annual Contract (Upfront)</option>
              <option value="Free-Trial">Free Trial -> Monthly</option>
            </select>
          </div>
        </div>

        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Target Buyer Persona</label>
          <input
            type="text"
            name="targetAudience"
            value={listing.targetAudience}
            onChange={handleChange}
            className="activity-input"
            placeholder="e.g. CTOs / Head of Infosec at FinTech companies"
          />
        </div>
      </div>
    </div>
  );
}
