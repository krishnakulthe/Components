import React from 'react';
import './Links.css'; // Import the CSS for styling
import { PlusCircle } from 'lucide-react'; // Import the PlusCircle icon

const Links = ({ links, onAddLink }) => {
  return (
    <div className="links-container">
      <h3>Links</h3>
      
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div className="add-link-icon" onClick={onAddLink}>
        <PlusCircle size={30} />
      </div>
    </div>
  );
};

export default Links;
