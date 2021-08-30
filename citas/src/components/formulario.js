import React, { Fragment, useState } from "react";
import * as uuid from 'uuid';

const Formulario = ({ crearCita }) => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, actualizarError] = useState(false)
    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    // Envio del formulario

    const submitCita = e => {
        e.preventDefault();
        if (cita.mascota.trim() === '' ||
            cita.propietario.trim() === '' ||
            cita.fecha.trim() === '' ||
            cita.hora.trim() === '' ||
            cita.sintomas.trim() === '') {
            actualizarError(true);
            return;
        } else {
            actualizarError(false);
        }

        cita.id = uuid.v4();
        crearCita(cita);

        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    };


    return (
        <Fragment>
            <h2>Crear cita</h2>
            {error ? <p className="alerta-error">TODOS LOS CAMPOS SON OBLIGATORIOS</p> : null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre de Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={cita.mascota}
                />

                <label>Nombre Duenio</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Duenio de la mascota"
                    onChange={handleChange}
                    value={cita.propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={cita.fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={cita.hora}
                />

                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={cita.sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"> Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;