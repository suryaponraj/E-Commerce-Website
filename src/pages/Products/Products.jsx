import React from 'react';
import './Products.scss';

const Products = () => {
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <input type="text" />
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Products