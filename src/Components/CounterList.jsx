import React, { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component {
  render() {
    const {
      onStateOver,
      onReset,
      onIncrement,
      onDecrement,
      onDelete,
      counters,
    } = this.props;
    return (
      <div className="counters-container">
        <button onClick={onStateOver} className="btn btn-primary m-4">
          <strong>Start Over</strong>
        </button>
        <button onClick={onReset} className="btn btn-primary m-4">
          <strong>Reset</strong>
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default CounterList;
