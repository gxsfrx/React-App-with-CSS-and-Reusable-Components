import React from 'react';

function CustomButton({ text, onClick, type = "button", variant = "primary" }) {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`btn btn-${variant}`}
    >
      {text}
    </button>
  );
}

export default CustomButton;