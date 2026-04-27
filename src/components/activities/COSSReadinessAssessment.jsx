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

  const handleToggle = (pillarId, qIndex) => {
    const updatedArray = [...(coss[pillarId] || [])];
    updatedArray[qIndex] = !updatedArray[qIndex];
    updateActivityData('coss', { [pillarId]: updatedArray });
  };

  const calculatePillarScore = (pillarId) => {
    return (coss[pillarId] || []).filter(Boolean).length;
  };

  const getStatusColor = (score) => {
    if (score >= 4) return 'var(--success-color)';
    if (score >= 2) return '#e3b341'; // yellow
    return '#ff4d4f'; // red
  };

  const getStatusText = (score) => {
    if (score >= 4) return 'Strong performance level';
    if (score >= 2) return 'Moderate development needed';
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
          const score = calculatePillarScore(pillar.id);
          const color = getStatusColor(score);
          const text = getStatusText(score);

          return (
            <div key={pillar.id} style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem' }}>{pillar.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.25rem 0.75rem', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.9rem', fontWeight: 'bold' }}>
                    Score: {score}/{pillar.questions.length}
                  </div>
                  <div style={{ padding: '0.25rem 0.75rem', borderRadius: '20px', backgroundColor: `${color}22`, color: color, fontSize: '0.85rem', fontWeight: '600' }}>
                    {text}
                  </div>
                </div>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {pillar.questions.map((question, index) => {
                  const isChecked = (coss[pillar.id] || [])[index] || false;
                  return (
                    <label key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', padding: '0.75rem', backgroundColor: isChecked ? 'rgba(50, 78, 216, 0.1)' : 'transparent', borderRadius: '6px', border: `1px solid ${isChecked ? 'var(--primary-color)' : 'transparent'}`, transition: 'all 0.2s' }}>
                      <input 
                        type="checkbox" 
                        checked={isChecked} 
                        onChange={() => handleToggle(pillar.id, index)} 
                        style={{ width: '20px', height: '20px', marginTop: '2px', accentColor: 'var(--primary-color)' }} 
                      />
                      <span style={{ color: isChecked ? '#fff' : 'var(--text-muted)' }}>{question}</span>
                    </label>
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
