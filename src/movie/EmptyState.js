import React from 'react';
import { Upload } from 'lucide-react';

const EmptyState = () => {
  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files.length) {
      console.log("Uploaded files:", files);
    }
  };

  return (
    <div className="empty-state">
      <label htmlFor="file-upload" className="upload-label">
        <Upload size={40} />
      </label>
      <input id="file-upload" type="file" multiple accept="video/*,audio/*,image/*" style={{ display: 'none' }} onChange={handleFileUpload} />
      <p>Nothing to see here</p>
    </div>
  );
};

export default EmptyState;