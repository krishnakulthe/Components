import React from 'react';
import './StatusCard.css';

const StatusCard = ({ title, count, color }) => {
  return (
    <div className="status-card" style={{ borderColor: color }}>
      <h3>{title}</h3>
      <p style={{ color }}>{count}</p>
    </div>
  );
};

export default StatusCard;