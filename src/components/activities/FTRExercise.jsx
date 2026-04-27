import { useActivities } from '../../context/ActivitiesContext';

const FTR_CONTROLS = [
  { id: 'DEF-001', expected: 'yes', title: 'Service Offering Definition', desc: 'Clearly define the core of service offering (what, who, and how). A public URL containing offering details is required.' },
  { id: 'PROJ-001', expected: 'yes', title: 'Project Plan Template', desc: 'Define a customer engagement project plan template including SOW, phases, and roles.' },
  { id: 'TECH-001', expected: 'yes', title: 'Technical Expertise', desc: 'Identify relevant AWS technical expertise required and provide written descriptions of training plans.' },
  { id: 'RISK-001', expected: 'yes', title: 'Risk Mitigation', desc: 'Identify and Mitigate risks using AWS Well Architected Framework. Need written risk assessments.' },
  { id: 'SEC-001', expected: 'yes', title: 'Secure AWS accounts governance', desc: 'Internal Security SOP must include secure AWS account governance (MFA on root, alarms, etc).' },
  { id: 'SEC-002', expected: 'yes', title: 'Secure access to customer-owned accounts', desc: 'Standard approach to access customer accounts via cross-account IAM roles, not long term user keys.' },
  { id: 'SAAS-001', expected: 'yes', title: 'SaaS Components', desc: 'Any SaaS components operated by partner must pass their own software FTR (select N/A if no SaaS components).' },
  { id: 'CUS-001', expected: 'yes', title: 'Customer Feedback', desc: 'Implement a process to collect customer feedback including business impacts.' }
];

export default function FTRExercise() {
  const { activitiesData, updateActivityData } = useActivities();
  const { ftr } = activitiesData;

  const handleUpdate = (id, field, value) => {
    updateActivityData('ftr', {
      [id]: { ...(ftr[id] || {met: null, notes: ''}), [field]: value }
    });
  };

  const getStatusColor = (id, expectedDir) => {
    const status = ftr[id]?.met;
    if (status === null || status === undefined) return 'transparent';
    if (status === 'na') return '#4a5568';
    
    return status === expectedDir ? 'var(--success-color)' : '#ff4d4f';
  };

  const downloadCSV = () => {
    const headers = ['ID', 'Requirement', 'Met?', 'Partner Notes'];
    const rows = FTR_CONTROLS.map(ctrl => [
      ctrl.id, 
      `"${ctrl.title}"`, 
      ftr[ctrl.id]?.met?.toUpperCase() || '', 
      `"${(ftr[ctrl.id]?.notes || '').replace(/"/g, '""')}"`
    ]);
    
    const csvContent = [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'FTR_Self_Assessment.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <h2 style={{ color: '#fff', margin: 0 }}>Foundational Technical Review (FTR)</h2>
        <button 
          onClick={downloadCSV}
          style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--primary-color)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Download CSV
        </button>
      </div>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Complete the Service Offering Validation Checklist. Replicated from the official FTR Assessment.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {FTR_CONTROLS.map(ctrl => {
          const statusVal = ftr[ctrl.id]?.met;
          const indicatorColor = getStatusColor(ctrl.id, ctrl.expected);
          
          return (
            <div key={ctrl.id} style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', borderLeft: `4px solid ${indicatorColor || 'var(--border-color)'}`, overflow: 'hidden' }}>
              <div style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-color)', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 200px', gap: '1rem', alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>{ctrl.id}</span>
                    <h3 style={{ color: '#fff', margin: 0, fontSize: '1.1rem' }}>{ctrl.title}</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>{ctrl.desc}</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '600' }}>Requirement Met?</span>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', cursor: 'pointer' }}>
                      <input type="radio" name={ctrl.id} value="yes" checked={statusVal === 'yes'} onChange={(e) => handleUpdate(ctrl.id, 'met', e.target.value)} style={{ accentColor: 'var(--primary-color)' }} /> Yes
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', cursor: 'pointer' }}>
                      <input type="radio" name={ctrl.id} value="no" checked={statusVal === 'no'} onChange={(e) => handleUpdate(ctrl.id, 'met', e.target.value)} style={{ accentColor: 'var(--primary-color)' }} /> No
                    </label>
                    {ctrl.id === 'SAAS-001' && (
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', cursor: 'pointer' }}>
                        <input type="radio" name={ctrl.id} value="na" checked={statusVal === 'na'} onChange={(e) => handleUpdate(ctrl.id, 'met', e.target.value)} style={{ accentColor: 'var(--primary-color)' }} /> N/A
                      </label>
                    )}
                  </div>
                </div>
              </div>
              
              <div style={{ padding: '1.25rem', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Partner Evidence / Justification Notes:</label>
                <textarea 
                  value={ftr[ctrl.id]?.notes || ''}
                  onChange={(e) => handleUpdate(ctrl.id, 'notes', e.target.value)}
                  style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff', padding: '0.75rem', fontSize: '0.95rem', minHeight: '80px', fontFamily: 'inherit', resize: 'vertical' }}
                  placeholder="Provide URLs, architectures, or process descriptions as evidence..."
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
