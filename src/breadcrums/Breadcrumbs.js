import React from "react";
import "./Breadcrumbs.css"; // Import styles

const Breadcrumbs = ({ items, currentIndex }) => {
  return (
    <div className="breadcrumbs-container">
      <nav className="breadcrumbs">
        {items.map((item, index) => (
          <div key={index} className="breadcrumb-item">
            {/* Icon */}
            {item.icon && <item.icon className="breadcrumb-icon" />}

            {/* Static Text for Previous Items, Dropdown for Current */}
            {index === currentIndex ? (
              <select className="breadcrumb-dropdown" onChange={(e) => item.onSelect(e.target.value)}>
                {item.options.map((option, idx) => (
                  <option key={idx} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <span className="breadcrumb-text">{item.label}</span>
            )}

            {/* Separator (except last item) */}
            {index < items.length - 1 && <span className="breadcrumb-separator">/</span>}
          </div>
        ))}
      </nav>

      
    </div>
  );
};

export default Breadcrumbs;
