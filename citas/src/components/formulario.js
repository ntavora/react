import React, { Fragment } from "react";

const Formulario = () => {
    return (
        <Fragment>
            <h2>Crear cita</h2>
            <form>
                <label>Nombre de Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                />

                <label>Nombre Duenio</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Duenio de la mascota"
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="Fecha"
                    className="u-full-width"
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="Hora"
                    className="u-full-width"
                />

                <label>Nombre de Mascota</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                ></textarea>

                <button
                 type="submit"
                 className="u-full-width button-primary"> Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;