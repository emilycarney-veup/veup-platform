import { useActivities } from '../../context/ActivitiesContext';
import { CheckCircle2, Lock, BookOpen, Rocket, Target, DollarSign, ListChecks, ArrowRightCircle } from 'lucide-react';
import { useState } from 'react';

export default function FundingEligibilityChecker() {
  const { activitiesData, updateActivityData } = useActivities();
  const { funding = { ftrPassed: false, hasCompetency: false } } = activitiesData;
  const [activeTab, setActiveTab] = useState('programs');

  const handleCheckbox = (e) => updateActivityData('funding', { [e.target.name]: e.target.checked });

  const isValidated = funding.ftrPassed;
  const isDifferentiated = funding.ftrPassed && funding.hasCompetency;
  
  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>AWS Funding & Claims Dashboard</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Explore available AWS Partner Funding Benefits and review the strict lifecycle required to claim them successfully.
      </p>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <button
          onClick={() => setActiveTab('programs')}
          style={{
            padding: '0.5rem 1.25rem',
            backgroundColor: activeTab === 'programs' ? 'var(--primary-color)' : 'transparent',
            color: activeTab === 'programs' ? '#fff' : 'var(--text-muted)',
            border: '1px solid',
            borderColor: activeTab === 'programs' ? 'var(--primary-color)' : 'transparent',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.2s',
            display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}
        >
          <DollarSign size={18} /> Programs & Benefits
        </button>
        <button
          onClick={() => setActiveTab('lifecycle')}
          style={{
            padding: '0.5rem 1.25rem',
            backgroundColor: activeTab === 'lifecycle' ? 'var(--primary-color)' : 'transparent',
            color: activeTab === 'lifecycle' ? '#fff' : 'var(--text-muted)',
            border: '1px solid',
            borderColor: activeTab === 'lifecycle' ? 'var(--primary-color)' : 'transparent',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.2s',
            display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}
        >
          <ListChecks size={18} /> Claim Lifecycle
        </button>
      </div>

      {activeTab === 'programs' && (
        <div style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
          
          <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Program Designations Check</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>Achieving designations unlocks specific funding tiers like MDF.</p>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', cursor: 'pointer' }}>
              <input type="checkbox" name="ftrPassed" checked={funding.ftrPassed || false} onChange={handleCheckbox} style={{ width: '18px', height: '18px' }} />
              <span style={{ color: '#fff' }}>Passed the Foundational Technical Review (Validated Status)</span>
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', cursor: 'pointer' }}>
              <input type="checkbox" name="hasCompetency" checked={funding.hasCompetency || false} onChange={handleCheckbox} style={{ width: '18px', height: '18px' }} />
              <span style={{ color: '#fff' }}>Achieved an AWS Competency (Differentiated Status)</span>
            </label>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Build */}
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.02)', borderLeft: '4px solid #3b82f6', borderRadius: '0 8px 8px 0' }}>
              <h3 style={{ color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                <BookOpen size={20} /> Build Benefits
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <strong style={{ color: '#fff' }}>Training and Certification</strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>Resources to increase AWS knowledge and capabilities via classroom, virtual, and self-paced digital training.</p>
                </div>
                <div>
                  <strong style={{ color: '#fff' }}>Innovation Sandbox Credit</strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>Up to 3 months of AWS usage cost via Promotional Credits (Max $100K USD/year per partner) per new solution or design win.</p>
                </div>
              </div>
            </div>

            {/* Market */}
            <div style={{ padding: '1.5rem', backgroundColor: isDifferentiated ? 'rgba(16,185,129,0.05)' : 'rgba(255,255,255,0.02)', borderLeft: '4px solid #10b981', borderRadius: '0 8px 8px 0', opacity: isDifferentiated ? 1 : 0.7 }}>
              <h3 style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                <Target size={20} /> Market Benefits
                {!isDifferentiated && <Lock size={16} color="var(--text-muted)" style={{ marginLeft: 'auto' }} />}
              </h3>
              <div>
                <strong style={{ color: '#fff' }}>Marketing Development Funds (MDF)</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>Earned by achieving a program designation (like a Competency). AWS co-invests up to 50% of actual marketing costs to create/nurture leads, drive brand awareness, and build sales pipelines.</p>
              </div>
            </div>

            {/* Sell & Grow */}
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.02)', borderLeft: '4px solid #8b5cf6', borderRadius: '0 8px 8px 0' }}>
              <h3 style={{ color: '#8b5cf6', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                <Rocket size={20} /> Sell & Grow Benefits
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <strong style={{ color: '#fff' }}>Proof of Concept (POC)</strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>Small scale projects helping new/existing customers demonstrate feasibility or optimize current solutions on AWS.</p>
                </div>
                <div>
                  <strong style={{ color: '#fff' }}>Customer Engagement Incentive (CEI)</strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>Supports Partners engaging Greenfield companies in the early stages of AWS adoption.</p>
                </div>
                <div>
                  <strong style={{ color: '#fff' }}>Migration Acceleration Program (MAP)</strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>Proven cloud migration methodology (Assess, Mobilize, Migrate & Modernize) offering automation tools and massive financial investments.</p>
                </div>
                <div>
                  <strong style={{ color: '#fff' }}>ISV Workload Migration Program (WMP)</strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>Supports Software Partners to accelerate customer migrations to their SaaS solutions on AWS with funding & GTM support.</p>
                </div>
                <div>
                  <strong style={{ color: '#fff' }}>Marketplace Private Offer Promotion (MPOPP)</strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>Incentive allowing ISVs to offer AWS credits to customers to accelerate Private Offer transactions.</p>
                </div>
              </div>
            </div>

            {/* Other */}
            <div style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <strong style={{ color: '#fff' }}>Partner Initiative Funding (PIF)</strong>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>Houses invite-only, specialized funding benefits in the APFP.</p>
            </div>
            
          </div>
        </div>
      )}

      {activeTab === 'lifecycle' && (
        <div style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
          <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
            <h3 style={{ color: '#ef4444', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>CRITICAL POLICY: Pre-Approval Required</h3>
            <p style={{ color: '#fff', fontSize: '0.95rem', margin: 0 }}>
              Fund requests <strong>MUST</strong> be pre-approved by AWS prior to any execution across all funding programs. Fund claims will <strong>not</strong> be approved if work started prior to pre-approval.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { step: 1, title: 'Setup Amazon Payee Central', desc: 'Complete bank account registration and tax interview. Currency must match your eventual funding request.' },
              { step: 2, title: 'Submit Request', desc: 'Provide activity information to the APN funding team via the APFP or through your Partner Development Manager (PDM).' },
              { step: 3, title: 'AWS Pre-Approval', desc: 'The APN funding team reviews the project request. You must wait for official pre-approval here.' },
              { step: 4, title: 'Execute Activity', desc: 'Once pre-approved, you may execute the project/activity as defined in the request.' },
              { step: 5, title: 'Submit Claim (Actuals)', desc: 'Upon completion, submit the fund claim with required Proof of Execution and actual spend data by deadlines.' },
              { step: 6, title: 'AWS Approval', desc: 'If all requirements are met, the claim is approved. If rejected, update the claim based on feedback and resubmit.' },
              { step: 7, title: 'Invoicing', desc: 'Upon claim approval, submit a webform invoice in Amazon Payee Central against the purchase order to initiate actual payment.' },
            ].map((s) => (
              <div key={s.step} style={{ display: 'flex', gap: '1rem', backgroundColor: 'var(--card-bg)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-color)', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', color: '#fff', fontWeight: 'bold', flexShrink: 0 }}>
                  {s.step}
                </div>
                <div>
                  <h4 style={{ color: '#fff', margin: '0 0 0.25rem 0', fontSize: '1rem' }}>{s.title}</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.9rem' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid var(--text-muted)' }}>
            <h4 style={{ color: '#fff', margin: '0 0 0.5rem 0' }}>Key Terminology</h4>
            <ul style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Fund Request:</strong> The overarching record in APFP containing all activity details (Submission, Approvals, Claim, Completion).</li>
              <li><strong>Cash Claim:</strong> The section where you submit your "Actuals" (spend, dates, proof) after the activity is done.</li>
              <li><strong>Invoice:</strong> The official request for payment submitted in Payee Central <em>after</em> the APFP Claim is approved.</li>
            </ul>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
