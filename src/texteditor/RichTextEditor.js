import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./RichTextEditor.css";

const RichTextEditor = ({
  value,
  onChange,
  placeholder = "Write something...",
  readOnly = false,
  toolbarOptions = [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"], // Remove formatting
  ],
}) => {
  return (
    <div className="editor-container">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        modules={{ toolbar: toolbarOptions }}
      />
    </div>
  );
};

export default RichTextEditor;
