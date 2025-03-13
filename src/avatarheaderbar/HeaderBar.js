import React from "react";
import { ArrowLeft, Calendar, Save, User } from "lucide-react";
import "./HeaderBar.css";

const HeaderBar = ({
  title,
  subtitle, // Add subtitle prop
  date,
  createdBy,
  avatars = [],
  totalParticipants,
  onBackClick,
  onNewTaskClick,
  onSaveClick,
}) => {
  return (
    <div className="header-container">
      {/* Left Section: Back Button, Title, and Avatars */}
      <div className="left-section">
        <div className="top-left">
          <button className="back-button" onClick={onBackClick}>
            <ArrowLeft size={20} />
          </button>
          <div className="header-titles">
            <h2 className="header-title">{title}</h2>
            <span className="header-subtitle">{subtitle}</span> {/* Add subtitle */}
          </div>
        </div>
        <div className="avatar-group">
          {avatars.slice(0, 2).map((avatar, index) => (
            <div key={index} className="avatar">{avatar || <User size={16} />}</div>
          ))}
          {totalParticipants > 2 && (
            <div className="avatar-count">+{totalParticipants - 2}</div>
          )}
          <div className="add-avatar">+</div>
        </div>
      </div>

      {/* Right Section: Date, Creator, and Buttons */}
      <div className="right-section">
        <div className="date-creator-container">
          <div className="date-section">
            <Calendar size={16} />
            <span>{date}</span>
          </div>

          <div className="creator-section">
            <span>Created By</span>
            <div className="creator-avatar">{createdBy || <User size={16} />}</div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="new-task-btn" onClick={onNewTaskClick}>New Task</button>
          <button className="save-btn" onClick={onSaveClick}>
            <Save size={16} />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
