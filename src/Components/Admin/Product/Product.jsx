/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'
import "./Product.css";
const Product = ({ data,approve }) => {
  // const approve = data.approve;
  const HandleBtnClick = async()=>{
    console.log(approve)
    if(approve){
      const id = data._id;
      console.log("approved product ",id);
    }
    else{
      const id = data._id;
      const url = `http://localhost:8000/api/adminfunctions/approve/${id}`;
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log("unapproved"," ",id);
    }
  }
  return (
    <div className="Product-container">
      <div className="Product-img">
        <img src={data.img} alt="" />
      </div>
      <div className="Product-name">{data.name}</div>{" "}
      <div className="Product-box1">
        <div className="Product-description">{data.product_description}</div>
        <div className="Product-price">{data.price}</div>
      </div>
      <div className="Product-box2">
        <button className="Product-btn" onClick={HandleBtnClick}>{approve?"Edit":"Approve"}</button>
        <button className="Product-btn">Delete</button>
      </div>
    </div>
  );
};

export default Product;
