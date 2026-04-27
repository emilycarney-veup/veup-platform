import { useActivities } from '../../context/ActivitiesContext';

export default function COSSReadinessAssessment() {
  const { activitiesData, updateActivityData } = useActivities();
  const { coss } = activitiesData;

  const handleSelect = (e) => updateActivityData('coss', { [e.target.name]: e.target.value });

  const calculateScore = () => {
    let total = 0;
    Object.values(coss).forEach(val => total += parseInt(val));
    return (total / 20) * 100; // 5 questions, max 4 pts each = 20
  };

  const score = calculateScore();
  let status = score >= 80 ? 'Highly Ready - Execute JBPs immediately.' : score >= 50 ? 'Moderate - Refine your C-Suite messaging.' : 'Needs Work - Focus on core value prop before pitching AWS reps.';

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>COSS Readiness Snapshot</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Assess your readiness to execute the Cloud Operator Sales Strategy natively with AWS reps.
      </p>

      <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: score >= 80 ? 'var(--success-color)' : score >= 50 ? '#e3b341' : 'var(--primary-color)' }}>
          {score}% Readiness
        </div>
        <div style={{ color: 'var(--text-muted)' }}>{status}</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {[
          { id: 'q1', text: '1. Is your Joint Value Proposition documented and easily pitchable?' },
          { id: 'q2', text: '2. Has your team drafted C-Suite personas specifically targeting cloud agility/budget?' },
          { id: 'q3', text: '3. Do you have dedicated Account Executives internally assigned to co-sell motions?' },
          { id: 'q4', text: '4. Do you heavily rely on a robust data enrichment tool (like Clay) to build target lists?' },
          { id: 'q5', text: '5. Do you have explicit KPIs tracking ACE Pipeline conversion rates?' }
        ].map(q => (
          <div key={q.id} className="input-block">
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>{q.text}</label>
            <select name={q.id} value={coss[q.id]} onChange={handleSelect} className="activity-select">
              <option value="1">1 - Strongly Disagree / No</option>
              <option value="2">2 - Somewhat No</option>
              <option value="3">3 - Somewhat Yes</option>
              <option value="4">4 - Strongly Agree / Yes</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
