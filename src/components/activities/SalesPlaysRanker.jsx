import { useActivities } from '../../context/ActivitiesContext';
import { ArrowUp, ArrowDown, Plus, Trash2, CheckCircle2 } from 'lucide-react';

const SALES_MOTIONS = [
  { id: 'Self-service', desc: 'Customers purchase directly through AWS Marketplace with minimal or no sales interaction.' },
  { id: 'Sales-assist', desc: 'Customers discover your solution digitally but require sales team engagement.' },
  { id: 'Sales-led', desc: 'Direct, high-touch sales engagement with personalized activities.' },
  { id: 'Indirect Sales-led', desc: 'Sales efforts managed through Channel or Consulting Partners.' }
];

const AVAILABLE_PLAYS = [
  { id: 'Paid Media', desc: 'Display ads, search ads, SEO, banners.' },
  { id: 'Social Media', desc: 'Organic and paid social media content.' },
  { id: 'Video', desc: 'Storyboarding, production, and promotion across channels.' },
  { id: 'Email', desc: 'Content, copy, and template design.' },
  { id: 'Content Development', desc: 'Case studies, whitepapers, Better Together Stories, podcasts.' },
  { id: 'Partnership and Channel', desc: 'AWS specialization pursuit, ISV Accelerate.' },
  { id: 'Telemarketing', desc: 'Battlecards, call scripts, telesales outreach.' },
  { id: 'Demonstrations and Workshops', desc: 'Demo booths to showcase offerings.' },
  { id: 'Web Development', desc: 'Landing and registration page design.' },
  { id: 'Gifts/Giveaways', desc: 'Cannot exceed $5 USD per unit.' },
  { id: 'Content Lead Syndication', desc: 'Paid digital ads, gated assets, lead generation.' },
  { id: 'Webinar, Online Events', desc: 'Platform management, invites, hosting.' },
  { id: 'Industry Conference Event', desc: 'Sponsorship of 3rd party conferences.' },
  { id: 'Seller-led Customer Event', desc: 'In-person or virtual networking events.' }
];

export default function SalesPlaysRanker() {
  const { activitiesData, updateActivityData } = useActivities();
  const { salesPlays = {} } = activitiesData;
  
  const motion = salesPlays.motion || 'Sales-assist';
  // Filter out the old dummy data by checking if id is a string (our new plays have string IDs)
  // If it's old data, default to empty array
  const rawPlays = Array.isArray(salesPlays.plays) ? salesPlays.plays : [];
  const plays = rawPlays.filter(p => typeof p.id === 'string' && AVAILABLE_PLAYS.some(ap => ap.id === p.id));

  const handleMotionChange = (newMotion) => {
    updateActivityData('salesPlays', { ...salesPlays, motion: newMotion });
  };

  const addPlay = (playId) => {
    if (plays.length >= 3) return; // limit to top 3
    if (plays.find(p => p.id === playId)) return; 
    
    const playDef = AVAILABLE_PLAYS.find(p => p.id === playId);
    const newPlays = [...plays, { id: playId, text: playId, desc: playDef.desc }];
    updateActivityData('salesPlays', { ...salesPlays, plays: newPlays });
  };

  const removePlay = (index) => {
    const newPlays = plays.filter((_, i) => i !== index);
    updateActivityData('salesPlays', { ...salesPlays, plays: newPlays });
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const newPlays = [...plays];
    const temp = newPlays[index];
    newPlays[index] = newPlays[index - 1];
    newPlays[index - 1] = temp;
    updateActivityData('salesPlays', { ...salesPlays, plays: newPlays });
  };

  const moveDown = (index) => {
    if (index === plays.length - 1) return;
    const newPlays = [...plays];
    const temp = newPlays[index];
    newPlays[index] = newPlays[index + 1];
    newPlays[index + 1] = temp;
    updateActivityData('salesPlays', { ...salesPlays, plays: newPlays });
  };

  return (
    <div style={{ paddingBottom: '2rem' }}>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>Sales Motions & Play Strategy</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Define your primary GTM sales motion and select the top 3 Marketing/Sales Plays you will execute to drive AWS Marketplace engagement.
      </p>

      {/* Sales Motion Selection */}
      <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>1. Select Your Primary Sales Motion</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {SALES_MOTIONS.map((m) => (
            <div 
              key={m.id}
              onClick={() => handleMotionChange(m.id)}
              style={{
                padding: '1rem',
                border: motion === m.id ? '2px solid var(--primary-color)' : '1px solid var(--border-color)',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: motion === m.id ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {motion === m.id && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-color)' }} />}
                </div>
                <strong style={{ color: '#fff' }}>{m.id}</strong>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0, paddingLeft: '1.5rem' }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Available Plays */}
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>2. Available Sales Plays</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
            Select up to 3 plays to focus your MDF and marketing efforts on.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '500px', overflowY: 'auto', paddingRight: '0.5rem' }}>
            {AVAILABLE_PLAYS.map(play => {
              const isSelected = plays.some(p => p.id === play.id);
              const isDisabled = plays.length >= 3 && !isSelected;
              return (
                <div key={play.id} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.75rem', backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '6px',
                  opacity: isDisabled ? 0.5 : 1
                }}>
                  <div>
                    <strong style={{ color: '#fff', display: 'block', fontSize: '0.95rem' }}>{play.id}</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{play.desc}</span>
                  </div>
                  <button 
                    onClick={() => addPlay(play.id)}
                    disabled={isDisabled || isSelected}
                    style={{
                      background: 'none', border: 'none', cursor: (isDisabled || isSelected) ? 'default' : 'pointer',
                      color: isSelected ? 'var(--success-color)' : 'var(--accent-color)'
                    }}
                  >
                    {isSelected ? <CheckCircle2 size={20} /> : <Plus size={20} />}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected / Ranked Plays */}
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>3. Your Prioritized Plays</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
            Rank your selected plays. Focus 80% of your effort on Play #1.
          </p>
          
          {plays.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', border: '1px dashed var(--border-color)', borderRadius: '8px', color: 'var(--text-muted)' }}>
              Select plays from the left to build your strategy.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {plays.map((play, index) => (
                <div key={play.id} style={{ 
                  display: 'flex', alignItems: 'center', backgroundColor: 'var(--card-bg)', 
                  padding: '1rem', borderRadius: '8px', border: '1px solid var(--primary-color)' 
                }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-color)', width: '30px' }}>
                    #{index + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <strong style={{ color: '#fff', display: 'block' }}>{play.text}</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{play.desc}</span>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
                    <button onClick={() => moveUp(index)} disabled={index === 0} style={{ background: 'transparent', border: 'none', color: index === 0 ? 'rgba(255,255,255,0.2)' : 'var(--accent-color)', cursor: index === 0 ? 'not-allowed' : 'pointer' }}>
                      <ArrowUp size={18} />
                    </button>
                    <button onClick={() => moveDown(index)} disabled={index === plays.length - 1} style={{ background: 'transparent', border: 'none', color: index === plays.length - 1 ? 'rgba(255,255,255,0.2)' : 'var(--accent-color)', cursor: index === plays.length - 1 ? 'not-allowed' : 'pointer' }}>
                      <ArrowDown size={18} />
                    </button>
                    <button onClick={() => removePlay(index)} style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', marginLeft: '0.5rem' }}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
