import { useActivities } from '../../context/ActivitiesContext';

export default function PartnerTierTracker() {
  const { activitiesData, updateActivityData } = useActivities();
  const { partnerTier } = activitiesData;

  const handleSelect = (e) => {
    updateActivityData('partnerTier', { currentTier: e.target.value });
  };

  const handleCert = (e) => {
    updateActivityData('partnerTier', { certs: { ...partnerTier.certs, [e.target.name]: e.target.checked } });
  };

  // Logic for what is missing
  const activeCerts = Object.values(partnerTier.certs).filter(Boolean).length;
  let missingMsg = '';
  if (partnerTier.currentTier === 'Enrolled') missingMsg = 'To reach Validated, pass the FTR and generate baseline pipeline.';
  if (partnerTier.currentTier === 'Validated') missingMsg = `To go to Advanced/Premier, you need Competencies. Currently have ${activeCerts} key cert(s) selected. More Professional/Specialty certs accelerate status.`;

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>Partner Tier & Certifications</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Track your APN standing and individual engineering certifications.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Current Partner Tier</h3>
          <select name="currentTier" value={partnerTier.currentTier} onChange={handleSelect} className="activity-select" style={{ marginBottom: '1rem' }}>
            <option value="Enrolled">Enrolled (Registered)</option>
            <option value="Validated">Validated (Passed FTR)</option>
            <option value="Differentiated">Differentiated (Has Competency)</option>
            <option value="Advanced/Premier">Advanced / Premier</option>
          </select>

          <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.9rem' }}>
            <strong style={{ color: 'var(--accent-color)' }}>Status Gap: </strong>
            <span style={{ color: 'var(--text-muted)' }}>{missingMsg}</span>
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Key Certifications Held</h3>
          
          {[
            { name: 'cloudPractitioner', label: 'AWS Cloud Practitioner (Foundational)' },
            { name: 'solutionsArchitectAssoc', label: 'AWS Solutions Architect (Associate)' },
            { name: 'solutionsArchitectPro', label: 'AWS Solutions Architect (Professional)' },
            { name: 'securitySpec', label: 'AWS Security (Specialty)' }
          ].map(cert => (
            <label key={cert.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem', cursor: 'pointer' }}>
              <input type="checkbox" name={cert.name} checked={partnerTier.certs[cert.name]} onChange={handleCert} style={{ width: '18px', height: '18px' }} />
              <span>{cert.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
