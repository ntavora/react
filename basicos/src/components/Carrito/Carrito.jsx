import React from 'react';
import './carrito.css';
import Product from '../Product';
const Carrito = (props) => {
    const { carrito } = props;
    return (
        <div className="carrito">
            <h2>Mi Carrito</h2>
            {carrito.length === 0
            ? <p>No hay productos en tu carro</p>
            :carrito.map(producto => (<Product
                key={producto.id}
                producto={producto}
            />))}
        </div>
    );
}

export default Carrito;