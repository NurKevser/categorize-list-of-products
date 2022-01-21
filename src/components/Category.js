import React from "react";
import { useState } from "react";

const Category = () => {
  const [count, setCount] = useState(1);
  const [newCategory, setNewCategory] = useState([
    { id: 1, title: `Category ${count}` },
  ]);

  const addNewCategory = () => {
    const category = {id: count + 1, title: `Category ${count + 1}` }
    setCount(count + 1);
    setNewCategory([...newCategory, category]);
  };

  return (
    <div className="card-container">
      <button onClick={addNewCategory}>Add Category</button>

        {newCategory.map((item, i) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <div>
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
          </div>
        ))}
    </div>
  );
};

export default Category;
