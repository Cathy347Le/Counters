import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  render() {
    return (
      <div className="counter-item">
        <h3>Counter: {this.formatCount()}</h3>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    );
  }
}

export default Counter;
