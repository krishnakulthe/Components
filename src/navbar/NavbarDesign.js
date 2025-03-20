import React from 'react';
import './Navbar.css'; // Navbar styles
import { SquarePen } from 'lucide-react';

const NavbarDesign = ({ tabs, activeTab, handleTabChange }) => {
  return (
    <div className="navbar-container">
      {/* Horizontal Navbar */}
      <div className="navbar">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className={activeTab === tab.name ? 'active' : ''}
              onClick={() => handleTabChange(tab.name)}
            >
              {tab.label}
            </li>
          ))}
        </ul>

        <SquarePen />
      </div>
    </div>
  );
};

export default NavbarDesign;