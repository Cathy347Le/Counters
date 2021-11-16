import React from "react";

const NavBar = (props) => {
  // console.log("props", props);
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand ms-4 h1">
        Navbar
        <span
          style={{ fontSize: 20 }}
          className="badge rounded-pill bg-dark ms-2"
        >
          {props.totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;
