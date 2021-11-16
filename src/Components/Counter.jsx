import React, { Component } from "react";

class Counter extends Component {
  badgeStyles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let badgeClasses = "badge ms-2 bg-";
    // badgeClasses += this.state.value === 0 ? "secondary" : "info";

    if (this.props.counter.value === 0) {
      badgeClasses += "secondary";
    } else if (this.props.counter.value > 0) {
      badgeClasses += "info";
    } else {
      badgeClasses += "cautious";
    }

    return badgeClasses;
  }

  render() {
    console.log("props", this.props);
    return (
      <div className="counter-item m-4">
        <h3 className="d-flex">
          Counter:
          <span style={this.badgeStyles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </h3>
        <button
          className="btn btn-success btn-sm m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDecrement()}
        >
          Decrement
        </button>
        <button
          className="btn btn-warning btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
