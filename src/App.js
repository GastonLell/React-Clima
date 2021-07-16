import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Alert from "./components/Alert";

function App() {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const getWeather = async () => {
      if (consultar) {
        
        const apiId = "ea46575b32425cc69e9e99a914c668c0";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

        const respuesta = await fetch(url);

        const resultado = await respuesta.json();

        setResultado(resultado);

        setConsultar(false);

        //detectar si hay algun error en la consulta
        if (resultado.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }

        setSearch({
          city: "",
          country: "",
        });
      }
    };
    getWeather();
      // eslint-disable-next-line
  }, [consultar]);

  return (
    <>
      <Header title="Clima en React App" />
      <div
        className="container-fluid"
        style={{ backgroundColor: "#03a9f4", height: "92.5vh" }}
      >
        <div className="row">
          <div className="col-md-6 h-70">
            <Formulario
              search={search}
              setSearch={setSearch}
              setConsultar={setConsultar}
            />
          </div>
          <div className="col-md-6 py-5 mt-2 h-100 d-flex justify-content-center">
            {error ? (
              <Alert type="warning" message="No hay resultados" />
            ) : (
              <Clima {...resultado} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
