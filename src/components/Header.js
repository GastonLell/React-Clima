import React from "react";

const Header = ({ title }) => {

  return (
    <nav className="navbar navbar-light bg-primary" style={{height: "70px"}}>
      <div className="container-fluid">
        <a href="#!" className="navbar-brand mb-0 h1 text-light fs-3 m-auto">{title}</a>
      </div>
    </nav>
  );
};

export default Header;
