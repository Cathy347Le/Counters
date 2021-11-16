import React, { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 5 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    };
  }

  //Update State, but DO NOT update the state directly. Create a new counters array and pass it into the setState method and have React update the state
  //Need to clone the counter and the given location so we have a diff object then the one in the state. You don't need to clone the other counters, just the one you want to change.
  handleIncrement = (counter) => {
    // console.log(this.state.counters);
    //Clone the state counter array, must be called counters
    const counters = [...this.state.counters];
    //Capture the index of the targeted counter in the counters array
    const index = counters.indexOf(counter);
    //Capturing the targeted cloned counter via index
    counters[index] = { ...counter };
    //Incrementing the targeted cloned counter
    counters[index].value++;
    //passing the newCounters array to the setState method
    this.setState({ counters });
    // console.log(counters);
  };

  handleDecrement = (counter) => {
    // console.log(this.state.counters);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
    // console.log(counters);
  };

  handleDelete = (counterId) => {
    const newCounters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: newCounters });
    console.log("Counter deleted", counterId);
  };
  render() {
    return (
      <div className="counters-container">
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default CounterList;
