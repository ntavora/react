import React, { Fragment, useState } from "react";

const Formulario = () => {

    const [cita,actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    const handleChange = e =>{
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

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
                    onChange={handleChange}
                />

                <label>Nombre Duenio</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Duenio de la mascota"
                    onChange={handleChange}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                />

                <label>Nombre de Mascota</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                ></textarea>

                <button
                 type="submit"
                 className="u-full-width button-primary"> Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;