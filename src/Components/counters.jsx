import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div className="counter-item">
        <h3>Counter: {this.state.count}</h3>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    );
  }
}

export default Counter;
