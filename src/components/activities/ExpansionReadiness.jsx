import { useActivities } from '../../context/ActivitiesContext';

export default function ExpansionReadiness() {
  const { activitiesData, updateActivityData } = useActivities();
  const { expansion } = activitiesData;

  const handleSelect = (e) => updateActivityData('expansion', { [e.target.name]: e.target.value });

  const calculateScore = () => {
    let total = 0;
    Object.values(expansion).forEach(val => total += parseInt(val));
    return Math.round((total / 24) * 100); // 6 questions, max 4 pts each = 24
  };

  const score = calculateScore();

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>Global Expansion Readiness</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Assess your readiness to scale into new geographic territories via the Global Passport Program.
      </p>

      <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>Expansion Confidence Index</h3>
        <div style={{ height: '24px', backgroundColor: 'var(--sidebar-bg)', borderRadius: '12px', overflow: 'hidden', marginTop: '1rem' }}>
          <div style={{ width: `${score}%`, height: '100%', backgroundColor: 'var(--primary-color)', transition: 'width 0.3s' }} />
        </div>
        <div style={{ textAlign: 'right', marginTop: '0.5rem', fontWeight: 'bold' }}>{score}%</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {[
          { id: 'market', text: 'Market Preparedness (Demand, Competition)' },
          { id: 'leadership', text: 'Leadership and Key Hires (Alignment, Locality)' },
          { id: 'ops', text: 'Operational & Tech Readiness (Compliance, GDPR)' },
          { id: 'finance', text: 'Financial Readiness & Risk (Investment Strategy)' },
          { id: 'sales', text: 'Sales & Marketing (Localized Funnels)' },
          { id: 'product', text: 'Product-Market Fit (Regional Demand Alignment)' }
        ].map(cat => (
          <div key={cat.id} className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>{cat.text}</label>
            <select name={cat.id} value={expansion[cat.id]} onChange={handleSelect} className="activity-select">
              <option value="1">Low - We have not started.</option>
              <option value="2">Fair - We are discussing it.</option>
              <option value="3">Good - We have a solid baseline.</option>
              <option value="4">High - Fully aligned and ready.</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
