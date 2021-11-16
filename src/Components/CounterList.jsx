import React, { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component {
  render() {
    return (
      <div className="counters-container">
        <button
          onClick={this.props.onStateOver}
          className="btn btn-primary m-4"
        >
          <strong>Start Over</strong>
        </button>
        <button onClick={this.props.onReset} className="btn btn-primary m-4">
          <strong>Reset</strong>
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default CounterList;
