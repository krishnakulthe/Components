import React, { useState } from "react";
import { ChevronRight, ChevronLeft, Upload } from "lucide-react";
import "./BoxComponent.css";

const BoxComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files);
  };

  return (
    <div className="container">
      {/* White Div */}
      <div
        className="white-div"
        style={{
          width: isCollapsed ? "100%" : "50%", // Expand white div when black div disappears
          transition: "width 0.5s ease-in-out",
        }}
      ></div>

      {/* Black Div */}
      {!isCollapsed && (
        <div
          className="black-div"
          style={{
            width: "50%",
            transition: "width 0.5s ease-in-out",
          }}
        >
          {/* Upload Button */}
          {uploadedFiles.length === 0 && (
            <label
              className="upload-button"
              style={{
                backgroundColor: "transparent",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              <Upload size={24} />
              <input
                type="file"
                multiple
                accept="image/*,video/*,audio/*"
                onChange={handleFileUpload}
                hidden
              />
            </label>
          )}

          {/* Display Uploaded Files */}
          <div className="file-preview">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="file-item">
                {file.type.startsWith("image") && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="file-preview-image"
                  />
                )}
                {file.type.startsWith("video") && (
                  <video controls className="file-preview-video">
                    <source
                      src={URL.createObjectURL(file)}
                      type={file.type}
                    />
                  </video>
                )}
                {file.type.startsWith("audio") && (
                  <audio controls className="file-preview-audio">
                    <source
                      src={URL.createObjectURL(file)}
                      type={file.type}
                    />
                  </audio>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        className="toggle-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          right: isCollapsed ? "0" : "50%", // Dynamically position the button
          transition: "right 0.5s ease-in-out",
        }}
      >
        {isCollapsed ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
    </div>
  );
};

export default BoxComponent;
