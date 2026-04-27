import { useActivities } from '../../context/ActivitiesContext';

export default function BetterTogetherBuilder() {
  const { activitiesData, updateActivityData } = useActivities();
  const { betterTogether } = activitiesData;

  const handleChange = (e) => {
    updateActivityData('betterTogether', { [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>The Better Together Story</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        How does the end-customer experience an exponential leap in value specifically because our software is hosted on AWS? (From Module 3)
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>1. What core problem does your software solve?</label>
          <textarea
            name="problem"
            value={betterTogether.problem}
            onChange={handleChange}
            className="activity-textarea"
            placeholder="Briefly describe the pain point..."
            rows={2}
          />
        </div>

        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>2. Agility: How does running on AWS specifically speed up deployment or scale for the user?</label>
          <textarea
            name="agility"
            value={betterTogether.agility}
            onChange={handleChange}
            className="activity-textarea"
            placeholder="e.g. Instantly scales using EC2 without managing legacy hardware..."
            rows={2}
          />
        </div>

        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>3. Security: How does AWS native security protect their data?</label>
          <textarea
            name="security"
            value={betterTogether.security}
            onChange={handleChange}
            className="activity-textarea"
            placeholder="e.g. Inherits AWS shared responsibility model, integrated with GuardDuty..."
            rows={2}
          />
        </div>

        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>4. Procurement: How does selling via Marketplace remove friction?</label>
          <textarea
            name="procurement"
            value={betterTogether.procurement}
            onChange={handleChange}
            className="activity-textarea"
            placeholder="e.g. Bypasses 9-month vendor onboarding, burns down existing EDP commitments..."
            rows={2}
          />
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--accent-color)' }}>
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--accent-color)', fontWeight: 'bold' }}>Final Pitch (Synthesize the above into a 2-sentence Value Prop):</label>
          <textarea
            name="story"
            value={betterTogether.story}
            onChange={handleChange}
            className="activity-textarea"
            style={{ border: 'none', backgroundColor: 'rgba(0,0,0,0.2)' }}
            placeholder="Bring it all together here. What is the ultimate 'Better Together' pitch your AE will use?"
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}
