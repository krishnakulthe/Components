import React, { useState } from "react";
import RichTextEditor from "./texteditor/RichTextEditor";
import "./App.css";

const App = () => {
  const [content, setContent] = useState("");

  return (
    <div className="app-container">
      <h2>Content for Creation (Description) *</h2>
      <RichTextEditor
        value={content}
        onChange={setContent}
        placeholder="Write something..."
        toolbarOptions={[
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          ["blockquote", "code-block"],
          [{ align: [] }],
          ["link", "image", "video"],
          ["clean"], // Remove formatting
        ]}
      />
    </div>
  );
};

export default App;






      // Avatar HeaderBar  //

// import React from "react";
// import HeaderBar from "./avatarheaderbar/HeaderBar";

// const App = () => {
//   return (
//     <div>
//       <HeaderBar
//         title="Synapse Competition 2025"
//         date="23, February, 2025"
//         createdBy="A" // Creator's Initial
//         avatars={["J", "K"]} // Participant Initials
//         totalParticipants={6}
//         onBackClick={() => console.log("Back clicked")}
//         onNewTaskClick={() => console.log("New Task clicked")}
//         onSaveClick={() => console.log("Save clicked")}
//       />
//     </div>
//   );
// };

// export default App;





//        Breadcrumbs opretion

// import React, { useState } from "react";
// import Breadcrumbs from "./breadcrums/Breadcrumbs";
// import { Home, Folder, File } from "lucide-react";

// const App = () => {
//   const [selectedValue, setSelectedValue] = useState("report");

//   const handleSelectChange = (value) => {
//     setSelectedValue(value);
//     console.log("Selected:", value);
//   };

//   const breadcrumbs = [
//     { icon: Home, label: "Dashboard" },
//     { icon: Folder, label: "Documents" },
//     {
//       icon: File,
//       options: [
//         { value: "report", label: "Report.pdf" },
//         { value: "notes", label: "Notes.txt" },
//       ],
//       onSelect: handleSelectChange,
//     },
//   ];

//   return (
//     <div>
//       <Breadcrumbs items={breadcrumbs} currentIndex={breadcrumbs.length - 1} />
//     </div>
//   );
// };

// export default App;






//   // DatePicker and DateRangePicker


// // import React, { useState } from "react";
// // import DatePicker from "./components/DatePicker";

// // const App = () => {
// //   const [eventDateRange, setEventDateRange] = useState({
// //     startDate: null,
// //     endDate: null,
// //   });

// //   const [eventDate, setEventDate] = useState({
// //     data: null,
// //   });

// //   console.log("edr", eventDateRange);
// //   console.log("ed", eventDate);

// //   return (
// //     <div className="app-container">
// //       {/* Pass the label dynamically */}
// //       <DatePicker
// //         label="Event Date"
// //         selectedRange={eventDate}
// //         onChange={setEventDate}
// //       />

// //       <DatePicker
// //         label="Event Date Range"
// //         selectedRange={eventDateRange}
// //         onChange={setEventDateRange}
// //         type="range"
// //       />

// //       {/* Display Selected Date */}
// //       <p className="selected-dates">
// //         Selected Date:{" "}
// //         {eventDate.date
// //           ? `${eventDate.date.toDateString()}`
// //           : "No date selected"}
// //       </p>

// //       {/* Display Selected Dates */}
// //       <p className="selected-dates">
// //         Selected Range:{" "}
// //         {eventDateRange.startDate && eventDateRange.endDate
// //           ? `${eventDateRange.startDate.toDateString()} - ${eventDateRange.endDate.toDateString()}`
// //           : "No date selected"}
// //       </p>
// //     </div>
// //   );
// // };

// // export default App;





//            select option code


// import React, { useState } from 'react';
// import Select from '../../datepicker/src/selectoption/Select'; // Adjust the import path
// import { UserRoundPlus } from 'lucide-react';

// const App = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const options = [
//     { value: 'option1', label: 'Option 1' },
//     { value: 'option2', label: 'Option 2' },
//     { value: 'option3', label: 'Option 3' },
//   ];

//   const handleSelectChange = (value) => {
//     setSelectedOption(value);
//     console.log('Selected:', value);
//   };

//   return (
//     <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
//       <Select
//         label="Select an Option"
//         icon={UserRoundPlus} // Pass icon dynamically
//         options={options}
//         value={selectedOption}
//         onChange={handleSelectChange}
//         placeholder="Choose an option"
//         width="350px"
//       />
//     </div>
//   );
// };

// export default App;
