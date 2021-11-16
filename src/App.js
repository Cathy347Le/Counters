import React, { Component } from "react";
import CounterList from "./Components/CounterList";
import NavBar from "./Components/NavBar";
import "./App.css";

class App extends Component {
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

  //Use map method to make all the counter values be 0
  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleStateOver = () => {
    window.location.reload();
    // console.log("Start Over Again");
  };

  handleDelete = (counterId) => {
    const newCounters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: newCounters });
    // console.log("Counter deleted", counterId);
  };

  render() {
    return (
      <div className="counters-main-container">
        {/* <NavBar totalCounters={this.state.counters.length} /> */}
        <NavBar
          totalCounters={
            this.state.counters.filter((counter) => counter.value !== 0).length
          }
        />
        <CounterList
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
          onStateOver={this.handleStateOver}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
