import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {

    const {onDelete, onIncrement, onReset } = this.props;

    return (
      <div>
        <button onClick={() => onReset()} className="btn btn-secondary btn-sm m-2">Reset</button>

        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          >
            <h1>Counter-{counter.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
