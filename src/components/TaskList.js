import React from "react";

function TaskList({ tasks, showIncomplete, setTaskStatus, removeTask }) {
  return (
    <ul className="task-list">
      {tasks
        .filter((task) => (showIncomplete ? task.status !== 1 : true))
        .map((task) => (
          <li key={task.id} className={task.status ? "done" : ""}>
            <span className="label">{task.title}</span>
            <div className="actions">
              <input
                type="checkbox"
                className="btn-action btn-action-done"
                checked={Boolean(task.status)}
                onChange={(e) => setTaskStatus(task.id, e.target.checked)}
              ></input>
              <button
                onClick={() => removeTask(task.id)}
                className="btn-action btn-action-delete"
              >
                ✖
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default TaskList;
