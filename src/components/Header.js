import React from "react";
import PropTypes from 'prop-types';

const Header = ({ title }) => {

  return (
    <nav className="navbar navbar-light bg-primary" style={{height: "70px"}}>
      <div className="container-fluid">
        <a href="#!" className="navbar-brand mb-0 h1 text-light fs-3 m-auto">{title}</a>
      </div>
    </nav>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Header;
