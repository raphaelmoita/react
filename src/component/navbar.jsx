import React from "react";

// Stateless Functional Component
// const NavBar = ( { totalConters }) => { // example of object destruction
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div>
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalConters} {/* with obejct destruction it is enough to refer {totalConters} */}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
