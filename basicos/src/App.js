import React, { Fragment, useState } from 'react';
import Header from "./components/Header";
import FooterComponent from "./components/Footer";
import Product from './components/Product';
import Carrito from './components/Carrito/Carrito';
function App() {
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Ades', precio: 140 },
    { id: 2, nombre: 'Jugo Baggio', precio: 115 },
    { id: 3, nombre: 'Exprimido de naranja', precio: 140 },
    { id: 4, nombre: 'Jugo Tang', precio: 115 },
    { id: 5, nombre: 'Mirinda', precio: 140 },
    { id: 6, nombre: 'Fanta', precio: 115 },
  ]);
  const year = new Date().getFullYear();

  const [carrito, addToCart] = useState([]);
  return (
    <Fragment>
      <Header title="Tienda Virtual"></Header>

      <h1>Listado de productos</h1>
      {productos.map(producto => (
        <Product
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          addToCart={addToCart}
        />

      ))}
      <Carrito
        carrito={carrito}
      />
      {<FooterComponent year={year}></FooterComponent>}
    </Fragment>
  );
}

export default App;
