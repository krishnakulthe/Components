import React, { useState } from 'react';
import './FilesDisplay.css';
import { Image as ImageIcon, Music as MusicIcon, Clapperboard } from 'lucide-react'; // Import the Lucide icons

const FilesDisplay = ({ files }) => {
  const [popupContent, setPopupContent] = useState(null);

  const handleFileClick = (file) => {
    debugger;
    setPopupContent(file);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <div className="files-container">
      <h2>Files</h2>
      <div className="files-grid">
        {files.map((file, index) => (
          <div key={index} className="file-card" onClick={() => handleFileClick(file)}>
            <div className="file-header">
              {file.type === 'image' && <ImageIcon size={30} />}
              {file.type === 'video' && <Clapperboard size={30} />}
              {file.type === 'audio' && <MusicIcon size={30} />}
              <span>{file.name}</span>
            </div>
            <div className="file-icon">
              {file.type === 'image' && <img src="photo.jpg" alt={file.name} />}
              {file.type === 'video' && <video src={file.url} controls className="file-video" />}
              {file.type === 'audio' && <audio src={file.url} controls className="file-audio" />}
            </div>
          </div>
        ))}
      </div>

      {popupContent && (
        <div className="popup show" onClick={closePopup}>
          <div className="overlay" onClick={closePopup}></div>
          <div className="img-show" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closePopup}>Close</span>
            {popupContent.type === 'image' && <img src="photo.jpg" alt={popupContent.name} />}
            {popupContent.type === 'video' && <video src={popupContent.url} controls />}
            {popupContent.type === 'audio' && <audio src={popupContent.url} controls />}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilesDisplay;