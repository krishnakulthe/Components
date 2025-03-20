import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarDesign from './NavbarDesign'; // Import the design component

const NavbarLogic = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name); // Active tab state
  const navigate = useNavigate();

  // Handle tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab.toLowerCase().replace(/ /g, '-')}`);
  };

  return (
    <div className="navbar-container">
      <NavbarDesign
        tabs={tabs}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />
    </div>
  );
};

export default NavbarLogic;
