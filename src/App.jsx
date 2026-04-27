import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ModuleView from './pages/ModuleView';
import Resources from './pages/Resources';
import Activities from './pages/Activities';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/module/:moduleId" element={<ModuleView />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
