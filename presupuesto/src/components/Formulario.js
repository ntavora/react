import React, { useState } from 'react';
const Formulario = () => {
    return (
        <form>
            <h2> Agrega tus Gastos aqui</h2>

            <div className="campo">
                <label>Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="EJ. transporte"
                />

            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="EJ. 300"
                />

            </div>
            <input type="submit"
                className=' button-primary u-full-width'
                value="Agregar Gasto" />
        </form>
    );
}

export default Formulario;