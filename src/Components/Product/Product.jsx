/* eslint-disable no-unused-vars */
// import React from 'react'
import "./Product.css";
const Product = (props) => {
  const handleAdd = async()=>{
    const data = {
      "productID": _id,
    }
    const url = `http://localhost:8000/api/userfunctions/additems/list`;
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify(data)
      });
      const res = await response.json();
      
      alert(res.message);
  }
  // eslint-disable-next-line react/prop-types
  const { img, name, price, info, _id} = props;
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
          <button className="Product-addbtn" onClick={handleAdd}>ADD</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
