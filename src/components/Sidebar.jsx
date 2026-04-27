import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, FileText, Settings, HelpCircle, PenTool } from 'lucide-react';
import { curriculum } from '../data/curriculum';

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <aside className="sidebar">
      <div style={{ marginBottom: '2rem' }}>
        <img 
          src="/assets/VeUP_Main_Light.png" 
          alt="VeUP Logo" 
          style={{ width: '150px', objectFit: 'contain' }} 
        />
      </div>
      
      <div className="nav-section">MAIN</div>
      <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
        <LayoutDashboard size={20} />
        Dashboard
      </Link>
      <Link to="/activities" className={`nav-link ${isActive('/activities') ? 'active' : ''}`}>
        <PenTool size={20} />
        Activities
      </Link>
      <Link to="/resources" className={`nav-link ${isActive('/resources') ? 'active' : ''}`}>
        <FileText size={20} />
        Resources
      </Link>

      <div className="nav-section">MODULES</div>
      {curriculum.map(module => (
        <Link 
          key={module.id} 
          to={`/module/${module.id}`} 
          className={`nav-link ${location.pathname === `/module/${module.id}` ? 'active' : ''}`}
        >
          <BookOpen size={20} />
          {module.title.split(': ')[0]}
        </Link>
      ))}

      <div style={{ marginTop: 'auto' }}>
        <div className="nav-section">SUPPORT</div>
        <a href="#" className="nav-link">
          <Settings size={20} />
          Settings
        </a>
        <a href="#" className="nav-link">
          <HelpCircle size={20} />
          Help Center
        </a>
      </div>
    </aside>
  );
}
