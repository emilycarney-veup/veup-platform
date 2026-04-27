import { useActivities } from '../../context/ActivitiesContext';

export default function PartnerTierTracker() {
  const { activitiesData, updateActivityData } = useActivities();
  const { partnerTier } = activitiesData;

  const handleTierChange = (e) => updateActivityData('partnerTier', { currentTier: e.target.value });
  const handleCertChange = (certName, value) => {
    updateActivityData('partnerTier', {
      certs: { ...partnerTier.certs, [certName]: parseInt(value) || 0 }
    });
  };
  const handleJourneyChange = (e) => updateActivityData('partnerTier', { coSellJourney: e.target.value });
  const handleEnablementChange = (e) => updateActivityData('partnerTier', { enablementStage: e.target.value });

  const requiredCerts = {
    SoftwareDifferentiated: { cp: 4, sa: 4, pro: 1 },
    ServicesSelect: { cp: 2, sa: 2 },
    ServicesAdvanced: { cp: 4, sa: 4, pro: 3 },
    ServicesPremier: { cp: 10, sa: 10, pro: 10 }
  };

  const isEligible = (tier) => {
    if (tier === 'SoftwareValidated') return true; // Handled by ACE/FTR, no certs
    if (tier === 'SoftwareDifferentiated') return partnerTier.certs.cloudPractitioner >= requiredCerts.SoftwareDifferentiated.cp && partnerTier.certs.solutionsArchitectPro >= requiredCerts.SoftwareDifferentiated.pro;
    if (tier === 'ServicesSelect') return partnerTier.certs.cloudPractitioner >= requiredCerts.ServicesSelect.cp && partnerTier.certs.solutionsArchitectAssoc >= requiredCerts.ServicesSelect.sa;
    if (tier === 'ServicesAdvanced') return partnerTier.certs.cloudPractitioner >= requiredCerts.ServicesAdvanced.cp && partnerTier.certs.solutionsArchitectPro >= requiredCerts.ServicesAdvanced.pro;
    if (tier === 'ServicesPremier') return partnerTier.certs.cloudPractitioner >= requiredCerts.ServicesPremier.cp && partnerTier.certs.solutionsArchitectPro >= requiredCerts.ServicesPremier.pro;
    return true;
  };

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>Partner Tier & Enablement Tracker</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Track your organization's progression through APN levels and key enablement stages.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Current Partner Tier</h3>
          <select 
            value={partnerTier.currentTier} 
            onChange={handleTierChange}
            style={{ width: '100%', padding: '0.75rem', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '1rem' }}
          >
            <option value="Enrolled">Enrolled</option>
            <option value="SoftwareValidated">Software: Validated</option>
            <option value="SoftwareDifferentiated">Software: Differentiated</option>
            <option value="ServicesSelect">Services: Select</option>
            <option value="ServicesAdvanced">Services: Advanced</option>
            <option value="ServicesPremier">Services: Premier</option>
          </select>
        </div>

        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Certifications Held (Company-Wide)</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)' }}>
              <span>AWS Cloud Practitioner</span>
              <select value={partnerTier.certs.cloudPractitioner} onChange={(e) => handleCertChange('cloudPractitioner', e.target.value)} style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', backgroundColor: '#222', color: '#fff', border: '1px solid #444' }}>
                {[0,1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}{n === 10 ? '+' : ''}</option>)}
              </select>
            </label>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)' }}>
              <span>AWS Solutions Architect (Associate)</span>
              <select value={partnerTier.certs.solutionsArchitectAssoc} onChange={(e) => handleCertChange('solutionsArchitectAssoc', e.target.value)} style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', backgroundColor: '#222', color: '#fff', border: '1px solid #444' }}>
                {[0,1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}{n === 10 ? '+' : ''}</option>)}
              </select>
            </label>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)' }}>
              <span>AWS Solutions Architect (Professional)</span>
              <select value={partnerTier.certs.solutionsArchitectPro} onChange={(e) => handleCertChange('solutionsArchitectPro', e.target.value)} style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', backgroundColor: '#222', color: '#fff', border: '1px solid #444' }}>
                {[0,1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}{n === 10 ? '+' : ''}</option>)}
              </select>
            </label>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)' }}>
              <span>AWS Security Specialty</span>
              <select value={partnerTier.certs.securitySpec} onChange={(e) => handleCertChange('securitySpec', e.target.value)} style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', backgroundColor: '#222', color: '#fff', border: '1px solid #444' }}>
                {[0,1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}{n === 10 ? '+' : ''}</option>)}
              </select>
            </label>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Co-Sell Journey Progression</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Track your organization's alignment towards ISV Accelerate.</p>
          <select 
            value={partnerTier.coSellJourney} 
            onChange={handleJourneyChange}
            style={{ width: '100%', padding: '0.75rem', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '1rem' }}
          >
            <option value="Good">Foundation</option>
            <option value="Better">Validated Co-Sell</option>
            <option value="Best">ISV Accelerate</option>
          </select>
        </div>

        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Sales Enablement Stage</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Reflects your GTM alignment and field readiness.</p>
          <select 
            value={partnerTier.enablementStage} 
            onChange={handleEnablementChange}
            style={{ width: '100%', padding: '0.75rem', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '1rem' }}
          >
            <option value="Early">Early (Initial Training)</option>
            <option value="Growth">Growth (Active Co-Selling)</option>
            <option value="Mature">Mature (Strategic GTM Alignment)</option>
          </select>
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div style={{ padding: '1.5rem', backgroundColor: 'rgba(50, 78, 216, 0.1)', borderRadius: '8px', border: '1px solid var(--primary-color)' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Tier Check (Software Path)</h3>
          <p style={{ color: '#fff', fontSize: '0.9rem' }}>
            Validated: ✅ No certifications required. Relies on successful ACE Pipeline and FTR submission.
          </p>
          <p style={{ color: '#fff', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Differentiated: {isEligible('SoftwareDifferentiated') ? '✅ Technical baseline met.' : '❌ Missing required advanced certifications for Differentiated.'}
          </p>
        </div>
        <div style={{ padding: '1.5rem', backgroundColor: 'rgba(227, 179, 65, 0.1)', borderRadius: '8px', border: '1px solid #e3b341' }}>
          <h3 style={{ color: '#e3b341', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Tier Check (Services Path)</h3>
          <p style={{ color: '#fff', fontSize: '0.9rem' }}>
            Select: {isEligible('ServicesSelect') ? '✅ Tier readiness met.' : '❌ Missing certifications for Select.'}
          </p>
          <p style={{ color: '#fff', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Advanced: {isEligible('ServicesAdvanced') ? '✅ Advanced Tier baseline met.' : '❌ Missing required advanced certifications for Advanced.'}
          </p>
          <p style={{ color: '#fff', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Premier: {isEligible('ServicesPremier') ? '✅ Premier baseline met.' : '❌ Missing massive certification density for Premier.'}
          </p>
        </div>
      </div>
    </div>
  );
}
