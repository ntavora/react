import React from 'react';
const Product = ({ producto }) => {

    const selectProduct = id =>{
        console.log(`comprando ${id}`);
    }
    return (<div>
        <h4>Nombre:<b>{producto.nombre}</b></h4>
        <h4>Precio:<b>{producto.precio}</b></h4>
        <button
            type="button"
            onClick={() => selectProduct(producto.id)}>
Comprar
        </button>
    </div>);
}

export default Product;