import React, { useState } from "react";
import PropTypes from 'prop-types';

import MyAlert from "./Alert";

const Formulario = ({ search, setSearch, setConsultar }) => {
  const [error, setError] = useState(false);

  const { city, country } = search;

  const handleChangeSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    setSearch(search);

    setConsultar(true);
  };

  return (
    <>
      <form onSubmit={handleSubmitSearch} className="row g-3 p-4">
        <div className="col-12">
          <label className="form-label">Ciudad:</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleChangeSearch}
            className="form-control"
            id="ciudad"
          />
        </div>
        <div className="col-12">
          <label className="form-label">Pais:</label>
          <select
            id="pais"
            name="country"
            onChange={handleChangeSearch}
            value={country}
            className="form-select"
          >
            <option selected>-- Seleccione el país --</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
        </div>
        <div className="col-12 pt-4">
          <button className="w-100 btn btn-warning" type="submit">
            Enviar
          </button>
        </div>
        {error && (
          <MyAlert message="Debe completar todos los campos" type="danger" />
        )}
      </form>
    </>
  );
};

Formulario.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setConsultar: PropTypes.func.isRequired,
}

export default Formulario;
