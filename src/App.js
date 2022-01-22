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


  // const onSelectItem = (id, add) => {
  //   let data = products.find(item => item.id === id)
  //   if (add) setSelection(item => item.push(data))
  //   else {
  //     const ind = selection.findIndex(item => item.id === id)
  //     const select = selection.splice(select, 0)
  //     setSelection(select)
  //   }
  // }

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
    console.log("cat name", categoryName);
    let d = {...data, [categoryName]: selectedProducts }
    console.log("what d",d)
    setData(d)
    
  }
   const removeProducts = (categoryName) => {
    let d = {...data, [categoryName]: [] }
    console.log("new d",d)
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