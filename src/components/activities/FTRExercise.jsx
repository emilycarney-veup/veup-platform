export default function FTRExercise() {
  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ color: '#fff', margin: '0 0 0.5rem 0' }}>Foundational Technical Review (FTR)</h2>
        <p style={{ color: 'var(--text-muted)', margin: 0 }}>
          Download the official FTR & CIS benchmark self-assessment resources. You must complete the relevant assessment based on your offering type (Service or Software) before progressing.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {/* Service Offering CSV */}
        <div style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--border-color)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', padding: '0.4rem', borderRadius: '4px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </span>
            <h3 style={{ color: '#fff', margin: 0, fontSize: '1.1rem' }}>Service Offering Assessment</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
            Comprehensive checklist for evaluating AWS Service Offerings against the Well-Architected Framework and CIS benchmarks.
          </p>
          <a 
            href="/assets/Foundational_Technical_Review_for_Service_Offering.xlsx" 
            download 
            style={{ marginTop: 'auto', display: 'inline-block', padding: '0.75rem 1rem', backgroundColor: 'var(--primary-color)', color: '#fff', textDecoration: 'none', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold' }}
          >
            Download Spreadsheet
          </a>
        </div>

        {/* Software CSV */}
        <div style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--border-color)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', padding: '0.4rem', borderRadius: '4px' }}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </span>
            <h3 style={{ color: '#fff', margin: 0, fontSize: '1.1rem' }}>Partner Hosted (Software) Assessment</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
            Technical review requirements tailored specifically for ISV software products and Partner Hosted SaaS solutions.
          </p>
          <a 
            href="/assets/Partner_Hosted_Foundational_Technical_Review_Software.xlsx" 
            download 
            style={{ marginTop: 'auto', display: 'inline-block', padding: '0.75rem 1rem', backgroundColor: 'var(--primary-color)', color: '#fff', textDecoration: 'none', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold' }}
          >
            Download Spreadsheet
          </a>
        </div>
      </div>
      
      <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
        <h4 style={{ color: '#fff', marginTop: 0, marginBottom: '0.5rem' }}>Next Steps</h4>
        <ul style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
          <li>Select and download the assessment that matches your product architecture.</li>
          <li>Ensure your Technical Lead works through the Security and Resilience pillars.</li>
          <li>Review your findings internally before proceeding to the formal AWS submission.</li>
        </ul>
      </div>
    </div>
  );
}
