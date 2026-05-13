import { useState, useEffect } from 'react';
import { Target, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { useActivities } from '../../context/ActivitiesContext';

export default function PLGReadinessAssessment() {
  const { activitiesData, updateActivityData } = useActivities();
  
  // Safe initialization of state
  const [data, setData] = useState(() => {
    // Check if the structure exists, otherwise create a default one
    if (activitiesData.plgReadiness?.categories) {
      return activitiesData.plgReadiness;
    }
    return {
      categories: {
        marketplace: { 1: null, 2: null, 3: null },
        product: { 1: null, 2: null, 3: null },
        pricing: { 1: null, 2: null, 3: null },
        technical: { 1: null, 2: null, 3: null },
        gtm: { 1: null, 2: null, 3: null }
      }
    };
  });

  // Sync back to context when local state changes
  useEffect(() => {
    updateActivityData('plgReadiness', data);
  }, [data, updateActivityData]);

  // Sync from context when context changes (e.g. Workspace restore)
  useEffect(() => {
    if (activitiesData.plgReadiness?.categories) {
      setData(activitiesData.plgReadiness);
    }
  }, [activitiesData.plgReadiness]);

  const assessmentQuestions = {
    marketplace: {
      title: "1. AWS Marketplace Readiness",
      questions: [
        { id: 1, text: "Marketplace offer" },
        { id: 2, text: "Free trial" },
        { id: 3, text: "\"Try with AWS\" or \"Buy with AWS\" button" },
        { id: 4, text: "AWS Marketplace offer discoverability" },
        { id: 5, text: "Subscription or Consumption based pricing model" },
        { id: 6, text: "ISV website product discovery" }
      ]
    },
    product: {
      title: "2. Product Experience & Value Delivery",
      questions: [
        { id: 1, text: "Defined ICP for PLG offer" },
        { id: 2, text: "Automated onboarding" },
        { id: 3, text: "Quick value realization" },
        { id: 4, text: "Free trial pain point alignment" },
        { id: 5, text: "Proactive and reactive guidance for user success" },
        { id: 6, text: "Monetization trigger" }
      ]
    },
    pricing: {
      title: "3. Pricing & Business Model",
      questions: [
        { id: 1, text: "Unit economics validation" },
        { id: 2, text: "Self-service pricing clarity" },
        { id: 3, text: "Value-based pricing" },
        { id: 4, text: "Enterprise opportunity identification" }
      ]
    },
    technical: {
      title: "4. Technical Architecture & Implementation",
      questions: [
        { id: 1, text: "Free trial technical readiness" },
        { id: 2, text: "Integration monitoring" },
        { id: 3, text: "Usage analytics" },
        { id: 4, text: "Unit cost allocation" },
        { id: 5, text: "AWS Marketplace Integration" },
        { id: 6, text: "Control Plane" },
        { id: 7, text: "Billing and metering flexibility" }
      ]
    },
    gtm: {
      title: "5. Go-to-Market Strategy & Characteristics of Successful Seller Alignment",
      questions: [
        { id: 1, text: "AWS Marketplace channel strategy" },
        { id: 2, text: "PLG Success Metrics" },
        { id: 3, text: "PLG Organizational Ownership" },
        { id: 4, text: "Cross-functional Collaboration" },
        { id: 5, text: "COSS Framework Alignment" },
        { id: 6, text: "PLG-aligned incentives" }
      ]
    }
  };

  const handleAnswer = (category, questionId, value) => {
    setData(prev => ({
      ...prev,
      categories: {
        ...prev.categories,
        [category]: {
          ...prev.categories[category],
          [questionId]: value
        }
      }
    }));
  };

  const calculateScore = () => {
    let yesCount = 0;
    let totalAnswered = 0;
    let totalQuestions = 0;

    Object.keys(assessmentQuestions).forEach(cat => {
      assessmentQuestions[cat].questions.forEach(q => {
        totalQuestions++;
        const answer = data.categories[cat]?.[q.id];
        if (answer !== null) {
          totalAnswered++;
          if (answer === true) yesCount++;
        }
      });
    });

    const percentage = totalQuestions === 0 ? 0 : Math.round((yesCount / totalQuestions) * 100);
    const progress = totalQuestions === 0 ? 0 : Math.round((totalAnswered / totalQuestions) * 100);

    let level = "Early Stage";
    if (percentage >= 85) level = "Advanced PLG Ready";
    else if (percentage >= 70) level = "Strong Foundation";
    else if (percentage >= 55) level = "Developing";

    return { percentage, progress, level, yesCount, totalQuestions, totalAnswered };
  };

  const score = calculateScore();

  return (
    <div className="activity-container">
      <div className="activity-header">
        <Target size={32} className="activity-icon" style={{ color: 'var(--primary-color)' }} />
        <h2>PLG Readiness Assessment</h2>
        <p>Evaluate your Product-Led Growth infrastructure and AWS Marketplace maturity.</p>
      </div>

      <div style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '1.5rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Overall Readiness Score</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: score.percentage >= 70 ? '#3fb950' : '#dfff00' }}>
              {score.percentage}%
            </span>
            <span style={{ color: 'var(--text-muted)' }}>
              ({score.yesCount} / {score.totalQuestions} Requirements Met)
            </span>
          </div>
          <div style={{ marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Maturity Level: <strong style={{ color: '#fff' }}>{score.level}</strong>
          </div>
        </div>
        
        <div style={{ textAlign: 'right' }}>
          <div style={{ marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Completion Progress</div>
          <div style={{ width: '200px', height: '8px', backgroundColor: 'var(--bg-color)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${score.progress}%`, height: '100%', backgroundColor: 'var(--primary-color)', transition: 'width 0.3s ease' }}></div>
          </div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {score.totalAnswered} of {score.totalQuestions} answered
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {Object.entries(assessmentQuestions).map(([catKey, category]) => (
          <div key={catKey} style={{
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            overflow: 'hidden'
          }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{category.title}</h3>
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {category.questions.map((q) => {
                const answer = data.categories[catKey]?.[q.id];
                return (
                  <div key={q.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', paddingBottom: '1rem', borderBottom: '1px dashed var(--border-color)' }}>
                    <div style={{ flex: 1, color: '#e6edf3' }}>{q.text}</div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => handleAnswer(catKey, q.id, true)}
                        style={{
                          backgroundColor: answer === true ? 'rgba(63, 185, 80, 0.2)' : 'transparent',
                          color: answer === true ? '#3fb950' : 'var(--text-muted)',
                          border: `1px solid ${answer === true ? '#3fb950' : 'var(--border-color)'}`,
                          padding: '6px 16px',
                          borderRadius: '20px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <CheckCircle size={14} /> Yes
                      </button>
                      <button
                        onClick={() => handleAnswer(catKey, q.id, false)}
                        style={{
                          backgroundColor: answer === false ? 'rgba(248, 81, 73, 0.2)' : 'transparent',
                          color: answer === false ? '#f85149' : 'var(--text-muted)',
                          border: `1px solid ${answer === false ? '#f85149' : 'var(--border-color)'}`,
                          padding: '6px 16px',
                          borderRadius: '20px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <AlertTriangle size={14} /> No
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(88, 166, 255, 0.1)', borderRadius: '8px', border: '1px solid rgba(88, 166, 255, 0.2)', display: 'flex', gap: '1rem' }}>
        <Info size={24} color="#58a6ff" style={{ flexShrink: 0 }} />
        <div>
          <h4 style={{ color: '#58a6ff', margin: '0 0 0.5rem 0' }}>Next Steps</h4>
          <p style={{ color: '#c9d1d9', margin: 0, lineHeight: 1.5 }}>
            Use this self-assessment to identify functional gaps. Any answers marked "No" represent blockers to your AWS Marketplace List & Sell Program tier advancement. Review the Module 7 curriculum to understand the technical and operational requirements for these areas.
          </p>
        </div>
      </div>
    </div>
  );
}
