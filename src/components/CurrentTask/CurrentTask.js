import React from "react";
import "./CurrentTask.css";
const currentTask = props => (
  <div className="DisplayTasks">
    <div className="CurrentTask">
      {props.task}
      <div
        onClick={props.handleDeleteTask.bind(this)}
        className="deleteIcon Block"
      >
        X
      </div>
    </div>
  </div>
);

export default currentTask;
