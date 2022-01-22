import React from 'react';

const Review = ({products,newCategory,data}) => {

  return <div className='total'>
    <h4 className='review'>
  Review
    </h4>
    <div className='total-products'>
<div>Available Products : {products.length}</div>
<div>Categories : {newCategory.length}</div>
    </div>
    <div className='total-categories'>
    <div>{newCategory.map(item => (
      <p>{item.title} : {data.hasOwnProperty(item.title)  ?data[`${item.title}`].length > 0 : 0} products</p>
    ))} </div>
    </div>
  </div>;
};

export default Review;
