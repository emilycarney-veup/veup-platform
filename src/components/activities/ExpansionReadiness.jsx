import { useActivities } from '../../context/ActivitiesContext';

const CONTEXT_QUESTIONS = [
  {
    id: 'objectives',
    title: 'Business Objectives',
    question: 'What business objectives are driving your decision to expand into new markets? (Select all that apply)',
    options: [
      'New Growth / Revenue', 
      'Find strategic partners', 
      'Access to New Talent or Technology', 
      'Customer proximity', 
      'Enhance Competitive Advantage', 
      'Diversify Market Presence', 
      'Expand Customer Reach'
    ]
  },
  {
    id: 'priorities',
    title: 'Top Priorities',
    question: 'What are the top things you feel you need to get right or started for successful international expansion?',
    options: [
      'Effective Market Entry Strategies',
      'Navigating Local Regulations', 
      'Building Partnerships and Networks', 
      'Managing Cross-Border Teams', 
      'Understanding Regional Customer Needs', 
      'Setting Up Operations in a New Country', 
      'Minimising Risks and Managing Uncertainty', 
      'Scaling Operations for International Growth', 
      'Not sure'
    ]
  }
];

const CATEGORIES = [
  {
    id: 'market',
    title: 'Market Readiness Assessment',
    question: 'How well have you analyzed and planned for entering the new market, including product fit and competitive analysis?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: No market analysis or strategy in place for the target market.' },
      { value: '2', label: '2 - Barely Ready: Initial thoughts about market strategy, but no formal analysis or planning done.' },
      { value: '3', label: '3 - Somewhat Ready: Basic market research completed with an initial strategy drafted.' },
      { value: '4', label: '4 - Mostly Ready: Thorough market analysis with a near-final go-to-market strategy.' },
      { value: '5', label: '5 - Fully Ready: Comprehensive market analysis and a fully implemented go-to-market strategy specific to the new market.' }
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership and Key Hires Assessment',
    question: 'Is your leadership team aligned and prepared, with key hires planned, to execute the expansion into new markets?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: No leadership alignment or key hires planned for the expansion.' },
      { value: '2', label: '2 - Barely Ready: Leadership discussions started but not aligned; no hires prepared.' },
      { value: '3', label: '3 - Somewhat Ready: Some leadership alignment achieved and preliminary key hires identified.' },
      { value: '4', label: '4 - Mostly Ready: Leadership aligned on strategy with key hires ready to execute.' },
      { value: '5', label: '5 - Fully Ready: Leadership fully aligned and key hires in place to drive expansion.' }
    ]
  },
  {
    id: 'ops',
    title: 'Operational Readiness Assessment',
    question: 'Have you established the necessary operational infrastructure and regulatory compliance measures to support expansion?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: No operational infrastructure or regulatory compliance measures in place.' },
      { value: '2', label: '2 - Barely Ready: Initial planning for operational infrastructure started, but no concrete steps taken.' },
      { value: '3', label: '3 - Somewhat Ready: Basic operational processes established and some regulatory requirements identified.' },
      { value: '4', label: '4 - Mostly Ready: Operational infrastructure and most regulatory requirements in place.' },
      { value: '5', label: '5 - Fully Ready: Operational infrastructure is fully compliant with regulatory requirements and is prepared for expansion.' }
    ]
  },
  {
    id: 'finance',
    title: 'Financial Readiness Assessment',
    question: 'Do you have a detailed financial plan and sufficient investment to support expansion into the new market?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: No financial planning or investment strategy in place for expansion.' },
      { value: '2', label: '2 - Barely Ready: Limited financial planning and uncertain investment backing.' },
      { value: '3', label: '3 - Somewhat Ready: A basic financial plan is in place, but investment or capital may be limited.' },
      { value: '4', label: '4 - Mostly Ready: A clear financial plan and adequate investment backing for expansion.' },
      { value: '5', label: '5 - Fully Ready: Financial planning is comprehensive with strong capital and investment for a smooth expansion.' }
    ]
  },
  {
    id: 'tech',
    title: 'Technology Readiness Assessment',
    question: 'Is your technology infrastructure scalable, and is your product localised for the new market\'s needs?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: Technology is either not scalable or not adapted for new markets.' },
      { value: '2', label: '2 - Barely Ready: Some considerations for scaling technology, but little action taken.' },
      { value: '3', label: '3 - Somewhat Ready: Initial steps taken to localise and scale the technology/product.' },
      { value: '4', label: '4 - Mostly Ready: Technology is mostly ready for scaling, with minor localisation requirements left.' },
      { value: '5', label: '5 - Fully Ready: Technology is fully scalable, localised, and ready for international markets.' }
    ]
  },
  {
    id: 'product',
    title: 'Product-Market Fit Assessment',
    question: 'How would you assess the readiness of your product to meet the needs of the target market in the new region?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: No research or validation has been done to assess product-market fit for this market.' },
      { value: '2', label: '2 - Barely Ready: Limited understanding of customer needs and product relevance in the new market.' },
      { value: '3', label: '3 - Somewhat Ready: Base research done; some initial signs of demand but no structured feedback collection.' },
      { value: '4', label: '4 - Mostly Ready: Detailed insights gathered from early customers or local research; validation solid.' },
      { value: '5', label: '5 - Fully Ready: Product-market fit strongly validated through local testing and feedback; ready for launch.' }
    ]
  },
  {
    id: 'sales',
    title: 'Sales and Marketing Assessment',
    question: 'Have you developed a clear sales and marketing plan tailored to acquiring customers in the new market?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: No sales or marketing strategy in place for customer acquisition in the new market.' },
      { value: '2', label: '2 - Barely Ready: Initial thoughts about sales strategy, but nothing formalized.' },
      { value: '3', label: '3 - Somewhat Ready: A basic customer acquisition strategy is in place.' },
      { value: '4', label: '4 - Mostly Ready: A well-developed sales and marketing plan for customer acquisition.' },
      { value: '5', label: '5 - Fully Ready: A comprehensive sales and marketing strategy, with channels and partnerships established.' }
    ]
  },
  {
    id: 'risk',
    title: 'Risk and Contingency Assessment',
    question: 'How prepared are you with risk mitigation strategies and contingency plans to address any challenges in the new market?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: No risk analysis or contingency planning in place.' },
      { value: '2', label: '2 - Barely Ready: Basic awareness of potential risks, but no formal plans.' },
      { value: '3', label: '3 - Somewhat Ready: Key risks identified with a basic contingency plan.' },
      { value: '4', label: '4 - Mostly Ready: A comprehensive risk analysis with contingency plans developed.' },
      { value: '5', label: '5 - Fully Ready: Full risk mitigation strategies and contingency plans are in place and ready to be implemented.' }
    ]
  }
];

export default function ExpansionReadiness() {
  const { activitiesData, updateActivityData } = useActivities();
  const expansion = activitiesData?.expansion || {};

  const handleSelect = (e) => updateActivityData('expansion', { [e.target.name]: e.target.value });

  const handleCheckbox = (id, option) => {
    const currentList = Array.isArray(expansion[id]) ? expansion[id] : [];
    if (currentList.includes(option)) {
      updateActivityData('expansion', { [id]: currentList.filter(o => o !== option) });
    } else {
      updateActivityData('expansion', { [id]: [...currentList, option] });
    }
  };

  const calculateScore = () => {
    let total = 0;
    CATEGORIES.forEach(cat => {
        total += parseInt(expansion[cat.id]) || 0;
    });
    // Max score is 8 categories * 5 points = 40
    return Math.round((total / 40) * 100);
  };

  const score = calculateScore();

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>Global Expansion Readiness</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Assess your readiness to scale into new geographic territories via the Global Passport Program across 8 critical dimensions.
      </p>

      {/* Contextual Questions Section */}
      <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3 style={{ color: '#fff', marginBottom: '1.5rem' }}>1. Introduction & Context</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '1.5rem' }}>
          {CONTEXT_QUESTIONS.map(ctx => {
            const currentSelections = Array.isArray(expansion[ctx.id]) ? expansion[ctx.id] : [];
            return (
              <div key={ctx.id}>
                <h4 style={{ color: 'var(--text-light)', marginBottom: '0.25rem' }}>{ctx.title}</h4>
                <label style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {ctx.question}
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {ctx.options.map(opt => (
                    <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', cursor: 'pointer', fontSize: '0.9rem' }}>
                      <input 
                        type="checkbox" 
                        checked={currentSelections.includes(opt)}
                        onChange={() => handleCheckbox(ctx.id, opt)}
                        style={{ cursor: 'pointer', accentColor: 'var(--primary-color)' }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>Expansion Confidence Index</h3>
        <div style={{ height: '24px', backgroundColor: 'var(--sidebar-bg)', borderRadius: '12px', overflow: 'hidden', marginTop: '1rem' }}>
          <div style={{ width: `${score}%`, height: '100%', backgroundColor: score >= 80 ? 'var(--success-color)' : score >= 60 ? 'var(--warning-color)' : 'var(--danger-color)', transition: 'width 0.3s' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontWeight: 'bold' }}>
            <span style={{ color: 'var(--text-muted)' }}>0%</span>
            <span>{score}% Readiness</span>
        </div>
      </div>

      <h3 style={{ color: '#fff', marginBottom: '1rem' }}>2. Readiness Assessment Framework</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
        {CATEGORIES.map(cat => (
          <div key={cat.id} className="input-block">
            <h4 style={{ color: 'var(--text-light)', marginBottom: '0.25rem' }}>{cat.title}</h4>
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {cat.question}
            </label>
            <select name={cat.id} value={expansion[cat.id] || '0'} onChange={handleSelect} className="activity-select" style={{ borderColor: expansion[cat.id] !== '0' && expansion[cat.id] ? 'var(--primary-color)' : 'var(--border-color)' }}>
                {cat.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            {expansion[cat.id] && expansion[cat.id] !== '0' && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: parseInt(expansion[cat.id]) >= 4 ? 'var(--success-color)' : parseInt(expansion[cat.id]) === 3 ? 'var(--warning-color)' : 'var(--danger-color)' }}>
                    Current Level: {cat.options.find(o => o.value === expansion[cat.id]).label.split('-')[1].trim()}
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
