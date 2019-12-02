import React, { Component } from "react";

class Hey extends Component {
  state = {
    message: "WARNING",
    options: ["Option-1", "Option-2", "Option-3"]
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold"
  };

  // it is being called by instance, not by method
  handlerIncrement = () => {
    console.log("Increment clicked");
    this.setState({ message: (this.state.message = "DANGER") });
  };

  // code inside is not javascript, it is jxs
  render() {
    return (
      <React.Fragment>
        <span className={this.createMessage()}>{this.wrapperIt()}</span>
        <h2> =8-) </h2>
        <ul>
          {this.state.options.length === 0 && <p>No Options available!</p>}
          {this.state.options.map(option => (
            <li key={option}>{option}</li>
          ))}
          <button
            onClick={this.handlerIncrement}
            className="btn btn-secondary btn-sm"
          >
            Danger
          </button>
          <button
            onClick={() =>
              this.setState({ message: (this.state.message = "WARNING") })
            }
            className="btn btn-secondary btn-sm"
          >
            Warning
          </button>
          <button
            onClick={() =>
              this.setState({ message: (this.state.message = "SUCCESS") })
            }
            className="btn btn-secondary btn-sm"
          >
            Success
          </button>
        </ul>
      </React.Fragment>
    );
  }

  // inside method is possible to use vanilla javascript
  createMessage() {
    const { message } = this.state; // object destructuring!
    let classes = "badge ";

    if (message === "SUCCESS") {
      classes += "badge-success";
    } else if (message === "WARNING") {
      classes += "badge-warning";
    } else {
      // ERROR
      classes += "badge-danger";
    }
    return classes;
  }

  wrapperIt() {
    const { message } = this.state; // object destructuring!
    return message;
  }
}

export default Hey;
