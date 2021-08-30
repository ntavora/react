import React, { useState } from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from './components/Formulario';
function App() {

  const [presupuesto, gardarPresupuesto] = useState(0);
  const [restante, gardarRestante] = useState(0);
  const [mostrarPregunta, gardarMostrarPregunta] = useState(true);
  return (
    <div className="container">
      <div className="header">
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ?
            (
              <Pregunta
                gardarPresupuesto={gardarPresupuesto}
                gardarRestante={gardarRestante}
                gardarMostrarPregunta={gardarMostrarPregunta} />
            )
            : (
              <div className="row">
                <div className="one-half column">
                  <Formulario />
                </div>
                <div className="one-half column">
                  2
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
