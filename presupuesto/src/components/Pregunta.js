import React, { Fragment, useState } from 'react';
import Error from './Error';
const Pregunta = ({gardarRestante, gardarPresupuesto, gardarMostrarPregunta}) => {
    //state
    const [cantidad, gardarCantidad] = useState(0);
    const [error, gardarError] = useState(false);
    const handleChange = e => {
        gardarCantidad(parseInt(e.target.value, 10));
    }
    //submit
    const agregarPresupuesto = e => {
        e.preventDefault();
        if (cantidad < 1 || isNaN(cantidad)) {
            gardarError(true);
            return;
        } else {
            gardarError(false);
        }

        gardarPresupuesto(cantidad);
        gardarRestante(cantidad);
        gardarMostrarPregunta(false);
    }

    return (
        <Fragment>
            <h2> Coloca tu presupuesto</h2>
            {error ? <Error
                mensaje="El presupuesto es incorrecto"
            /> : null}
            <form
                onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;