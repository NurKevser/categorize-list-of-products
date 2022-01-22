import React from "react";
import { useState } from "react";

const Category = ({data, addProducts, removeProducts}) => {

  const [count, setCount] = useState(1);
  const [newCategory, setNewCategory] = useState([
    { id: 1, title: `Category ${count}` },
  ]);

  const addNewCategory = () => {
    const category = { id: count + 1, title: `Category ${count + 1}` }
    setCount(count + 1);
    setNewCategory([...newCategory, category]);
  };
  const removeCategory = () => {
    
    setCount(count - 1)
  }


  return (
    <div className="">
      {newCategory.map((item, i) => (
        <div className="card mb-3" key={item.id}>
          <div className="card-header">
            <h3 className="">{item.title} </h3>
          </div>
          <div className="card-body">
            <div className="d-flex flex-column align-items-center my-3">
              <i className="far fa-heart mb-3"></i>
              {data && data.hasOwnProperty(`${item.title}`) && data[`${item.title}`].length === 0 && <p className="">Select products to add here.</p>}
              {data && data.hasOwnProperty(`${item.title}`) && data[`${item.title}`].length > 0 && data[`${item.title}`].map(d => {
                return <div key={d.id}> {d.title} </div>
              })}
            </div>
            <div className="actions d-flex justify-content-between mt-5">
              <div className="actions-products">
                <button className="btn" 
                onClick={() => addProducts(item.title)}>Add Products</button>
                <button className="btn"
                onClick={() => removeProducts(item.title)}>Remove Products</button>
                
              </div>
              <button className="btn"
              onClick={() => removeCategory()}>Remove Category</button>
              
            </div>
          </div>
        </div>
      ))}
      <button className="btn
          btn-lg btn-primary w-100"
        onClick={addNewCategory}>Add Category</button>
    </div>
  );
};

export default Category;