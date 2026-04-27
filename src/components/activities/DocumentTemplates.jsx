import { useActivities } from '../../context/ActivitiesContext';

export default function DocumentTemplates() {
  const { activitiesData, updateActivityData } = useActivities();
  const { templates } = activitiesData;

  const handleText = (e) => updateActivityData('templates', { [e.target.name]: e.target.value });

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>Document Templates</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Draft your core go-to-market documents (PR/FAQ & Joint Value Proposition).
      </p>

      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>1. The Internal PR/FAQ</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Using Amazon's "Working Backwards" methodology, write the mock press release for the day you launch your AWS partnership.</p>
        
        <div className="input-block" style={{ marginBottom: '1rem' }}>
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Headline</label>
          <input type="text" name="prTitle" value={templates.prTitle} onChange={handleText} className="activity-input" placeholder="[Company] Partners with AWS to eradicate [Customer Pain]..." />
        </div>
        <div className="input-block" style={{ marginBottom: '1rem' }}>
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Press Release Body (The Customer Experience)</label>
          <textarea name="prBody" value={templates.prBody} onChange={handleText} className="activity-textarea" placeholder="Today, [Company] announced..." rows={4} />
        </div>
        <div className="input-block" style={{ marginBottom: '1rem' }}>
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Internal FAQ 1: Why won't customers just build this natively with AWS tools?</label>
          <textarea name="faq1" value={templates.faq1} onChange={handleText} className="activity-textarea" placeholder="Draft your objection handling..." rows={2} />
        </div>
        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Internal FAQ 2: What is the exact pricing model?</label>
          <textarea name="faq2" value={templates.faq2} onChange={handleText} className="activity-textarea" placeholder="Draft your response..." rows={2} />
        </div>
      </div>

      <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>2. Joint Value Proposition (JVP)</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Define the mathematical synergy between your software and the AWS cloud.</p>
        
        <div className="input-block">
          <textarea name="jvp" value={templates.jvp} onChange={handleText} className="activity-textarea" placeholder="Our product fixes [Problem] by utilizing scalable [AWS Service] AND [AWS Service], burning down the client's current AWS spend commit..." rows={5} />
        </div>
      </div>

      <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-color)', marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>3. AWS Engagement Messaging (AllStacks Template)</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Initial Opportunity Introduction email structure for contacting AWS Account Managers.</p>

        <div className="input-block" style={{ marginBottom: '1rem' }}>
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Subject Line</label>
          <input type="text" name="emailSubject" value={templates.emailSubject || ''} onChange={handleText} className="activity-input" placeholder="e.g. AWS + [Company] Co-Sell Opp: [Customer Name] | [AWS Service]" />
        </div>
        <div className="input-block" style={{ marginBottom: '1rem' }}>
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Customer Context & Business Challenge</label>
          <textarea name="emailContext" value={templates.emailContext || ''} onChange={handleText} className="activity-textarea" placeholder="Provide background on the customer, their current AWS usage, and the pain point..." rows={3} />
        </div>
        <div className="input-block" style={{ marginBottom: '1rem' }}>
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Expected AWS Consumption Increase</label>
          <textarea name="emailAWSValue" value={templates.emailAWSValue || ''} onChange={handleText} className="activity-textarea" placeholder="Exactly what AWS services will be deployed/consumed? Estimate the ARR impact for the AM..." rows={2} />
        </div>
        <div className="input-block">
          <label className="activity-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Specific Support Requested (The "Ask")</label>
          <textarea name="emailAsk" value={templates.emailAsk || ''} onChange={handleText} className="activity-textarea" placeholder="Make a specific, actionable ask! Provide a timeline and offer reciprocity..." rows={2} />
        </div>
      </div>
    </div>
  );
}
