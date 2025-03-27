import React, { useState } from 'react';
import './FilesDisplay.css';
import filesData from './filesData.json';
import { Image as ImageIcon, Music as MusicIcon, Clapperboard, File as FileIcon, X as CloseIcon } from 'lucide-react';

const FilesDisplay = () => {
  const [popupContent, setPopupContent] = useState(null);

  const handleFileClick = (file) => setPopupContent(file);
  const closePopup = () => setPopupContent(null);

  const getFileSource = (file) => {
    if (file.base64Data) {
      const mimeTypes = {
        'jpeg': 'image/jpeg',
        'jpg': 'image/jpeg',
        'png': 'image/png',
        'gif': 'image/gif',
        'bmp': 'image/bmp',
        'webp': 'image/webp',
        'svg': 'image/svg+xml',
        'heic': 'image/heic',
        'avif': 'image/avif',
        'mp4': 'video/mp4',
        'webm': 'video/webm',
        'ogg': 'video/ogg',
        'mov': 'video/quicktime',
        'avi': 'video/x-msvideo',
        'mkv': 'video/x-matroska',
        'mp3': 'audio/mpeg',
        'wav': 'audio/wav',
        'aac': 'audio/aac',
        'ogg-audio': 'audio/ogg',
        'flac': 'audio/flac',
        'm4a': 'audio/mp4',
        'aiff': 'audio/aiff',
        'wma': 'audio/x-ms-wma'
      };

      const mimeType = mimeTypes[file.extension] || 'application/octet-stream';
      return `data:${mimeType};base64,${file.base64Data}`;
    }
    return file.url;
  };

  const renderFileContent = (file) => {
    const fileSource = getFileSource(file);

    switch (file.type) {
      case 'image':
        return <img src={fileSource} alt={file.name} />;
      case 'video':
        return <video src={fileSource} controls className="file-video" />;
      case 'audio':
        return <audio src={fileSource} controls className="file-audio" />;
      default:
        return <p>Unsupported file type: {file.type}</p>;
    }
  };

  const getCloseIconSize = (file) => {
    switch (file.type) {
      case 'image':
        return 30;
      case 'video':
        return 40;
      case 'audio':
        return 24;
      default:
        return 24;
    }
  };

  return (
    <div className="files-container">
      <h2>Files</h2>
      <div className="files-grid">
        {filesData.map((file, index) => (
          <div key={index} className="file-card" onClick={() => handleFileClick(file)}>
            <div className="file-header">
              {file.type === 'image' && <ImageIcon size={30} />}
              {file.type === 'video' && <Clapperboard size={30} />}
              {file.type === 'audio' && <MusicIcon size={30} />}
              {!['image', 'video', 'audio'].includes(file.type) && <FileIcon size={30} />}
              <span>{file.name}</span>
            </div>
            <div className="file-icon">
              {renderFileContent(file)}
            </div>
          </div>
        ))}
      </div>

      {popupContent && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <CloseIcon className="close-icon" onClick={closePopup} size={getCloseIconSize(popupContent)} />
            {renderFileContent(popupContent)}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilesDisplay;
