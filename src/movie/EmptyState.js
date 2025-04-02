import React, { useRef, useState } from 'react';
import { Upload } from 'lucide-react';

const EmptyState = () => {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles(uploadedFiles);
  };

  const triggerFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="empty-state-box">
      {selectedFile ? (
        <div className="file-preview">
          {selectedFile.type.startsWith('image') && (
            <img src={URL.createObjectURL(selectedFile)} alt="Preview" className="preview-image" />
          )}
          {selectedFile.type.startsWith('video') && (
            <video controls className="preview-video">
              <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
            </video>
          )}
          {selectedFile.type.startsWith('audio') && (
            <audio controls>
              <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
            </audio>
          )}
        </div>
      ) : (
        <>
          <Upload size={40} onClick={triggerFileUpload} style={{ cursor: 'pointer' }} />
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="video/*,audio/*,image/*"
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
          <div className="file-list">
            {files.map((file, index) => (
              <p key={index} onClick={() => setSelectedFile(file)} style={{ cursor: 'pointer' }}>
                {file.name}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default EmptyState;