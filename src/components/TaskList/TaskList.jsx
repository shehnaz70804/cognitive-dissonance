// TaskList.jsx
import React from 'react';
import styles from './TaskList.module.css';
// Import your drag-and-drop library hooks/components here

const TaskList = ({ tasks }) => {
  return (
    <div className={styles.taskList}>
      {tasks.map(task => (
        <div key={task.id} className={styles.taskItem} style={{ borderLeft: `4px solid ${getPriorityColor(task.priority)}` }}>
          {task.name}
          {/* Add logic for drag-and-drop and reward animations */}
        </div>
      ))}
    </div>
  );
};

// Helper to map priority to color (you can move this to a utility file later)
const getPriorityColor = (priority) => {
  switch (priority) {
    case 'high': return 'var(--priority-high)';
    case 'medium': return 'var(--priority-medium)';
    default: return 'var(--priority-low)';
  }
};

export default TaskList;
