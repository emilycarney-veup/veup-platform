import { useActivities } from '../../context/ActivitiesContext';

export default function PartnerTierTracker() {
  const { activitiesData, updateActivityData } = useActivities();
  
  // Ensure we have defaults for new fields without breaking old ones
  const partnerTier = {
    currentTier: 'Enrolled',
    ...activitiesData.partnerTier,
    certs: {
      cloudPractitioner: 0,
      associate: 0,
      professional: 0,
      specialty: 0,
      ...(activitiesData.partnerTier?.certs || {})
    },
    accreditations: {
      business: 0,
      technical: 0,
      ...(activitiesData.partnerTier?.accreditations || {})
    }
  };

  const handleTierChange = (e) => updateActivityData('partnerTier', { ...partnerTier, currentTier: e.target.value });
  
  const handleCertChange = (certName, value) => {
    updateActivityData('partnerTier', {
      ...partnerTier,
      certs: { ...partnerTier.certs, [certName]: Math.max(0, parseInt(value) || 0) }
    });
  };
  
  const handleAccredChange = (accName, value) => {
    updateActivityData('partnerTier', {
      ...partnerTier,
      accreditations: { ...partnerTier.accreditations, [accName]: Math.max(0, parseInt(value) || 0) }
    });
  };

  // Logic to determine readiness
  const totals = {
    busAcc: partnerTier.accreditations.business,
    techAcc: partnerTier.accreditations.technical,
    totalAcc: partnerTier.accreditations.business + partnerTier.accreditations.technical,
    cp: partnerTier.certs.cloudPractitioner,
    technicalCerts: partnerTier.certs.associate + partnerTier.certs.professional + partnerTier.certs.specialty,
    proSpec: partnerTier.certs.professional + partnerTier.certs.specialty,
    totalCerts: partnerTier.certs.cloudPractitioner + partnerTier.certs.associate + partnerTier.certs.professional + partnerTier.certs.specialty
  };

  const isEligible = (tier) => {
    if (tier === 'ServicesSelect') {
      return totals.busAcc >= 2 && totals.techAcc >= 2 && totals.cp >= 2 && totals.technicalCerts >= 2;
    }
    if (tier === 'ServicesAdvanced') {
      return totals.busAcc >= 4 && totals.techAcc >= 4 && totals.cp >= 4 && totals.technicalCerts >= 6 && totals.proSpec >= 3;
    }
    if (tier === 'ServicesPremier') {
      return totals.busAcc >= 10 && totals.techAcc >= 10 && totals.cp >= 10 && totals.technicalCerts >= 25 && totals.proSpec >= 10;
    }
    return true;
  };

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>AWS Partner Tier & Certification Tracker</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Track your organization's personnel progression through AWS Accreditations and Certifications required for the Services Path.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        {/* Current Tier */}
        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Current Services Tier</h3>
          <select 
            value={partnerTier.currentTier} 
            onChange={handleTierChange}
            style={{ width: '100%', padding: '0.75rem', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '1rem' }}
          >
            <option value="Enrolled">Enrolled</option>
            <option value="ServicesSelect">Select Tier</option>
            <option value="ServicesAdvanced">Advanced Tier</option>
            <option value="ServicesPremier">Premier Tier</option>
          </select>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <p><strong>Universal Requirement:</strong> All Service Partner tiers require the $2,500 annual APN Program fee (yields $3,500 in AWS Credits).</p>
          </div>
        </div>

        {/* Accreditations Tracker */}
        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Accreditations (Partner Central)</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)' }}>
              <span>Business Accreditations</span>
              <input type="number" min="0" value={partnerTier.accreditations.business} onChange={(e) => handleAccredChange('business', e.target.value)} style={{ width: '60px', padding: '0.4rem', borderRadius: '4px', backgroundColor: '#222', color: '#fff', border: '1px solid #444', textAlign: 'center' }} />
            </label>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)' }}>
              <span>Technical Accreditations</span>
              <input type="number" min="0" value={partnerTier.accreditations.technical} onChange={(e) => handleAccredChange('technical', e.target.value)} style={{ width: '60px', padding: '0.4rem', borderRadius: '4px', backgroundColor: '#222', color: '#fff', border: '1px solid #444', textAlign: 'center' }} />
            </label>
            <div style={{ fontSize: '0.9rem', color: 'var(--primary-color)', marginTop: '0.5rem', fontWeight: 'bold' }}>
              Total Accredited Individuals: {totals.totalAcc}
            </div>
          </div>
        </div>

        {/* Certifications Tracker */}
        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>AWS Certifications</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)' }}>
              <span>Foundational (Cloud Practitioner)</span>
              <input type="number" min="0" value={partnerTier.certs.cloudPractitioner} onChange={(e) => handleCertChange('cloudPractitioner', e.target.value)} style={{ width: '60px', padding: '0.4rem', borderRadius: '4px', backgroundColor: '#222', color: '#fff', border: '1px solid #444', textAlign: 'center' }} />
            </label>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)' }}>
              <span>Associate Level</span>
              <input type="number" min="0" value={partnerTier.certs.associate} onChange={(e) => handleCertChange('associate', e.target.value)} style={{ width: '60px', padding: '0.4rem', borderRadius: '4px', backgroundColor: '#222', color: '#fff', border: '1px solid #444', textAlign: 'center' }} />
            </label>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)' }}>
              <span>Professional Level</span>
              <input type="number" min="0" value={partnerTier.certs.professional} onChange={(e) => handleCertChange('professional', e.target.value)} style={{ width: '60px', padding: '0.4rem', borderRadius: '4px', backgroundColor: '#222', color: '#fff', border: '1px solid #444', textAlign: 'center' }} />
            </label>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)' }}>
              <span>Specialty Level</span>
              <input type="number" min="0" value={partnerTier.certs.specialty} onChange={(e) => handleCertChange('specialty', e.target.value)} style={{ width: '60px', padding: '0.4rem', borderRadius: '4px', backgroundColor: '#222', color: '#fff', border: '1px solid #444', textAlign: 'center' }} />
            </label>
            <div style={{ fontSize: '0.9rem', color: 'var(--primary-color)', marginTop: '0.5rem', fontWeight: 'bold' }}>
              Total Certified Individuals: {totals.totalCerts}
            </div>
          </div>
        </div>
      </div>

      {/* Tier Readiness */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Tier Readiness Checklist</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          
          <div style={{ padding: '1.5rem', backgroundColor: isEligible('ServicesSelect') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255,255,255,0.02)', borderRadius: '8px', border: `1px solid ${isEligible('ServicesSelect') ? '#10b981' : 'var(--border-color)'}` }}>
            <h4 style={{ color: isEligible('ServicesSelect') ? '#10b981' : '#fff', marginTop: 0, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {isEligible('ServicesSelect') ? '✅' : '⏳'} Select Tier
            </h4>
            <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ color: '#fff' }}>Total Req: 4 Accredited + 4 Certified</li>
              <li style={{ color: totals.busAcc >= 2 && totals.techAcc >= 2 ? '#10b981' : '' }}>2 Business + 2 Technical Accreditations</li>
              <li style={{ color: totals.cp >= 2 ? '#10b981' : '' }}>2 Foundational (Cloud Practitioner)</li>
              <li style={{ color: totals.technicalCerts >= 2 ? '#10b981' : '' }}>2 Technical (Associate or higher)</li>
            </ul>
          </div>

          <div style={{ padding: '1.5rem', backgroundColor: isEligible('ServicesAdvanced') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255,255,255,0.02)', borderRadius: '8px', border: `1px solid ${isEligible('ServicesAdvanced') ? '#10b981' : 'var(--border-color)'}` }}>
            <h4 style={{ color: isEligible('ServicesAdvanced') ? '#10b981' : '#fff', marginTop: 0, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {isEligible('ServicesAdvanced') ? '✅' : '⏳'} Advanced Tier
            </h4>
            <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ color: '#fff' }}>Total Req: 8 Accredited + 10 Certified</li>
              <li style={{ color: totals.busAcc >= 4 && totals.techAcc >= 4 ? '#10b981' : '' }}>4 Business + 4 Technical Accreditations</li>
              <li style={{ color: totals.cp >= 4 ? '#10b981' : '' }}>4 Foundational (Cloud Practitioner)</li>
              <li style={{ color: totals.technicalCerts >= 6 && totals.proSpec >= 3 ? '#10b981' : '' }}>6 Technical (min 3 Pro/Specialty)</li>
            </ul>
          </div>

          <div style={{ padding: '1.5rem', backgroundColor: isEligible('ServicesPremier') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255,255,255,0.02)', borderRadius: '8px', border: `1px solid ${isEligible('ServicesPremier') ? '#10b981' : 'var(--border-color)'}` }}>
            <h4 style={{ color: isEligible('ServicesPremier') ? '#10b981' : '#fff', marginTop: 0, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {isEligible('ServicesPremier') ? '✅' : '⏳'} Premier Tier
            </h4>
            <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ color: '#fff' }}>Total Req: 20 Accredited + 35 Certified</li>
              <li style={{ color: totals.busAcc >= 10 && totals.techAcc >= 10 ? '#10b981' : '' }}>10 Business + 10 Technical Accreditations</li>
              <li style={{ color: totals.cp >= 10 ? '#10b981' : '' }}>10 Foundational (Cloud Practitioner)</li>
              <li style={{ color: totals.technicalCerts >= 25 && totals.proSpec >= 10 ? '#10b981' : '' }}>25 Technical (min 10 Pro/Spec)</li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Quick Reference Guidance */}
      <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Certifications & Training Quick Reference</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Accreditations vs Certifications</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              <strong>Accreditations</strong> focus on AWS partnership, sales, and core technical knowledge. They are completed through AWS Partner Central training modules and require periodic renewal.
              <br/><br/>
              <strong>Certifications</strong> represent validated technical/business expertise (Foundational, Associate, Professional, Specialty). They are obtained via AWS Training and Certification exams and are valid for 3 years.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Scorecard Integration</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              For certifications to appear on your Partner Scorecard, team members must use their Partner Central email for exams, or add their CertMetrics email to their Partner Central profile. Allow 5 business days for synchronization.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Certification Benefits</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              Partners receive AWS Promotional Credits for new certifications earned:
              <br/>- <strong>$300</strong> per Associate cert (max 2/year)
              <br/>- <strong>$500</strong> per Pro/Specialty cert (max 5/year)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
