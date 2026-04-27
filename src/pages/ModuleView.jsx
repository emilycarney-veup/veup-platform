import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, Circle } from 'lucide-react';
import { curriculum } from '../data/curriculum';
import ContentViewer from '../components/ContentViewer';
import { useProgress } from '../context/ProgressContext';

export default function ModuleView() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { isCompleted, getModuleProgress } = useProgress();
  
  const module = curriculum.find(m => m.id === moduleId);
  const [activeSectionId, setActiveSectionId] = useState('');

  useEffect(() => {
    if (module && module.sections.length > 0 && !activeSectionId) {
      setActiveSectionId(module.sections[0].id);
    }
  }, [module, activeSectionId]);

  if (!module) return <div>Module not found</div>;

  const activeIndex = module.sections.findIndex(s => s.id === activeSectionId);
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === module.sections.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setActiveSectionId(module.sections[activeIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      setActiveSectionId(module.sections[activeIndex - 1].id);
    }
  };

  const progress = getModuleProgress(module.id, module.sections.length);

  return (
    <div className="module-view-container">
      <div className="module-sidebar">
        <h3 style={{ marginBottom: '1.5rem', color: '#fff' }}>{module.title}</h3>
        
        <div style={{ marginBottom: '2rem' }}>
          <div className="progress-text" style={{ marginBottom: '0.5rem' }}>
             <span>Progress completed</span>
             <span>{progress}%</span>
          </div>
          <div className="progress-bar-container">
             <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="mini-sections-list">
          {module.sections.map((section, idx) => {
            const completed = isCompleted(module.id, section.id);
            return (
              <div 
                key={section.id}
                className={`mini-section-link ${activeSectionId === section.id ? 'active' : ''}`}
                onClick={() => setActiveSectionId(section.id)}
              >
                <div className="mini-section-icon">
                  {completed ? <CheckCircle2 size={18} color="var(--success-color)" /> : <Circle size={18} />}
                </div>
                <span>{idx + 1}. {section.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="module-main">
        {activeSectionId && (
          <ContentViewer 
            module={module}
            sectionId={activeSectionId}
            onNext={handleNext}
            onPrev={handlePrev}
            isFirst={isFirst}
            isLast={isLast}
          />
        )}
      </div>
    </div>
  );
}
