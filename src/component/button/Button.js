import React from 'react';


const Button = ({ label, onClick, type = 'button', className }) => {
  return (
    <button type={type} onClick={onClick} className={`custom-button ${className}`}>
      {label}
    </button>
  );
};

export default Button;
