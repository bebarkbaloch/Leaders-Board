import React, { Component } from "react";
import "./student.css";
class Student extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      success: false,
      failure: false
    };
  }

  componentDidMount() {
    this.setState({
      score: this.props.score
    });
  }
  autoScore() {
    this.setState(
      {
        score: this.state.score + 1
      },
      () => {
        if (this.state.score >= 350) {
          this.setState({ success: true }) && this.setState({ failure: false });
        } else if (this.state.score < 350) {
          this.setState({ failure: true }) && this.setState({ success: false });
        } else this.setState({ success: false });
      }
    );
  }
  Score() {
    this.setState(
      {
        score: this.state.score - 1
      },
      () => {
        if (this.state.score < 350) {
          this.setState({ failure: true }) && this.setState({ success: false });
        } else if (this.state.score >= 350) {
          this.setState({ success: true }) && this.setState({ failure: false });
        } else this.setState({ failure: false });
      }
    );
  }

  render() {
    const isSuccess = this.state.success;
    const isFailure = this.state.failure;
    let text;
    let text1;
    if (isSuccess && this.state.score >= 350) {
      text = <span>Success</span>;
    } else text = "";
    if (isFailure && this.state.score < 340) {
      text1 = <span>Failure</span>;
    } else text1 = "";
    return (
      <div className="student">
        <div className="left">
          <h2 className="studentname">
            {this.props.name}
            <button className="autoscore" onClick={() => this.autoScore()}>
              +
            </button>

            <button className="divider" onClick={() => this.Score()}>
              -
            </button>
          </h2>
          <p className="universityname">
            {this.props.university}
            {text}
            {text1}
          </p>
        </div>
        <div className="right">
          <div className="score">{this.state.score}</div>
        </div>
      </div>
    );
  }
}

export default Student;
