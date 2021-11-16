import React, { Component } from "react";

class NavBar extends Component {
  render() {
    console.log("props", this.props);
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand ms-4 h1">
          Navbar
          <span
            style={{ fontSize: 20 }}
            className="badge rounded-pill bg-dark ms-2"
          >
            {this.props.totalCounters}
          </span>
        </span>
      </nav>
    );
  }
}

export default NavBar;
