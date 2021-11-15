import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
  }

  badgeStyles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let badgeClasses = "badge ms-2 bg-";
    badgeClasses += this.state.value === 0 ? "secondary" : "info";
    return badgeClasses;
  }

  increaseCount = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decreaseCount = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    // console.log("props", this.props);
    return (
      <div className="counter-item m-4">
        <h3 className="d-flex justify-content-center">
          Counter:
          <span style={this.badgeStyles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </h3>
        <button
          className="btn btn-success btn-sm m-2"
          onClick={this.increaseCount}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={this.decreaseCount}
        >
          Decrement
        </button>
        <button className="btn btn-warning btn-sm m-2">Delete</button>
      </div>
    );
  }
}

export default Counter;
