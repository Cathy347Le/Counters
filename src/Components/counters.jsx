import { findByLabelText, findByPlaceholderText } from "@testing-library/dom";
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  badgeStyles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let badgeClasses = "badge ms-2 bg-";
    badgeClasses += this.state.count === 0 ? "secondary" : "info";
    return badgeClasses;
  }

  render() {
    return (
      <div className="counter-item m-4">
        <h3 className="d-flex justify-content-center">
          Counter:
          <span style={this.badgeStyles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </h3>
        <button className="btn btn-success btn-sm m-2">Increment</button>
        <button className="btn btn-danger btn-sm m-2">Decrement</button>
      </div>
    );
  }
}

export default Counter;
