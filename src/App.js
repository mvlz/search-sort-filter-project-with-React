import "./App.css";
import Filter from "./components/Filter/Filter";
import Map from "./components/Map/Map";
import Navbar from "./components/NavBar/NavBar";
import ProductList from "./components/ProductList/ProductList.jsx";
import ProductProvider from "./providers/ProductProvider";

function App() {
  return (
    <div className="container">
      <ProductProvider>
        <Navbar />
        <div  className="wrapper">
        <div className="main-content">
          <Filter />
          <ProductList />
        </div>
        <div className="mapContainer">
          <Map />
        </div>
        </div>
        
      </ProductProvider>
    </div>
  );
}

export default App;
