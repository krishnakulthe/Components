import React from 'react';
import './TextArea.css';
import '../Styling.css';

const TextArea = ({ label, placeholder, value, onChange, rows, cols, resize }) => {
  return (
    <div className="textarea-container">
      {label && <label>{label}</label>}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows} // Control the number of rows
        cols={cols} // Control the number of columns
        style={{ resize: resize }} // Enable or disable resizing via CSS
      />
    </div>
  );
};

export default TextArea;
