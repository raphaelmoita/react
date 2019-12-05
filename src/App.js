import React, { Component } from "react";
import NavBar from "./component/navbar";
import "./App.css";
import Counters from "./component/counters";

class App extends Component {
  state = { };

  // First life cicle hook
  constructor() {
    super()

    console.log("App Construct - first life cicle hook");
    this.state = {counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]};
  }



  componentDidMount() {
      console.log("App Mounted - third life cicle hook");
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value =0;
      return c;
    });

    this.setState({ counters });
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
    console.log("App rendering - second life cicle hook");
    return (
      <React.Fragment>
        <NavBar totalConters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
