import { useActivities } from '../../context/ActivitiesContext';

const PILLARS = [
  {
    id: 'partnerPrograms',
    title: 'Partner Programs Assessment',
    questions: [
      'Are you an APN Partner?',
      'Do you have a completed and up to date Foundational Technical Review?',
      'Are you ACE Eligible?',
      'Are you enrolled in ISV Accelerate?',
      'Do you have a defined partner plan that includes AWS Marketplace goals?'
    ]
  },
  {
    id: 'selection',
    title: 'Selection Assessment',
    questions: [
      'Are you listed in AWS Marketplace?',
      'Is your top product listed in AWS Marketplace?',
      'Do your products offered in AWS Marketplace match offerings sold outside of AWS Marketplace?',
      'Does your listing leverage AWS Marketplace features to streamline the buyer experience like SaaS Free Trials, Vendor Insights or Request Demo/Request Private Offer?'
    ]
  },
  {
    id: 'operational',
    title: 'Operational Excellence Assessment',
    questions: [
      'Do you have defined and documented process for teams supporting AWS Marketplace?',
      'Do key teams across finance, sales ops, product and partnerships all have defined access to AWS Marketplace through IAM?',
      'Are you leveraging Agreements and Renewals Dashboards to visualize customer data and monitor upcoming subscriptions?',
      'Have you implemented the ACE CRM Connector for a seamless integration across ACE and AWS Marketplace?',
      'Does your AWS Marketplace model scale globally?'
    ]
  },
  {
    id: 'revenue',
    title: 'Revenue Commitment',
    questions: [
      'Does your company have a revenue goal for AWS Marketplace?',
      'Do you have a goal for % of cloud revenue you target to transact in AWS Marketplace?',
      'Does your CRO carry or align to your AWS Marketplace goal?',
      'Have you determined what KPIs measure AWS Marketplace success and verified how AWS Marketplace supports your business?',
      'If you are focused on executing through Channel Partners, do you have a CPPO goal?'
    ]
  },
  {
    id: 'salesAlignment',
    title: 'Sales Alignment Assessment',
    questions: [
      'Are you practicing comp neutrality to ensure reps are paid equally for deals closed in AWS Marketplace?',
      'Is sales leadership discussing AWS Marketplace on forecast calls?',
      'Are all transactions available to be sold in AWS Marketplace including renewals, and channel?',
      'Do your field teams have clear alignment between their sales framework and AWS Marketplace?',
      'Have you scaled selling motions by pre authorizing key channel partners to resell your software from AWS Marketplace?'
    ]
  },
  {
    id: 'enablement',
    title: 'Enablement Assessment',
    questions: [
      'Have you hosted an enablement session on the value of AWS Marketplace for your field sales teams?',
      'Do you have a defined enablement cadence for delivering AWS Marketplace training to key teams within your organization?',
      'Have you built content to capture best practices and key relevant points for AWS Marketplace?',
      'Do you have a systematic approach for compiling and organizing marketplace-related resources for team access?',
      'Have you embedded AWS Marketplace training into existing organizational learning and development initiatives?'
    ]
  }
];

export default function COSSReadinessAssessment() {
  const { activitiesData, updateActivityData } = useActivities();
  const { coss } = activitiesData;

  const handleUpdate = (pillarId, qIndex, value) => {
    const updatedArray = [...(coss[pillarId] || [])];
    updatedArray[qIndex] = value;
    updateActivityData('coss', { [pillarId]: updatedArray });
  };

  const calculatePillarScore = (pillarId) => {
    const responses = coss[pillarId] || [];
    return responses.reduce((acc, curr) => {
      if (curr === 'yes') return acc + 1;
      if (curr === 'in-progress') return acc + 0.5;
      return acc;
    }, 0);
  };

  const getStatusColor = (score, max) => {
    const ratio = score / max;
    if (ratio >= 0.8) return 'var(--success-color)';
    if (ratio >= 0.4) return '#e3b341'; // yellow
    return '#ff4d4f'; // red
  };

  const getStatusText = (score, max) => {
    const ratio = score / max;
    if (ratio >= 0.8) return 'Strong performance level';
    if (ratio >= 0.4) return 'Moderate development needed';
    return 'Immediate attention required';
  };

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>COSS Framework Readiness Assessment</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Benchmark your organization's current position against the COSS framework principles and identify strategic opportunities for AWS Marketplace optimization.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {PILLARS.map((pillar) => {
          const maxScore = pillar.questions.length;
          const score = calculatePillarScore(pillar.id);
          const color = getStatusColor(score, maxScore);
          const text = getStatusText(score, maxScore);

          return (
            <div key={pillar.id} style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', overflow: 'hidden', borderLeft: `4px solid ${color}` }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>{pillar.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.25rem 0.75rem', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.9rem', fontWeight: 'bold' }}>
                    Score: {score}/{maxScore}
                  </div>
                  <div style={{ padding: '0.25rem 0.75rem', borderRadius: '20px', backgroundColor: `${color}22`, color: color, fontSize: '0.85rem', fontWeight: '600' }}>
                    {text}
                  </div>
                </div>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {pillar.questions.map((question, index) => {
                  const currentValue = (coss[pillar.id] || [])[index] || null;
                  
                  return (
                    <div key={index} style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', gap: '1rem', alignItems: 'center', padding: '1rem', backgroundColor: currentValue ? 'rgba(255,255,255,0.02)' : 'transparent', borderRadius: '6px', borderBottom: index < pillar.questions.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <span style={{ color: '#fff', lineHeight: '1.4' }}>{question}</span>
                      
                      <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: 'rgba(0,0,0,0.2)', padding: '0.25rem', borderRadius: '6px' }}>
                        <button 
                          onClick={() => handleUpdate(pillar.id, index, 'yes')}
                          style={{ padding: '0.4rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600', backgroundColor: currentValue === 'yes' ? 'var(--success-color)' : 'transparent', color: currentValue === 'yes' ? '#000' : 'var(--text-muted)', transition: 'all 0.2s' }}
                        >
                          Yes
                        </button>
                        <button 
                          onClick={() => handleUpdate(pillar.id, index, 'in-progress')}
                          style={{ padding: '0.4rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600', backgroundColor: currentValue === 'in-progress' ? '#e3b341' : 'transparent', color: currentValue === 'in-progress' ? '#000' : 'var(--text-muted)', transition: 'all 0.2s' }}
                        >
                          In Progress
                        </button>
                        <button 
                          onClick={() => handleUpdate(pillar.id, index, 'no')}
                          style={{ padding: '0.4rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600', backgroundColor: currentValue === 'no' ? '#ff4d4f' : 'transparent', color: currentValue === 'no' ? '#000' : 'var(--text-muted)', transition: 'all 0.2s' }}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
