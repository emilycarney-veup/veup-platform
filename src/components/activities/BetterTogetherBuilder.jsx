import { useActivities } from '../../context/ActivitiesContext';
import { useState } from 'react';

const SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    desc: 'Purpose: Provide a high-level summary of your company and how AWS fits into your business strategy',
    questions: [
      { id: 'ov_1', text: 'What does your company do? What industry do you serve?' },
      { id: 'ov_2', text: 'What is your company\'s size, location, and market position?' },
      { id: 'ov_3', text: 'How does AWS support your overall business strategy?' },
      { id: 'ov_4', text: 'What role does AWS play in your technology stack?' },
      { id: 'ov_5', text: 'What specific business challenge or opportunity led you to leverage AWS and VeUP more strategically?' },
      { id: 'ov_6', text: 'How has AWS become integral to your operations (as a customer, partner, or ISV)?' }
    ]
  },
  {
    id: 'opportunity',
    title: 'Opportunity',
    desc: 'Purpose: Define the business challenge or market opportunity you needed to address',
    questions: [
      { id: 'op_1', text: 'What specific business challenge were you facing?' },
      { id: 'op_2', text: 'What market opportunity were you trying to capture?' },
      { id: 'op_3', text: 'What were the key pain points in your existing processes or systems?' },
      { id: 'op_4', text: 'What growth goals or business objectives were you trying to achieve?' },
      { id: 'op_5', text: 'What operational inefficiencies were holding you back?' },
      { id: 'op_6', text: 'How was your competitive position being affected?' },
      { id: 'op_7', text: 'What would happen if you didn\'t address this challenge/opportunity?' },
      { id: 'op_8', text: 'What specific metrics or KPIs were you looking to improve?' }
    ]
  },
  {
    id: 'solution',
    title: 'Solution',
    desc: 'Purpose: Describe how AWS services/solutions and VeUP’s support addressed your challenge',
    questions: [
      { id: 'sol_1', text: 'Which specific AWS services or solutions did you implement?' },
      { id: 'sol_2', text: 'How did you leverage AWS Marketplace, partnerships, or other AWS capabilities?' },
      { id: 'sol_3', text: 'What was your implementation approach or strategy?' },
      { id: 'sol_4', text: 'Who were your key stakeholders and how did they contribute?' },
      { id: 'sol_5', text: 'What VeUP Partner solutions did you integrate?' },
      { id: 'sol_6', text: 'How did VeUP’s AWS technical expertise support your project?' },
      { id: 'sol_7', text: 'What was unique about your approach compared to alternatives?' },
      { id: 'sol_8', text: 'What specific features or capabilities were most valuable?' },
      { id: 'sol_9', text: 'How long did implementation take?' }
    ]
  },
  {
    id: 'outcome',
    title: 'Outcome',
    desc: 'Purpose: Quantify the business results and benefits achieved',
    questions: [
      { id: 'out_1', text: 'What measurable business results did you achieve?' },
      { id: 'out_2', text: 'How did this solution impact your revenue, costs, or efficiency?' },
      { id: 'out_3', text: 'What operational improvements did you see?' },
      { id: 'out_4', text: 'How did this affect your customer experience or satisfaction?' },
      { id: 'out_5', text: 'What new market opportunities or capabilities did this enable?' },
      { id: 'out_6', text: 'What percentage improvements can you share (cost savings, speed, etc.)?' },
      { id: 'out_7', text: 'How has this positioned you for future growth?' },
      { id: 'out_8', text: 'What unexpected benefits did you discover?' },
      { id: 'out_9', text: 'How has this changed your relationship with AWS?' },
      { id: 'out_10', text: 'What would you tell other companies considering a similar approach?' }
    ]
  }
];

export default function BetterTogetherBuilder() {
  const { activitiesData, updateActivityData } = useActivities();
  const { betterTogether } = activitiesData;
  const [activeTab, setActiveTab] = useState('overview');

  const handleChange = (e) => {
    updateActivityData('betterTogether', { [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h2 style={{ color: '#fff', margin: 0 }}>AWS Better Together Story Template</h2>
        <a 
          href="https://docs.google.com/spreadsheets/d/1CXVjdAlBFx7PJKN55QiAiAYlzRWda4BMssYBv3Qn5eQ/edit?gid=460280571#gid=460280571" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ padding: '0.6rem 1.2rem', backgroundColor: 'var(--primary-color)', color: '#fff', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          Open Story Generator Sheet
        </a>
      </div>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '800px' }}>
        Use these guiding questions to build a compelling narrative about how AWS and VeUP support your business strategy. Answer the questions in each section to formulate your comprehensive Better Together story.
      </p>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
        {SECTIONS.map(sec => (
          <button
            key={sec.id}
            onClick={() => setActiveTab(sec.id)}
            style={{
              padding: '0.5rem 1.25rem',
              backgroundColor: activeTab === sec.id ? 'var(--primary-color)' : 'rgba(255,255,255,0.05)',
              color: activeTab === sec.id ? '#fff' : 'var(--text-muted)',
              border: '1px solid',
              borderColor: activeTab === sec.id ? 'var(--primary-color)' : 'var(--border-color)',
              borderRadius: '4px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              fontWeight: 'bold',
              transition: 'all 0.2s ease',
            }}
          >
            {sec.title}
          </button>
        ))}
        <button
          onClick={() => setActiveTab('additional')}
          style={{
            padding: '0.5rem 1.25rem',
            backgroundColor: activeTab === 'additional' ? 'var(--primary-color)' : 'rgba(255,255,255,0.05)',
            color: activeTab === 'additional' ? '#fff' : 'var(--text-muted)',
            border: '1px solid',
            borderColor: activeTab === 'additional' ? 'var(--primary-color)' : 'var(--border-color)',
            borderRadius: '4px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            fontWeight: 'bold',
            transition: 'all 0.2s ease',
          }}
        >
          Additional Elements
        </button>
      </div>

      <div style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--border-color)', padding: '1.5rem' }}>
        {SECTIONS.map(sec => (
          activeTab === sec.id && (
            <div key={sec.id} style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
              <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ color: '#fff', margin: '0 0 0.5rem 0' }}>{sec.title} Section</h3>
                <p style={{ color: 'var(--accent-color)', margin: 0, fontSize: '0.95rem', fontWeight: '500' }}>{sec.desc}</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {sec.questions.map((q, idx) => (
                  <div key={q.id}>
                    <label style={{ display: 'block', marginBottom: '0.75rem', color: '#e2e8f0', fontWeight: '500', fontSize: '1.05rem' }}>
                      {idx + 1}. {q.text}
                    </label>
                    <textarea
                      name={q.id}
                      value={betterTogether[q.id] || ''}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '6px',
                        color: '#fff',
                        padding: '1rem',
                        fontSize: '0.95rem',
                        minHeight: '100px',
                        fontFamily: 'inherit',
                        resize: 'vertical',
                        transition: 'border-color 0.2s'
                      }}
                      placeholder="Enter your response here..."
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        ))}

        {activeTab === 'additional' && (
          <div style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
            <h3 style={{ color: '#fff', margin: '0 0 1.5rem 0' }}>Additional Story Elements</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                <h4 style={{ color: '#fff', marginTop: 0, marginBottom: '1rem', fontSize: '1.1rem' }}>Key Metrics to Include</h4>
                <ul style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', lineHeight: 1.5 }}>
                  <li>Quantified business results (percentages, dollar amounts, time savings)</li>
                  <li>Customer impact metrics</li>
                  <li>Operational efficiency gains</li>
                  <li>Market share or competitive advantages</li>
                  <li>ROI or cost optimization results</li>
                </ul>
              </div>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                <h4 style={{ color: '#fff', marginTop: 0, marginBottom: '1rem', fontSize: '1.1rem' }}>Compelling Story Elements</h4>
                <ul style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', lineHeight: 1.5 }}>
                  <li>Customer quotes from key stakeholders</li>
                  <li>Specific use cases or scenarios</li>
                  <li>Before/after comparisons</li>
                  <li>Industry context and relevance</li>
                  <li>Future plans or expansion opportunities</li>
                </ul>
              </div>
              
              <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #8b5cf6', gridColumn: '1 / -1' }}>
                <h4 style={{ color: '#fff', marginTop: 0, marginBottom: '1rem', fontSize: '1.1rem' }}>Questions for Stakeholder Interviews</h4>
                <ul style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', lineHeight: 1.5 }}>
                  <li>What was the "aha moment" that led to this solution?</li>
                  <li>What would have happened without this AWS integration?</li>
                  <li>How has this changed the way your team works?</li>
                  <li>What advice would you give to similar companies?</li>
                  <li>What surprised you most about the results?</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        textarea:focus {
          outline: none;
          border-color: var(--primary-color) !important;
          box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.2);
        }
      `}</style>
    </div>
  );
}
