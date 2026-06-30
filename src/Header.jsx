import React from 'react';

function Header({ schoolName, logoUrl, setView, currentView }) {
  return (
    <header className="app-header">
      <div className="header-brand">
        <img src={logoUrl} alt="School Logo" className="school-logo" />
        <h1 className="school-name">{schoolName}</h1>
      </div>
      <nav className="nav-links">
        <button 
          className={`nav-btn ${currentView === 'home' ? 'active' : ''}`}
          onClick={() => setView('home')}
        >
          Home
        </button>
        <button 
          className={`nav-btn ${currentView === 'register' ? 'active' : ''}`}
          onClick={() => setView('register')}
        >
          Registration Form
        </button>
      </nav>
    </header>
  );
}

export default Header;