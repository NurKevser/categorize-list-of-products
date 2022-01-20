import React from "react";
import { useState } from "react";

const Category = () => {

  let count = 0;
  const[newCategory, setNewCategory] = useState([ {id: 1, baslik: `Category ${count}`}])
    
const handleNewCategory = () => {
  setNewCategory(newCategory)
}

  return (
    <div className="card-container">
      <h3>Category 1</h3>
      <div >
        <i className="far fa-heart"></i>
        <p>Select products to add here.</p>
      </div>
      <div className="actions">
        <div className="actions-products">
          <button>Add Products</button>
          <button>Remove Products</button>
        </div>
        <button>Remove Category</button>
      </div>
      <button onClick={handleNewCategory} >Add Category</button>

      <ul>
        {newCategory.map((item) => (
          <div key={item.id}>

          </div>
        ))}
      </ul>
    </div>
  );
};

export default Category;
