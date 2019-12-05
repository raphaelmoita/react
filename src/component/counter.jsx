import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log(
        "value has changed from " +
          prevProps.counter.value +
          " to " +
          this.props.counter.value
      );
      // do an Ajax call
    }
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    console.log("Conter will unmount");
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span className="badge badge-success m-2">
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
