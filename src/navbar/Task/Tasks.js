import React, { useState, useEffect } from 'react';
import './Tasks.css';
import tasksData from './tasksData.json';

const Tasks = ({ onAddTask }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  return (
    <div className="tasks-container">
      <table className="task-table">
        <thead>
          <tr>
            <th>Creative Name </th>
            <th>Creative Type </th>
            <th>Assigned To </th>
            <th>Due Date </th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-tasks">
                No Tasks Scheduled at this time
              </td>
            </tr>
          ) : (
            tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.name}</td>
                <td>{task.type}</td>
                <td>{task.assignedTo}</td>
                <td>{task.dueDate}</td>
                <td>{task.status}</td>
                <td>
                  <button onClick={() => onAddTask(task)}>Edit</button>
                </td>
              </tr>
            ))
          )}

          {tasks.length === 0 && (
            <tr>
              <td colSpan="6" className="add-task">
                <button onClick={onAddTask}>Click here to add a New Task</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;