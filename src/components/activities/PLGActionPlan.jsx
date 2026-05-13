import { useState, useEffect } from 'react';
import { Target, Plus, Trash2 } from 'lucide-react';
import { useActivities } from '../../context/ActivitiesContext';

export default function PLGActionPlan() {
  const { activitiesData, updateActivityData } = useActivities();
  
  const [data, setData] = useState(() => {
    if (activitiesData.plgActionPlan?.actions) {
      return activitiesData.plgActionPlan;
    }
    return {
      visionAndGoals: '',
      priorityAreas: '',
      actions: [
        { id: 1, category: 'Marketplace', action: 'Complete AWS Marketplace listing submission', owner: '', targetDate: '', status: 'Not Started' },
        { id: 2, category: 'Product', action: 'Implement self-service onboarding flow', owner: '', targetDate: '', status: 'Not Started' },
        { id: 3, category: 'Pricing', action: 'Define Pay-As-You-Go pricing dimensions', owner: '', targetDate: '', status: 'Not Started' }
      ]
    };
  });

  useEffect(() => {
    updateActivityData('plgActionPlan', data);
  }, [data, updateActivityData]);

  useEffect(() => {
    if (activitiesData.plgActionPlan?.actions) {
      setData(activitiesData.plgActionPlan);
    }
  }, [activitiesData.plgActionPlan]);

  const addAction = () => {
    const currentActions = data.actions || [];
    const newId = currentActions.length > 0 ? Math.max(...currentActions.map(a => a.id)) + 1 : 1;
    setData(prev => ({
      ...prev,
      actions: [...currentActions, { id: newId, category: 'Marketplace', action: '', owner: '', targetDate: '', status: 'Not Started' }]
    }));
  };

  const removeAction = (id) => {
    setData(prev => ({
      ...prev,
      actions: (prev.actions || []).filter(a => a.id !== id)
    }));
  };

  const updateAction = (id, field, value) => {
    setData(prev => ({
      ...prev,
      actions: (prev.actions || []).map(a => a.id === id ? { ...a, [field]: value } : a)
    }));
  };

  const updateField = (field, value) => {
    setData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#3fb950';
      case 'In Progress': return '#e3b341';
      default: return 'var(--text-muted)';
    }
  };

  return (
    <div className="activity-container">
      <div className="activity-header">
        <Target size={32} className="activity-icon" style={{ color: 'var(--primary-color)' }} />
        <h2>PLG Action Plan</h2>
        <p>Convert your Readiness Assessment into an actionable roadmap with defined strategic goals.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.5rem' }}>
          <h3 style={{ margin: '0 0 1rem 0' }}>PLG Vision and Goals</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>Define what success looks like for your PLG motion (e.g. increase free trial conversion by 20%, automate onboarding).</p>
          <textarea 
            value={data.visionAndGoals || ''} 
            onChange={(e) => updateField('visionAndGoals', e.target.value)}
            placeholder="Enter your strategic vision..."
            style={{ width: '100%', minHeight: '100px', padding: '12px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '8px', color: '#fff', fontFamily: 'inherit', resize: 'vertical' }}
          />
        </div>

        <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.5rem' }}>
          <h3 style={{ margin: '0 0 1rem 0' }}>Priority Improvement Areas</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>Based on your assessment, list the major functional areas that need immediate attention.</p>
          <textarea 
            value={data.priorityAreas || ''} 
            onChange={(e) => updateField('priorityAreas', e.target.value)}
            placeholder="Enter your priority areas..."
            style={{ width: '100%', minHeight: '100px', padding: '12px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '8px', color: '#fff', fontFamily: 'inherit', resize: 'vertical' }}
          />
        </div>
      </div>

      <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
          <h3 style={{ margin: 0 }}>Execution Roadmap</h3>
        </div>
        <div style={{ padding: '1.5rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Category</th>
                <th style={{ padding: '0.75rem', color: 'var(--text-muted)', width: '35%' }}>Action Item</th>
                <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Owner</th>
                <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Target Date</th>
                <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Status</th>
                <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}></th>
              </tr>
            </thead>
            <tbody>
              {(data.actions || []).map(item => (
                <tr key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '0.75rem' }}>
                    <select 
                      value={item.category} 
                      onChange={(e) => updateAction(item.id, 'category', e.target.value)}
                      style={{ width: '100%', padding: '8px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                    >
                      <option>Marketplace</option>
                      <option>Product</option>
                      <option>Pricing</option>
                      <option>Technical</option>
                      <option>GTM Strategy</option>
                    </select>
                  </td>
                  <td style={{ padding: '0.75rem' }}>
                    <input 
                      type="text" 
                      value={item.action} 
                      placeholder="Define action step..."
                      onChange={(e) => updateAction(item.id, 'action', e.target.value)}
                      style={{ width: '100%', padding: '8px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                    />
                  </td>
                  <td style={{ padding: '0.75rem' }}>
                    <input 
                      type="text" 
                      value={item.owner} 
                      placeholder="Owner Name"
                      onChange={(e) => updateAction(item.id, 'owner', e.target.value)}
                      style={{ width: '100%', padding: '8px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                    />
                  </td>
                  <td style={{ padding: '0.75rem' }}>
                    <input 
                      type="date" 
                      value={item.targetDate} 
                      onChange={(e) => updateAction(item.id, 'targetDate', e.target.value)}
                      style={{ width: '100%', padding: '8px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                    />
                  </td>
                  <td style={{ padding: '0.75rem' }}>
                    <select 
                      value={item.status} 
                      onChange={(e) => updateAction(item.id, 'status', e.target.value)}
                      style={{ width: '100%', padding: '8px', backgroundColor: 'var(--bg-color)', border: `1px solid ${getStatusColor(item.status)}`, borderRadius: '6px', color: getStatusColor(item.status), fontWeight: 'bold' }}
                    >
                      <option>Not Started</option>
                      <option>In Progress</option>
                      <option>Completed</option>
                    </select>
                  </td>
                  <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                    <button 
                      onClick={() => removeAction(item.id)}
                      style={{ background: 'none', border: 'none', color: '#f85149', cursor: 'pointer', padding: '4px' }}
                      title="Remove action"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <button 
            onClick={addAction}
            style={{ 
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'transparent',
              color: 'var(--primary-color)',
              border: '1px dashed var(--primary-color)',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              width: '100%',
              justifyContent: 'center'
            }}
          >
            <Plus size={16} /> Add New Action Item
          </button>
        </div>
      </div>
    </div>
  );
}
