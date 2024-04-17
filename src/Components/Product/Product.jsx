// import React from 'react'
import "./Product.css";
const Product = (props) => {
  // eslint-disable-next-line react/prop-types
  const { img, name, price, info } = props;
  return (
    <div className="Product-container">
      <div className="Product-img">
        <img src={img} alt="image" />
      </div>
      <div className="Product-details">
        <div className="Product-name">
          <span>{name}</span>
        </div>
        <div className="Product-info">
          <span>{info}</span>
        </div>
        <div className="Product-addcontainer">
          <div className="Product-price">
            <span>₹ {price}</span>
          </div>
          <button className="Product-addbtn">ADD</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
