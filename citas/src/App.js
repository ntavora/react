import React, { Fragment, useState } from "react";
import Formulario from "./components/formulario";
import Cita from "./components/cita";
function App() {
  //listado de citas
  const [citas, guardarCitas] = useState([]);

  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
    console.log(citas);
  }
  return (
    <Fragment>
      <h1>Administrador de contenido</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>Listado de citas</h2>
            {citas.map(cita =>
              (<Cita
               key={cita.id}
               cita={cita}/>)
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
