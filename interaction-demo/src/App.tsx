import EvergageScript from './components/EvergageScript';
import Product from 'components/ProductPages';

function App() {
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Jugo Ades', precio: 140 },
    { id: 2, nombre: 'Jugo Baggio', precio: 115 },
    { id: 3, nombre: 'Exprimido de naranja', precio: 140 },
    { id: 4, nombre: 'Jugo Tang', precio: 115 },
    { id: 5, nombre: 'Mirinda', precio: 140 },
    { id: 6, nombre: 'Fanta', precio: 115 },
  ]);
  const [carrito, addToCart] = useState([]);
  return (
    <>
      <EvergageScript
        account="partnerdevsus"
        dataset="ntavora"
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
          />

        ))}
      </div>

      <Carrito
        carrito={carrito}
        addToCart={addToCart}
      />
      {<FooterComponent year={year}></FooterComponent>}
    </>
  );
}

export default App;
