import React from 'react';
import StatusCard from '../dashboard/StatusCard';
import EventList from '../dashboard/EventList';
import { CirclePlus } from 'lucide-react'; // Import the CirclePlus icon
import './Dashboard.css';

const Dashboard = ({ activeEvents, pendingTasks, deadlines, upcomingEvents, pastEvents, tasks }) => {
  // Function to handle the click event for "Add New Event"
  const handleAddEventClick = () => {
    alert('Add New Event clicked!');
    // You can replace this alert with your desired functionality
  };

  // Function to handle the click event for "See All"
  const handleSeeAllClick = (type) => {
    alert(`See All ${type} clicked!`);
    // You can replace this alert with your desired functionality
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome Rahul, Plan your day ahead</h1>

      <div className="status-cards">
        <StatusCard title="Active Events" count={activeEvents} color="green" /> 
        <StatusCard title="Pending Tasks" count={pendingTasks} color="orange" />
        <StatusCard title="Upcoming Deadlines" count={deadlines} color="red" />
      </div>

      <div className="event-section">
        <EventList
          title="Upcoming Events"
          data={upcomingEvents}
          type="upcoming"
          onSeeAll={() => handleSeeAllClick('Upcoming Events')}
          icon={
            <div className="add-event" onClick={handleAddEventClick}>
              <CirclePlus size={20} className="add-icon" />
              <span className="add-event-text">New Event</span>
            </div>
          }
        />
        <EventList
          title="Past Events"
          data={pastEvents}
          onSeeAll={() => handleSeeAllClick('Past Events')}
        />
      </div>

      <EventList
        title="Pending Tasks"
        data={tasks}
        onSeeAll={() => handleSeeAllClick('Pending Tasks')}
      />
    </div>
  );
};

export default Dashboard;

