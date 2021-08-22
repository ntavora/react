import React,{useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
function App() {
  const [ products, setProducts] = useState([
    { id:1,
      nombre: 'camisa',
      precio: 40
    },
    { id:2,
      nombre: 'pantalon',
      precio: 80
    },
    { id:3,
      nombre: 'remera',
      precio: 60
    }
  ]);
  setProducts( { id:4,
    nombre: 'remera',
    precio: 60
  })
  const year = new Date().getFullYear();
  return (
    <>
       <Header title="Tienda Virtual"></Header>
       <h1>Products</h1>
       {products.map(product=>{
          return <Product product={product}/>
       })}
       <Footer year={year}></Footer>
    </>
  );
}

export default App;
