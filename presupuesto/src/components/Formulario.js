import React, { useState } from 'react';
const Formulario = () => {
    const [nombre, gardarNombre] = useState('');
    const [cantidad, gardarCantidad] = useState(0);
    const [error, gardarError] = useState(false);
    const agregarGasto = e =>{
        e.preventDefault();
    }

    return (
        <form
            onSubmit={agregarGasto}>
            <h2> Agrega tus Gastos aqui</h2>

            <div className="campo">
                <label>Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="EJ. transporte"
                    onChange={e => gardarCantidad(parseInt(e.target.value, 10))}
                    value={nombre}
                />

            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="EJ. 300"
                    value={cantidad}
                    onChange={e => gardarNombre(e.target.value)}
                />

            </div>
            <input type="submit"
                className=' button-primary u-full-width'
                value="Agregar Gasto" />
        </form>
    );
}

export default Formulario;