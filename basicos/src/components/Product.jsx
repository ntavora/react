import React from 'react';
const Product = ({ productos, producto, carrito, addToCart }) => {
    const { nombre, id, precio } = producto;
    const selectProduct = id => {
        const prod = productos.filter(p => p.id === id)[0];
        addToCart([
            ...carrito, 
            prod]);
            console.log(carrito);
    }
    return (<div>
        <h4>Nombre:<b>{nombre}</b></h4>
        <h4>Precio:<b>{precio}</b></h4>
        <button
            type="button"
            onClick={() => selectProduct(id)}>
            Comprar
        </button>
    </div>);
}

export default Product;