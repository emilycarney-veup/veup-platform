import { FileText, Download } from 'lucide-react';
import { resources } from '../data/curriculum';

export default function Resources() {
  // Group resources by category
  const groupedResources = resources.reduce((acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = [];
    }
    acc[resource.category].push(resource);
    return acc;
  }, {});

  return (
    <div className="dashboard">
      <h1 style={{ marginBottom: '0.5rem' }}>Attached Resources</h1>
      <p className="dashboard-subtitle" style={{ marginBottom: '3rem' }}>
        Downloadable guides, templates, and playbooks direct from AWS and VeUP.
      </p>
      
      {Object.entries(groupedResources).map(([category, items]) => (
        <div key={category} style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            color: 'var(--primary-color)', 
            borderBottom: '1px solid var(--border-color)', 
            paddingBottom: '0.5rem', 
            marginBottom: '1.5rem',
            fontSize: '1.25rem'
          }}>
            {category}
          </h2>
          <div className="resource-grid">
            {items.map(resource => (
              <div key={resource.id} className="resource-card">
                <div className="resource-icon">
                  <FileText size={32} />
                </div>
                <h3 className="resource-title" style={{ fontSize: '1rem', lineHeight: '1.4', marginBottom: '0.5rem' }}>
                  {resource.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  {resource.type} • {resource.size}
                </p>
                <button className="nav-btn" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                  <Download size={18} />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
