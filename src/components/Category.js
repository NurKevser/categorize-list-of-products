import React from "react";

const Category = ({ data, addProducts, removeProducts, setNewCategory, count, newCategory, setCount, addNewCategory }) => {

  const removeCategory = (title) => {
    if (newCategory.length > 1) {
      setCount(count - 1)
      const categor = newCategory.filter(item => item.title !== title)
      setNewCategory(categor)
      removeProducts(title)
    }
  }

  return (
    <div className="category">
      {newCategory.map((item, i) => (
        <div className="card mb-3" key={item.id}>
          <div className="card-header">
            <h3 className="">{item.title} </h3>
          </div>
          <div className="card-body">
            <div className="d-flex flex-column align-items-center my-3">

              {data && data.hasOwnProperty(`${item.title}`) && data[`${item.title}`].length > 0 ? data[`${item.title}`].map(d => {
                return <div key={d.id}> {d.title} </div>
              }) : <div className="card-body__content" ><i className="far fa-heart mb-3"></i><p className="">Select products to add here.</p></div>}
            </div>
            <div className="actions d-flex justify-content-between mt-5">
              <div className="actions-products">
                <button className="btn "
                  onClick={() => addProducts(item.title)}>Add Products</button>
                <button className="btn "
                  onClick={() => removeProducts(item.title)}>Remove Products</button>

              </div>
              <button className="btn"
                onClick={() => removeCategory(item.title)}>Remove Category</button>

            </div>
          </div>
        </div>
      ))}
      <button className="btn addCat
          btn-lg btn-primary w-100"
        onClick={addNewCategory}>Add Category</button>
    </div>
  );
};

export default Category;