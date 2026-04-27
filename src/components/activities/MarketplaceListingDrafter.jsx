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
        Fill out the core requirements for your listing page metadata.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Product Type</label>
            <select name="productType" value={listing.productType} onChange={handleChange} className="activity-select">
              <option value="SaaS">SaaS (Fully Managed)</option>
              <option value="ProServe">Professional Services</option>
              <option value="AMI">AMI</option>
              <option value="Container">Container</option>
            </select>
          </div>
          <div className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Pricing Model</label>
            <select name="pricingModel" value={listing.pricingModel} onChange={handleChange} className="activity-select">
              <option value="Pay-As-You-Go">Consumption (Pay-As-You-Go)</option>
              <option value="Annual">Annual / Multi-Year Contract</option>
              <option value="Free-Trial">Free Trial</option>
            </select>
          </div>
        </div>

        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Short Description</label>
          <input type="text" name="shortDesc" value={listing.shortDesc} onChange={handleChange} className="activity-input" placeholder="A brief punchy tagline..." />
        </div>

        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Long Description</label>
          <textarea name="longDesc" value={listing.longDesc} onChange={handleChange} className="activity-textarea" placeholder="Detailed product overview..." rows={4} />
        </div>

        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Product Highlights (Bullet Points)</label>
          <textarea name="highlights" value={listing.highlights} onChange={handleChange} className="activity-textarea" placeholder="- Feature 1&#10;- Feature 2" rows={3} />
        </div>

        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Search Keywords (Comma separated)</label>
          <input type="text" name="keywords" value={listing.keywords} onChange={handleChange} className="activity-input" placeholder="e.g. Security, DevOps, Automation" />
        </div>

        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Pricing Dimensions (If applicable)</label>
          <input type="text" name="pricingDimensions" value={listing.pricingDimensions} onChange={handleChange} className="activity-input" placeholder="e.g. $0.15 per Gigabyte Processed" />
        </div>
      </div>
    </div>
  );
}
