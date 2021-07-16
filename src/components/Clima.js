import React from "react";
import PropTypes from 'prop-types';

const Clima = ({ name, main }) => {

  if (!name) return null;

  const calckelvin = 273.15;
  return (
    <div className="row w-100 mh-100">
      <div className="card">

        <div className="card-body">

          <h5 className="card-title text-center p-2">El clima en {name} es:</h5>

          <h2 className="card-subtitle mb-2 text-muted text-center p-2">
            {parseFloat(main.temp - calckelvin, 10).toFixed(2)}
            <span> &#x2103; </span>
          </h2>

          <h6 className="card-subtitle text-center p-2 ">
            Temperatura Máxima
            {parseFloat(main.temp_max - calckelvin, 10).toFixed(2)}{" "}
            <span> &#x2103; </span>
          </h6>


          <h6 className="card-subtitle text-center p-2">
            Temperatura Minima
            {parseFloat(main.temp_min - calckelvin, 10).toFixed(2)}{" "}
            <span> &#x2103; </span>
          </h6>
        </div>
      </div>
    </div>
  );
};

Clima.propTypes = {
  name: PropTypes.string.isRequired,
  main: PropTypes.object.isRequired,
}

export default Clima;
