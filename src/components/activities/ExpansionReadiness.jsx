import { useActivities } from '../../context/ActivitiesContext';

const CATEGORIES = [
  {
    id: 'market',
    title: 'Market Preparedness',
    question: 'How well have you researched and planned for entering the new market, including product fit and competitive analysis?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: No market analysis or strategy in place.' },
      { value: '2', label: '2 - Barely Ready: Initial thoughts, no formal analysis.' },
      { value: '3', label: '3 - Somewhat Ready: Basic research, initial strategy drafted.' },
      { value: '4', label: '4 - Mostly Ready: Thorough analysis, near-final GTM strategy.' },
      { value: '5', label: '5 - Fully Ready: Comprehensive analysis, fully implemented strategy.' }
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership and Key Hires',
    question: 'Is your leadership team aligned and prepared, with key hires planned, to execute the expansion into the new market?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: No alignment or key hires planned.' },
      { value: '2', label: '2 - Barely Ready: Discussions started, no alignment.' },
      { value: '3', label: '3 - Somewhat Ready: Some alignment, preliminary hires identified.' },
      { value: '4', label: '4 - Mostly Ready: Leadership aligned, key hires ready.' },
      { value: '5', label: '5 - Fully Ready: Fully aligned, key hires in place.' }
    ]
  },
  {
    id: 'ops',
    title: 'Operational Readiness',
    question: 'Have you assessed and prepared your infrastructure, operations, and compliance needs for the new market?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: No infrastructure or regulatory considerations.' },
      { value: '2', label: '2 - Barely Ready: Initial discussions, no formalized plans.' },
      { value: '3', label: '3 - Somewhat Ready: Basic infrastructure and regulatory research.' },
      { value: '4', label: '4 - Mostly Ready: Infrastructure and most requirements in place.' },
      { value: '5', label: '5 - Fully Ready: Fully compliant and prepared for expansion.' }
    ]
  },
  {
    id: 'finance',
    title: 'Financial Readiness',
    question: 'Do you have a detailed financial plan and sufficient investment to support expansion into the new market?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: No financial planning or investment strategy.' },
      { value: '2', label: '2 - Barely Ready: Limited planning, uncertain investment.' },
      { value: '3', label: '3 - Somewhat Ready: Basic plan, limited capital.' },
      { value: '4', label: '4 - Mostly Ready: Clear plan and adequate investment backing.' },
      { value: '5', label: '5 - Fully Ready: Comprehensive plan and full investment secured.' }
    ]
  },
  {
    id: 'tech',
    title: 'Technology Readiness',
    question: 'Is your technology infrastructure scalable, and is your product localised for the new market\'s needs?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: Not scalable, not adapted for new markets.' },
      { value: '2', label: '2 - Barely Ready: Some scaling considerations, little action.' },
      { value: '3', label: '3 - Somewhat Ready: Initial localisation and scaling steps.' },
      { value: '4', label: '4 - Mostly Ready: Mostly scalable, minor localisation left.' },
      { value: '5', label: '5 - Fully Ready: Fully scalable, localised, and ready.' }
    ]
  },
  {
    id: 'product',
    title: 'Product-Market Fit',
    question: 'To what extent has your product-market fit been validated for the target market?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: No product adaptation or validation.' },
      { value: '2', label: '2 - Barely Ready: Initial thoughts, no validation done.' },
      { value: '3', label: '3 - Somewhat Ready: Some adaptation and preliminary validation.' },
      { value: '4', label: '4 - Mostly Ready: Largely adapted and validated.' },
      { value: '5', label: '5 - Fully Ready: Fully adapted and validated, clear PMF.' }
    ]
  },
  {
    id: 'sales',
    title: 'Sales and Marketing Readiness',
    question: 'Have you developed a clear sales and marketing plan tailored to acquiring customers in the new market?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: No sales or marketing strategy.' },
      { value: '2', label: '2 - Barely Ready: Initial thoughts, nothing formalized.' },
      { value: '3', label: '3 - Somewhat Ready: Basic customer acquisition strategy.' },
      { value: '4', label: '4 - Mostly Ready: Well-developed sales and marketing plan.' },
      { value: '5', label: '5 - Fully Ready: Comprehensive strategy, channels established.' }
    ]
  },
  {
    id: 'risk',
    title: 'Risk & Contingency Planning',
    question: 'Have you identified potential risks and created a contingency plan for your international expansion?',
    options: [
      { value: '0', label: 'Select score...' },
      { value: '1', label: '1 - Not Ready: No risk assessment or planning.' },
      { value: '2', label: '2 - Barely Ready: Initial thoughts, no formal assessment.' },
      { value: '3', label: '3 - Somewhat Ready: Some risks identified, preliminary plans.' },
      { value: '4', label: '4 - Mostly Ready: Comprehensive risk assessment, clear plans.' },
      { value: '5', label: '5 - Fully Ready: Thorough assessment, robust integrated plans.' }
    ]
  }
];

export default function ExpansionReadiness() {
  const { activitiesData, updateActivityData } = useActivities();
  const { expansion } = activitiesData;

  const handleSelect = (e) => updateActivityData('expansion', { [e.target.name]: e.target.value });

  const calculateScore = () => {
    let total = 0;
    Object.values(expansion).forEach(val => {
        total += parseInt(val) || 0;
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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
        {CATEGORIES.map(cat => (
          <div key={cat.id} className="input-block">
            <h4 style={{ color: 'var(--text-light)', marginBottom: '0.25rem' }}>{cat.title}</h4>
            <label className="activity-label" style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {cat.question}
            </label>
            <select name={cat.id} value={expansion[cat.id] || '0'} onChange={handleSelect} className="activity-select" style={{ borderColor: expansion[cat.id] !== '0' ? 'var(--primary-color)' : 'var(--border-color)' }}>
                {cat.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            {expansion[cat.id] !== '0' && (
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
