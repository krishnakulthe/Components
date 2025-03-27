// /*** Event Details ***/

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


/***  Navbar ***/
/* Vertical Navbar */

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavbarLogic from './navbar/NavbarLogic';
// import Details from './navbar/Details/Details';
// import Tasks from './navbar/Task/Tasks';
// import FilesUploads from './navbar/FilesAndUploads/FilesUploads';
// import Publish from './navbar/Publish/Publish';
// import './App.css';

// const tabs = [
//   { name: 'Details', label: 'Details' },
//   { name: 'Tasks', label: 'Tasks' },
//   { name: 'FilesAndUploads', label: 'Files & Uploads' },
//   { name: 'Publish', label: 'Publish' },
// ];

// const App = () => {
//   const tasks = []; // Example tasks array
//   const handleAddTask = () => {};
//   const handleEditTask = () => {};

//   return (
//     <Router>
//       <div className="App">
//         <NavbarLogic tabs={tabs} />
//         <Routes>
//           <Route path="/details" element={<Details />} />
//           <Route path="/tasks" element={<Tasks tasks={tasks} onAddTask={handleAddTask} onEditTask={handleEditTask} />} />
//           <Route path="/filesanduploads" element={<FilesUploads />} />
//           <Route path="/publish" element={<Publish />} />
//           {/* <Route path="/" element={<Details />} /> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



/*** Dashboard ***/

import React from 'react';
import Dashboard from './dashboard/Dashboard';

const App = () => {
  const activeEvents = 10;
  const pendingTasks = 24;
  const deadlines = 6;

  const upcomingEvents = [
    { name: 'Annual Tech Fest', college: 'AISSMS IOIT', time: '5d 4hrs' },
    { name: 'Sports Meet', college: 'AISSMS IOIT', time: '6d 4hrs' },
    { name: 'Cultural Meet', college: 'AISSMS IOIT', time: '7d 4hrs' },
    { name: 'Advert Campaign', college: 'AISSMS IOIT', time: '10d 4hrs' },
    { name: 'Podcast', college: 'AISSMS IOIT', time: '15d 4hrs' }
  ];

  const pastEvents = [
    { name: 'Hackathon Fest', college: 'AISSMS IOIT' },
    { name: 'Coders Chef Challenge', college: 'AISSMS IOIT' },
    { name: 'Cyber-Tron 2024', college: 'AISSMS IOIT' }
  ];

  const tasks = [
    { name: 'Create Video', event: 'Coffee and Conversations', college: 'AISSMS IOIT', date: '25th Feb' },
    { name: 'Upload Audio File', event: 'Podcast - Our Earth', college: 'AISSMS IOIT', date: '25th Feb' },
    { name: 'Upload Text File', event: 'News Letter', college: 'AISSMS IOIT', date: '25th Feb' },
    { name: 'Upload Text File', event: 'Blogers Stop', college: 'AISSMS IOIT', date: '25th Feb' },
    { name: 'Upload Text File', event: 'Brochure', college: 'AISSMS IOIT', date: '25th Feb' }
  ];

  return (
    <Dashboard 
      activeEvents={activeEvents} 
      pendingTasks={pendingTasks} 
      deadlines={deadlines} 
      upcomingEvents={upcomingEvents} 
      pastEvents={pastEvents} 
      tasks={tasks} 
    />
  );
};

export default App;
