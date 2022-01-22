import axios from "axios";
import { useState, useEffect } from "react";
import "./App.scss";
import Categorize from "./components/Categorize";
import Category from "./components/Category";


function App() {

  const [products, setProducts] = useState([]);
  const [data, setData] = useState({})
  const [selectedProducts, setSelectedProducts] = useState([]);

  const initilaizeProduct = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log({ error }));
  };
  useEffect(() => {
    initilaizeProduct();
  }, []);


  const handleProduct = (pro) => {
    const filterProducts = products.filter((m) => m.id !== pro.id);
    const filteredThisProduct = { ...pro, isCheck: !pro.isCheck }
    setProducts([filteredThisProduct, ...filterProducts])
  };

  useEffect(() => {
    if (products) {
      products.forEach((item) => {
        item["isCheck"] = false;
      });
    }
  }, []);

  useEffect(() => {
    const filterProducts = products.filter((m) => m.isCheck === true);
    setSelectedProducts(filterProducts);
  }, [products]);


  const addProducts = (categoryName) => {
    let d;
    if(data[categoryName]) d = { ...data, [categoryName]: [ ...data[categoryName], ...selectedProducts] }
    else d={ ...data, [categoryName]: selectedProducts }
    let ids =  selectedProducts.map(selected => selected.id)
    const pr = products.filter(product => !ids.includes(product.id))
    setProducts(pr)
    setData(d)
  }

  const removeProducts = (categoryName) => {
    let d = { ...data, [categoryName]: [] }
    const prod = [...data[categoryName], ...products]
    setProducts(prod)
    setData(d)
  }

  


  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Categorize
            products={products}
            setProducts={setProducts}
            handleProduct={handleProduct} />
        </div>
        <div className="col-6">
          <Category
            addProducts={addProducts}
            removeProducts={removeProducts}
            data={data} />
        </div>
      </div>
    </div>
  );
}
export default App;