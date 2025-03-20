import React from 'react';
import './FilesDisplay.css';
import { Image as ImageIcon, Music as MusicIcon, Clapperboard } from 'lucide-react'; // Import the Lucide icons

const FilesDisplay = ({ files }) => {
  return (
    <div className="files-container">
      <h2>Files</h2>
      <div className="files-grid">
        {files.map((file, index) => (
          <div key={index} className="file-card">
            <div className="file-header">
              {file.type === 'image' && <ImageIcon size={30} />}
              {file.type === 'video' && <Clapperboard size={30} />}
              {file.type === 'audio' && <MusicIcon size={30} />}
              <span>{file.name}</span>
            </div>
            <div className="file-icon">
              {file.type === 'image' && <img src="./photo.jpg" alt={file.name} />}
              {file.type === 'video' && <video src="./video.mp4" controls className="file-video" />}
              {file.type === 'audio' && <audio src="./audio.mp3" controls className="file-audio" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilesDisplay;