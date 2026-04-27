import { curriculum } from '../data/curriculum';
import ModuleCard from '../components/ModuleCard';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome back!</h1>
      <p className="dashboard-subtitle">Continue your cloud innovation journey with VeUP.</p>
      
      <div className="module-grid">
        {curriculum.map(module => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </div>
  );
}
