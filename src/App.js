import axios from "axios";
import { useState, useEffect } from "react";
import "./App.scss";
import Categorize from "./components/Categorize";
import Category from "./components/Category";


function App() {

  const [products, setProducts] = useState([]);

  const initilaizeProduct = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log({ error }));
  };
  useEffect(() => {
    initilaizeProduct();
  }, []);

  const [data, setData] = useState({})

  // const onSelectItem = (id, add) => {
  //   let data = products.find(item => item.id === id)
  //   if (add) setSelection(item => item.push(data))
  //   else {
  //     const ind = selection.findIndex(item => item.id === id)
  //     const select = selection.splice(select, 0)
  //     setSelection(select)
  //   }
  // }

  const [selectedProducts, setSelectedProducts] = useState([]);

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

  console.log("selectedPRODUCTS", selectedProducts);

  const addProducts = (categoryName) => {
    let d = {...data, [categoryName]: selectedProducts }
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
            data={data} />
        </div>
      </div>
    </div>
  );
}
export default App;