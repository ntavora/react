import React from 'react';
const Product = ({ producto }) => {
    return (<div>
        <h4>Nombre:<b>{producto.nombre}</b></h4>
        <h4>Precio:<b>{producto.precio}</b></h4>
    </div>);
}

export default Product;