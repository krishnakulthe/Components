// /*Event Details */

// import React from 'react';

// import EventForm from './component/EventForm';
// import './component/Styling.css';

// const App = () => {

//   const handleBackClick = () => {
//     alert("Going Back!");
//   };

//   const handleFinishClick = () => {
//     alert("Finished!");
//   };

//   return (
//     <div className="app-container">
//       <EventForm
//         locationLabel="Event Location"
//         descriptionLabel="Event Description"
//         backButtonLabel="Back"
//         finishButtonLabel="Finish"
//         onBackClick={handleBackClick}
//         onFinishClick={handleFinishClick}
//       />
//     </div>
//   );
// };

// export default App;


/* Navbar */
/* Vertical Navbar */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarLogic from './navbar/NavbarLogic';
import Details from './navbar/Details/Details';
import Tasks from './navbar/Task/Tasks';
import FilesUploads from './navbar/FilesAndUploads/FilesUploads';
import Publish from './navbar/Publish/Publish';
import './App.css';

const tabs = [
  { name: 'Details', label: 'Details' },
  { name: 'Tasks', label: 'Tasks' },
  { name: 'FilesAndUploads', label: 'Files & Uploads' },
  { name: 'Publish', label: 'Publish' },
];

const App = () => {
  const tasks = []; // Example tasks array
  const handleAddTask = () => {};
  const handleEditTask = () => {};

  return (
    <Router>
      <div className="App">
        <NavbarLogic tabs={tabs} />
        <Routes>
          <Route path="/details" element={<Details />} />
          <Route path="/tasks" element={<Tasks tasks={tasks} onAddTask={handleAddTask} onEditTask={handleEditTask} />} />
          <Route path="/filesanduploads" element={<FilesUploads />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;