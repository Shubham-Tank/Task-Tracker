import React from "react";
import Task from "./Task";

const TaskList = ({ tasks}) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty-para">No task recorded</p>
      ) : (
        tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))
      )}
    </div>
  );
};

export default TaskList;
