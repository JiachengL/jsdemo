import React, { Component } from "react";
import "./App.css";
import StudentList from "./StudentList";
import DeleteStudent from "./DeleteStudent";

class App extends Component {
  render() {
    return (
      <div>
        <StudentList />
      </div>
    );
  }
}

export default App;
