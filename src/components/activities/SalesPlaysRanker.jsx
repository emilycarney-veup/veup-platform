import { useActivities } from '../../context/ActivitiesContext';
import { ArrowUp, ArrowDown } from 'lucide-react';

export default function SalesPlaysRanker() {
  const { activitiesData, updateActivityData } = useActivities();
  const { salesPlays } = activitiesData;

  const moveUp = (index) => {
    if (index === 0) return;
    const newPlays = [...salesPlays.plays];
    const temp = newPlays[index];
    newPlays[index] = newPlays[index - 1];
    newPlays[index - 1] = temp;
    updateActivityData('salesPlays', { plays: newPlays });
  };

  const moveDown = (index) => {
    if (index === salesPlays.plays.length - 1) return;
    const newPlays = [...salesPlays.plays];
    const temp = newPlays[index];
    newPlays[index] = newPlays[index + 1];
    newPlays[index + 1] = temp;
    updateActivityData('salesPlays', { plays: newPlays });
  };

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>Sales Plays Ranker</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Prioritize the specific GTM campaigns you bring to AWS Account Managers. The top play is your prime focus.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {salesPlays.plays.map((play, index) => (
          <div key={play.id} style={{ 
            display: 'flex', alignItems: 'center', backgroundColor: 'var(--card-bg)', 
            padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' 
          }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-color)', width: '30px' }}>
              #{index + 1}
            </div>
            <div style={{ flex: 1, color: '#fff' }}>{play.text}</div>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={() => moveUp(index)} 
                disabled={index === 0}
                style={{ background: 'transparent', border: 'none', color: index === 0 ? 'rgba(255,255,255,0.2)' : 'var(--accent-color)', cursor: index === 0 ? 'not-allowed' : 'pointer' }}
              >
                <ArrowUp size={20} />
              </button>
              <button 
                onClick={() => moveDown(index)} 
                disabled={index === salesPlays.plays.length - 1}
                style={{ background: 'transparent', border: 'none', color: index === salesPlays.plays.length - 1 ? 'rgba(255,255,255,0.2)' : 'var(--accent-color)', cursor: index === salesPlays.plays.length - 1 ? 'not-allowed' : 'pointer' }}
              >
                <ArrowDown size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        Note: Focus 80% of your outbound MDF pipeline efforts entirely on Play #1 until it proves successful.
      </p>
    </div>
  );
}
