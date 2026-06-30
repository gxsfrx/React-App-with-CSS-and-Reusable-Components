import React, { useState } from 'react';
import CustomButton from './CustomButton';

function RegistrationForm({ setView }) {
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Successfully Registered: ${formData.name}`);
    setView('home'); // Redirect back to home after successful registration action
  };

  return (
    <div className="registration-container">
      <h2 style={{ textAlign: 'center', color: '#1e40af', marginBottom: '1.5rem' }}>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            placeholder="Enter full name" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Course / Program</label>
          <input 
            type="text" 
            placeholder="e.g. BSIT" 
            value={formData.course}
            onChange={(e) => setFormData({...formData, course: e.target.value})} 
            required 
          />
        </div>
        
        <div className="form-actions">
          <CustomButton text="Cancel" type="button" onClick={() => setView('home')} variant="secondary" />
          <CustomButton text="Submit Details" type="submit" variant="primary" />
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;