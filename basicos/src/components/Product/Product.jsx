import React from 'react';
import './style.css';
const Product = ({ productos, producto, carrito, addToCart, guardarProductos }) => {
    const { nombre, id, precio } = producto;
    const selectProduct = id => {
        const prod = productos.filter(p => p.id === id)[0];
        addToCart([
            ...carrito,
            prod]);

        console.log(prod.id);
        window.Evergage.sendEvent({
            itemAction: window.Evergage.ItemAction.AddToCart,
            url:window.location.href,
            cart: {
                singleLine: {
                    Product: {
                        sku: {
                            _id: "1049698"
                        },
                        price: 89.990,
                        quantity: 1,
                        _id: "PROD_1049698"
                    }
                }
            }
        });
    }

    const removeFromCart = id => {
        const prod = carrito.filter(p => p.id !== id);
        addToCart(prod);
        console.log(carrito);
    }
    return (<div className="product-container" data-id={id}>
        <h4><b className="product-name">{nombre}</b></h4>
        <h4 >Precio:<b className="product-price">{precio}</b></h4>
        {productos
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