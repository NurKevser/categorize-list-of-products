import axios from "axios";
import { useState, useEffect } from "react";
import "./App.scss";
import Categorize from "./components/Categorize";
import Category from "./components/Category";
function App() {
  const [products, setProducts] = useState([]);
  const initilaizeProduct = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log({ error }));
  };
  useEffect(() => {
    initilaizeProduct();
  }, []);
  
  return (
    <div className="App">
      <Categorize products={products} setProducts={setProducts} />
      <Category products={products} />
    </div>
  );
}
export default App;