import { useActivities } from '../../context/ActivitiesContext';
import { CheckCircle2, Lock } from 'lucide-react';

export default function FundingEligibilityChecker() {
  const { activitiesData, updateActivityData } = useActivities();
  const { funding } = activitiesData;

  const handleCheckbox = (e) => updateActivityData('funding', { [e.target.name]: e.target.checked });

  // Evaluation logic based on checkboxes
  const isEnrolled = true; // Always true if they are doing this
  const isValidated = funding.ftrPassed;
  const isDifferentiated = funding.ftrPassed && funding.hasCompetency;
  
  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>Funding Eligibility Checker</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        AWS provides massive financial benefits. Check your current milestones to unlock funding.
      </p>

      <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Your Milestones</h3>
        
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', cursor: 'pointer' }}>
          <input type="checkbox" name="ftrPassed" checked={funding.ftrPassed} onChange={handleCheckbox} style={{ width: '18px', height: '18px' }} />
          <span>Passed the Foundational Technical Review (Validated Partner)</span>
        </label>
        
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', cursor: 'pointer' }}>
          <input type="checkbox" name="hasCompetency" checked={funding.hasCompetency} onChange={handleCheckbox} style={{ width: '18px', height: '18px' }} />
          <span>Achieved an AWS Competency (e.g., Healthcare, Security)</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', cursor: 'pointer' }}>
          <input type="checkbox" name="transactedOver65k" checked={funding.transactedOver65k} onChange={handleCheckbox} style={{ width: '18px', height: '18px' }} />
          <span>Transacted over $65k on the AWS Marketplace in a year</span>
        </label>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Unlocked Benefits</h3>

        {/* Universal */}
        <div style={{ padding: '1rem', backgroundColor: 'rgba(35,134,54,0.1)', border: '1px solid var(--success-color)', borderRadius: '8px', display: 'flex', gap: '12px' }}>
          <CheckCircle2 color="var(--success-color)" />
          <div>
            <strong style={{ color: '#fff', display: 'block' }}>$3,500 AWS Promotional Credits</strong>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Universal benefit for paying the APN annual fee.</span>
          </div>
        </div>

        {/* Validated/FTR */}
        <div style={{ padding: '1rem', backgroundColor: isValidated ? 'rgba(35,134,54,0.1)' : 'var(--card-bg)', border: isValidated ? '1px solid var(--success-color)' : '1px dashed var(--border-color)', borderRadius: '8px', display: 'flex', gap: '12px', opacity: isValidated ? 1 : 0.6 }}>
          {isValidated ? <CheckCircle2 color="var(--success-color)" /> : <Lock color="var(--text-muted)" />}
          <div>
            <strong style={{ color: '#fff', display: 'block' }}>ISV Accelerate Eligibility & PLG Ready Funding</strong>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>You now qualify for up to $15k in PLG credits and AWS AMs receive cash incentives to sell your software. (Requires FTR).</span>
          </div>
        </div>

        {/* 65k Transaction */}
        <div style={{ padding: '1rem', backgroundColor: funding.transactedOver65k ? 'rgba(35,134,54,0.1)' : 'var(--card-bg)', border: funding.transactedOver65k ? '1px solid var(--success-color)' : '1px dashed var(--border-color)', borderRadius: '8px', display: 'flex', gap: '12px', opacity: funding.transactedOver65k ? 1 : 0.6 }}>
          {funding.transactedOver65k ? <CheckCircle2 color="var(--success-color)" /> : <Lock color="var(--text-muted)" />}
          <div>
            <strong style={{ color: '#fff', display: 'block' }}>$10,000 High-Velocity Funding</strong>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Reached scale. You unlocked $10k in direct business funding for surpassing $65k in Marketplace transactions.</span>
          </div>
        </div>

        {/* Differentiated/Competency */}
        <div style={{ padding: '1rem', backgroundColor: isDifferentiated ? 'rgba(35,134,54,0.1)' : 'var(--card-bg)', border: isDifferentiated ? '1px solid var(--success-color)' : '1px dashed var(--border-color)', borderRadius: '8px', display: 'flex', gap: '12px', opacity: isDifferentiated ? 1 : 0.6 }}>
          {isDifferentiated ? <CheckCircle2 color="var(--success-color)" /> : <Lock color="var(--text-muted)" />}
          <div>
            <strong style={{ color: '#fff', display: 'block' }}>Massive MDF Pool (Marketing Development Funds)</strong>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>As a Differentiated Tier partner, you unlock the highest echelons of AWS cash funding for custom webinars and roadshows.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
