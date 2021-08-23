import React from 'react';
import './style.css';
const Product = ({ productos, producto, carrito, addToCart }) => {
    const { nombre, id, precio } = producto;
    const selectProduct = id => {
        const prod = productos.filter(p => p.id === id)[0];
        addToCart([
            ...carrito,
            prod]);
        console.log(carrito);
    }

    const removeFromCart = id => {
        const prod = carrito.filter(p => p.id !== id);
        addToCart(prod);
        console.log(carrito);
    }
    return (<div className="product-container">
        <h4><b>{nombre}</b></h4>
        <h4>Precio:<b>{precio}</b></h4>
        {   productos
            ? (
                <button
                    type="button"
                    onClick={() => selectProduct(id)}>
                    Comprar
                </button>
            )
            : (<button
                type="button"
                onClick={() => removeFromCart(id)}>
                Eliminar
            </button>)
        }

    </div>);
}

export default Product;