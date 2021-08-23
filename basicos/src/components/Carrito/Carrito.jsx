import React from 'react';
import './style.css';
import Product from '../Product/Product';
const Carrito = (props) => {
    const { carrito, addToCart } = props;
    return (
        <div className="carrito">
            <h2>Mi Carrito</h2>
            {carrito.length === 0
                ? <p className="center">No hay productos en tu carro</p>
                : carrito.map(producto => (
                    <Product
                        key={producto.id}
                        producto={producto}
                        carrito={carrito}
                        addToCart={addToCart}
                    />
                ))}
        </div>
    );
}

export default Carrito;