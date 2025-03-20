import React from "react";
import "./TextField";
import '../Styling.css';

const TextField = ({ 
  label, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  required, 
  disabled, 
  containerClass = "text-field", 
  inputClass = "text-field-input responsive-text", 
  icon: Icon // Accepts an icon component as a prop
}) => {
  return (
    <div className={containerClass}>
      {label && <label className="text-field-label">{label}</label>}
      
      <div className="input-container">
        {/* Render the icon dynamically if provided */}
        {Icon && <Icon className="location-icon" color="black" />}
        
        <input
          type={type}
          className={inputClass}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default TextField;
