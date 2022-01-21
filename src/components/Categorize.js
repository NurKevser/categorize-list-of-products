import React, { useState, useEffect } from "react";
import "../styles/categorize.scss";
const Categorize = ({ products, setProducts }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  console.log(products);
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

  console.log(selectedProducts);

  return (
    <div className="container">
      {products?.map((pro) => (
        <div key={pro.id} className="product">
          <input
            onChange={() => handleProduct(pro)}
            type="checkbox"
            checked={pro.isCheck}
          />
          <img src={pro.image} alt={pro.title} />
          {/* <p>{pro.title}</p> */}
        </div>
      ))}
    </div>
  );
};
export default Categorize;