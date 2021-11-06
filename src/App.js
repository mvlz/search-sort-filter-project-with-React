import "./App.css";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/NavBar/NavBar";
import ProductList from "./components/ProductList/ProductList.jsx";
import ProductProvider from "./providers/ProductProvider";

function App() {
  return (
    <div className="container">
      <ProductProvider>
        <Navbar />
        <div className="wrapper">
          <div className="main-content">
            <Filter />
            <ProductList />
          </div>
        </div>
      </ProductProvider>
    </div>
  );
}

export default App;
