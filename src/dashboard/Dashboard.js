import React from 'react';
import StatusCard from '../dashboard/StatusCard';
import EventList from '../dashboard/EventList';
import './Dashboard.css';

const Dashboard = ({ activeEvents, pendingTasks, deadlines, upcomingEvents, pastEvents, tasks }) => {
  return (
    <div className="dashboard-container">
      <h1>Welcome Rahul, Plan your day ahead</h1>

      <div className="status-cards">
        <StatusCard title="Active Events" count={activeEvents} color="green" />
        <StatusCard title="Pending Tasks" count={pendingTasks} color="orange" />
        <StatusCard title="Upcoming Deadlines" count={deadlines} color="red" />
      </div>

      <div className="event-section">
        <EventList title="Upcoming Events" data={upcomingEvents} type="upcoming" />
        <EventList title="Past Events" data={pastEvents} />
      </div>

      <EventList title="Pending Tasks" data={tasks} />
    </div>
  );
};

export default Dashboard;

