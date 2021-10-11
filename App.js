import "./styles.css";

import React, { Component } from "react";
import Student from "./components/Student";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="leaderboardheading"> Leaders Board</h1>
        <h2 className="Name">Name</h2>
        <h2 className="Score">Score</h2>
        <Student name="Bebark" university="SSUET" score={347} />
        <Student name="Osama" university="FAST" score={345} />
        <Student name="Saad" university="NUST" score={343} />
        <Student name="Farooq" university="Iqra University" score={340} />
      </div>
    );
  }
}

export default App;
