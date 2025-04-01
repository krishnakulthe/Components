import React from 'react';
import './EventList.css';

const EventList = ({ title, data, type, onSeeAll, icon }) => {
  return (
    <div className="event-list">
      <div className="event-list-header">
        <h3>{title}</h3>
        {icon && <div className="icon-container">{icon}</div>} {/* Render the icon if provided */}
      </div>
      <ul>
        {data.map((item, index) => (
          <li key={index} className={type === 'upcoming' ? 'upcoming' : ''}>
            <span>{item.name}</span>
            <span>{item.time || item.date || item.college}</span>
          </li>
        ))}
      </ul>
      {type === 'upcoming' && (
        <button className="see-all-button" onClick={onSeeAll}>
          See All
        </button>
      )}
    </div>
  );
};

export default EventList;