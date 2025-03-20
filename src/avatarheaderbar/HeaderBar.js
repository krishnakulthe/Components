import React, { useState } from "react";
import { ArrowLeft, Calendar, Save, User } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../dropdowns/Dropdown";
import "./HeaderBar.css";

const HeaderBar = ({
  title: initialTitle,
  date: initialDate,
  createdBy,
  avatars: initialAvatars = [],
  totalParticipants,
  onBackClick,
  onNewTaskClick,
  onSaveClick,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [date, setDate] = useState(new Date(initialDate));
  const [avatars] = useState(initialAvatars);
  const [selectedDropdownOption, setSelectedDropdownOption] = useState({
    label: "New",
    value: "new",
    color: "gray",
  });

  const dropdownOptions = [
    { label: "New", value: "new", color: "gray" },
    { label: "Active", value: "active", color: "blue" },
    { label: "Under Review", value: "under_review", color: "orange" },
    { label: "Approval", value: "approval", color: "yellow" },
    { label: "Approved", value: "approved", color: "green" },
    { label: "Published", value: "published", color: "purple" },
  ];

  const handleTitleChange = (e) => setTitle(e.target.innerText);
  const handleDateChange = (date) => setDate(date);
  const handleDropdownSelect = (option) => setSelectedDropdownOption(option);

  return (
    <div className="header-container">
      <div className="left-section">
        <div className="top-left">
          <button className="back-button" onClick={onBackClick}>
            <ArrowLeft size={20} />
          </button>
          <div className="header-titles">
            <h2
              className="header-title"
              contentEditable
              suppressContentEditableWarning
              onBlur={handleTitleChange}
            >
              {title}
            </h2>
          </div>
        </div>
        <div className="avatar-dropdown-container">
          <div className="avatar-group">
            {avatars.slice(0, 2).map((avatar, index) => (
              <div key={index} className="avatar">
                {avatar || <User size={16} />}
              </div>
            ))}
            {totalParticipants > 2 && (
              <div className="avatar-count">+{totalParticipants - 2}</div>
            )}
            <div className="add-avatar">+</div>
          </div>
          <div className="dropdown-container">
            <Dropdown
              options={dropdownOptions}
              selectedOption={selectedDropdownOption}
              onSelect={handleDropdownSelect}
            />
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="date-creator-container">
          <div className="date-section">
            <Calendar size={16} />
            <DatePicker
              selected={date}
              onChange={handleDateChange}
              dateFormat="dd, MM, yyyy"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
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
