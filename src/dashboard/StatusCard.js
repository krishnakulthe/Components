import React from 'react';
import './StatusCard.css';

const StatusCard = ({ title, count, color }) => {
  const handleClick = (e) => {
    console.log('Clicked', e.target); // Open the browser
    debugger
  }
  return (
    <div onClick={handleClick} className="status-card" style={{ borderColor: color }}>
      <h3>{title}</h3>
      <p style={{ color }}>{count}</p>
    </div>
  );
};

export default StatusCard;