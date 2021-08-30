import React, { Fragment, useState } from "react";
import Formulario from "./components/formulario";
function App() {
  //listado de citas
  const [citas,guardarCitas] = useState([]);

  const crearCita = cita =>{
    guardarCitas([
      ...citas,
      cita
    ]);
  }
  return (
    <Fragment>
      <h1>Administrador de contenido</h1>
      <div className="container">
        <div className="row">
        <div className="one-half column"> 
            <Formulario
            crearCita={crearCita}/>
         </div>
        <div className="one-half column"> 
        
        </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
