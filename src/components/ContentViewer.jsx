import { CheckCircle2 } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

export default function ContentViewer({ module, sectionId, onNext, onPrev, isLast, isFirst }) {
  const { isCompleted, markCompleted } = useProgress();
  
  if (!module) return <div>Module not found</div>;
  
  const section = module.sections.find(s => s.id === sectionId) || module.sections[0];
  const isSectionCompleted = isCompleted(module.id, section.id);

  const handleComplete = () => {
    markCompleted(module.id, section.id);
    if (!isLast) {
      onNext();
    }
  };

  return (
    <div className="content-viewer">
      <h2 className="content-title">{section.title}</h2>
      
      <div className="content-slide">
         <div 
            className="content-body" 
            dangerouslySetInnerHTML={{ __html: section.content }} 
         />
      </div>
      
      <button 
        className={`mark-complete-btn ${isSectionCompleted ? 'completed' : ''}`}
        onClick={handleComplete}
      >
        <CheckCircle2 size={24} />
        {isSectionCompleted ? 'Completed' : 'Mark as Complete'}
      </button>

      <div className="navigation-buttons">
        <button 
          className="nav-btn" 
          onClick={onPrev} 
          disabled={isFirst}
        >
          &larr; Previous
        </button>
        <button 
          className="nav-btn" 
          onClick={onNext} 
          disabled={isLast}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
