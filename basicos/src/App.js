import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const year = new Date().getFullYear();
  return (
    <>
       <Header title="Tienda Virtual"></Header>
       <Footer year={year}></Footer>
    </>
  );
}

export default App;
