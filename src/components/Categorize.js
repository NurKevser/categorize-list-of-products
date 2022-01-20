import React, { useState } from "react";
import "../styles/categorize.scss";
const Categorize = ({products, setProducts }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleProduct = (pro) => {
      const updatedProducts = {...pro, "isCheck" : true}
      setSelectedProducts([...selectedProducts, updatedProducts]);
  };
  console.log(selectedProducts);
  return (
    <div className="container">
      {products.map((pro) => (
        <div key={pro.id} className="product">
          <input
            onChange={() => handleProduct(pro)}
            type="checkbox"
            value={pro.isCheck}
            checked={pro.isCheck}
          />
          <img src={pro.image} alt={pro.title} />
        </div>
      ))}
    </div>
  );
};
export default Categorize;