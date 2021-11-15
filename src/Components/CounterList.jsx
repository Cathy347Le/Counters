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

  handleDelete = (counterId) => {
    console.log("Event recorded", counterId);
  };
  render() {
    return (
      <div className="counters-container">
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default CounterList;
