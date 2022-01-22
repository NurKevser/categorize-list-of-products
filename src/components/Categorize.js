import React from "react";
import "../styles/categorize.scss";

const Categorize = ({ products, handleProduct }) => {
  

  return (
    <div className="products">
      {products?.map((pro) => (
        <div key={pro.id} className="col-12">
          <input
          className="form-input"
            onChange={() => handleProduct(pro)}
            type="checkbox"
            checked={pro.isCheck}
          />
          <img src={pro.image} alt={pro.title} />
          <p>{pro.title.slice(0, 20)}</p>
        </div>
      ))}
    </div>
  );
};
export default Categorize;