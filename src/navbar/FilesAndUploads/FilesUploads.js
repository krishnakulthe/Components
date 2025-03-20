import React, { useState, useEffect } from "react";
import Links from "./Links";
import FilesDisplay from "./FilesDisplay";
import './FilesUploads.css';
import filesData from './filesData.json';
import linksData from './linksData.json';

const FilesUploads = () => {
  const [files, setFiles] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setFiles(filesData);
    setLinks(linksData);
  }, []);

  const handleAddLink = () => {
    const newLink = prompt("Enter the new link URL:");
    if (newLink) {
      setLinks((prevLinks) => [...prevLinks, newLink]);
    }
  };

  return (
    <div className="files-uploads-container">
      <Links links={links} onAddLink={handleAddLink} />
      <FilesDisplay files={files} />
    </div>
  );
};

export default FilesUploads;