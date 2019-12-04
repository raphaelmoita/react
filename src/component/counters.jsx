import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    // it is possible to pass the whole counter object as property and
    // recover it as, for example, this.props.counter.id
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
    // or, since attributes have the same name, just like: this.setState({ counters })
  };

  handleIncrement = counter => {
    // clone array
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter); // {id: ?, value: ? }
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}>
            <h1>Counter-{counter.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
