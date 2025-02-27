// src/components/Navigation.jsx
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="navigation">
      <Link 
        to="/" 
        className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
      >
        <span className="nav-icon">📊</span>
        <span className="nav-label">Home</span>
      </Link>
      
      <Link 
        to="/program" 
        className={`nav-item ${location.pathname === '/program' ? 'active' : ''}`}
      >
        <span className="nav-icon">🏋️</span>
        <span className="nav-label">My Program</span>
      </Link>
    </nav>
  );
};