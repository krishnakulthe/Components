import React from 'react';
import { UserRoundPlus } from 'lucide-react';
import './Select.css';

const Select = ({ label, options, value, onChange, icon: Icon = UserRoundPlus, placeholder, width }) => {
  return (
    <div className="select-container" style={{ maxWidth: width || '100%' }}>
      {label && <label className="select-label">{label}</label>}
      <div className="select-wrapper">
        <select
          className="select-dropdown"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Icon className="select-icon" />
      </div>
    </div>
  );
};

export default Select;
