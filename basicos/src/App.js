import React, { Fragment,useState } from 'react';
import Header from "./components/Header";
import FooterComponent from "./components/Footer";
import Product from './components/Product';
function App() {
   const [productos, guardarProductos] = useState([
     {id:1, nombre:'Ades', precio:140},
     {id:1, nombre:'Jugo Baggio', precio:115},
   ]);
  const year = new Date().getFullYear();
  return (
    <Fragment>
      <Header title="Tienda Virtual"></Header>
    
      <h1>Listado de productos</h1>
      {productos.map(producto => (
        <Product producto={producto}></Product>
      )) }
      { <FooterComponent year={year}></FooterComponent> }
    </Fragment>
  );
}

export default App;
