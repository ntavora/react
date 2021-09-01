import { Fragment, useState } from 'react';
import Header from "./components/Header/Header";
import FooterComponent from "./components/Footer";
import Product from './components/Product/Product';
import Carrito from './components/Carrito/Carrito';
import EvergageSiteMap from './components/EvergageSiteMap';
function App() {
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Jugo Ades', precio: 140 },
    { id: 2, nombre: 'Jugo Baggio', precio: 115 },
    { id: 3, nombre: 'Exprimido de naranja', precio: 140 },
    { id: 4, nombre: 'Jugo Tang', precio: 115 },
    { id: 5, nombre: 'Mirinda', precio: 140 },
    { id: 6, nombre: 'Fanta', precio: 115 },
  ]);
  
  const sitemap = {
    global: {
        onActionEvent: (actionEvent:any) => {
            const email = window.Evergage.util.getValueFromNestedObject("window._etmc.user_info.email");
            if (email) {
                actionEvent.user = actionEvent.user || {};
                actionEvent.user.attributes = actionEvent.user.attributes || {};
                actionEvent.user.attributes.emailAddress = email;
            }
            return actionEvent;
        },
        contentZones: [
            { name: "global_infobar_top_of_page", selector: "header.site-header" },
            { name: "global_infobar_bottom_of_page", selector: "footer.site-footer" }
        ],
        listeners: [
        ],
    },
    pageTypeDefault: {
        name: "default"
    },
    pageTypes: [
        {
            name: "product_detail",
            isMatch: () => {
                return window.location.href.indexOf("http://localhost:3000/") > 0 ? true : false;
            },           
            contentZones: [
                { name: "product_detail_recs_row_1", selector: ".row.recommendations div[id*='cq']:nth-of-type(1)" },
                { name: "product_detail_recs_row_2", selector: ".row.recommendations div[id*='cq']:nth-of-type(2)" },
                { name: "testHeader", selector: ".site-header"},
            ],
            listeners: [
                            
            ],
        },        
    ]
};
  
  const year = new Date().getFullYear();

  const [carrito, addToCart] = useState([]);
  return (
    <Fragment>
      <EvergageSiteMap
        account="liderdomicilio"
        dataset="pruebas"
        cookieDomain="lider.cl"
        sitemap={sitemap}
      />
      <Header title="Tienda Virtual"></Header>

      <h1>Listado de productos</h1>
      <div className="container">
        {productos.map(producto => (
          <Product
            key={producto.id}
            producto={producto}
            carrito={carrito}
            productos={productos}
            addToCart={addToCart}
            guardarProductos={guardarProductos}
          />

        ))}
      </div>

      <Carrito
        carrito={carrito}
        addToCart={addToCart}
      />
      {<FooterComponent year={year}></FooterComponent>}
    </Fragment>
  );
}


export default App;
