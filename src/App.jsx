import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProfileCard from './ProfileCard';
import RegistrationForm from './RegistrationForm';
import CustomButton from './CustomButton';
import './App.css';

function App() {
  // Navigation state: 'home' or 'register'
  const [currentView, setCurrentView] = useState('home');

  // Sample props data
  const studentData = {
    name: "Jel Franzheen I. Gejon",
    course: "Bachelor of Science in Information Technology",
    yearLevel: "4th Year",
    about: "A passionate developer in the making. Loves to learn designing."
  };

  const schoolData = {
    schoolName: "St. Michael College",
    // Replace this with your actual image path from assets if needed, e.g., require('./assets/hero.png')
    logoUrl: "https://via.placeholder.com/150" 
  };

  return (
    <div className="app-container">
      {/* Navigation Bar / Header */}
      <Header 
        schoolName={schoolData.schoolName} 
        logoUrl={schoolData.logoUrl} 
        setView={setCurrentView} 
        currentView={currentView}
      />

      {/* Main Content Body */}
      <main className="main-content">
        {currentView === 'home' ? (
          <div className="home-view fade-in">
            <div className="welcome-section">
              <h2>Welcome to the Student Portal</h2>
              <p>Select an option below to get started:</p>
              
              {/* Quick Navigation Action Buttons */}
              <div className="action-buttons-group">
                <CustomButton text="Login" onClick={() => alert('Login functionality coming soon!')} variant="secondary" />
                <CustomButton text="Register Now" onClick={() => setCurrentView('register')} variant="primary" />
              </div>
            </div>

            {/* Profile Card Section */}
            <div className="profile-section">
              <ProfileCard 
                name={studentData.name}
                course={studentData.course}
                yearLevel={studentData.yearLevel}
                about={studentData.about}
              />
            </div>
          </div>
        ) : (
          <div className="registration-view fade-in">
            <RegistrationForm setView={setCurrentView} />
          </div>
        )}
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;