import React, { Component } from "react";
import "./MyTasks.css";
import MyTask from "./MyTask/MyTask";
class MyTasks extends Component {
  constructor() {
    super();
    this.state = {
      reminder: "",
      toggleTasks: false
    };
  }
  handleToggleTask(currentReminder) {
    var toggleTasks = !this.state.toggleTasks;
    var reminder = "";
    if (toggleTasks) {
      reminder = currentReminder;
    }
    this.setState({
      reminder: reminder,
      toggleTasks: toggleTasks
    });
  }
  handleDeleteTask(index) {
    this.props.handleDeleteTask(this.state.reminder, index);
  }
  render() {
    let tasks = { Today: [], Tomorrow: [], Someday: [] };
    let currentReminder = this.state.reminder;
    if (currentReminder !== "") {
      tasks[currentReminder] = this.props.tasks[currentReminder];
    }
    return (
      <div className="MyTasks">
        <strong>
          {this.props.list}
          <div className="Card">
            <div className="Tasks">
              <div onClick={this.handleToggleTask.bind(this, "Today")}>
                Today
              </div>
              <MyTask
                handleDeleteTask={this.handleDeleteTask.bind(this)}
                myTasks={tasks["Today"]}
              />
            </div>
            <div className="Tasks">
              <div onClick={this.handleToggleTask.bind(this, "Tomorrow")}>
                Tomorrow
              </div>
              <MyTask
                handleDeleteTask={this.handleDeleteTask.bind(this)}
                myTasks={tasks["Tomorrow"]}
              />
            </div>
            <div className="Tasks">
              <div onClick={this.handleToggleTask.bind(this, "Someday")}>
                Someday
              </div>
              <MyTask
                handleDeleteTask={this.handleDeleteTask.bind(this)}
                myTasks={tasks["Someday"]}
              />
            </div>
          </div>
        </strong>
      </div>
    );
  }
}

export default MyTasks;
