import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';

export default function ModuleCard({ module }) {
  const { getModuleProgress } = useProgress();
  
  const progress = getModuleProgress(module.id, module.sections.length);
  
  return (
    <div className="module-card">
      <div className="module-card-header">
        <div className={`module-status ${progress === 100 ? 'completed' : progress > 0 ? 'active' : ''}`}>
          {progress === 100 ? 'Completed' : progress > 0 ? 'In progress' : 'Not started'}
        </div>
      </div>
      <h3 className="module-title">{module.title}</h3>
      <p className="module-desc">
        {module.sections.length} mini-sections • Est. {module.duration}
      </p>
      
      <div style={{ marginTop: 'auto' }}>
        <div className="progress-text">
          <span>{progress === 100 ? 'Finished' : progress > 0 ? 'Continue learning' : 'Start module'}</span>
          <span>{progress}%</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        
        <Link to={`/module/${module.id}`}>
          <button className="mark-complete-btn" style={{ marginTop: '1rem', padding: '0.5rem' }}>
            {progress === 100 ? 'Review' : progress > 0 ? 'Resume' : 'Start'}
          </button>
        </Link>
      </div>
    </div>
  );
}
