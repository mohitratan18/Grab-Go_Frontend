/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./SellerProducsts.css";
const SellerInventory = (props) => {
  const { productId, quantity } = props;
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetchproduct();
  });
  const fetchproduct = async () => {
    const url = `http://localhost:8000/api/sellerfunctions/fetchitem/${productId}`;
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    // console.log(await response.json());
    setdata(await response.json());
  };
  const handleIncrement = async () => {
    const url = `http://localhost:8000/api/sellerfunctions/items/increment/${productId}`;
    const response = await fetch(url, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    window.location.reload();
  };
  const handleDecremt = async () => {
    const url = `http://localhost:8000/api/sellerfunctions/items/decrement/${productId}`;
    const response = await fetch(url, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    window.location.reload();
  };

  const handleQuantity = async () => {
    let quantity = prompt("Enter The quantity");
    quantity = parseInt(quantity);
    console.log(quantity);
    if (quantity <= 0) {
      const url = `http://localhost:8000/api/sellerfunctions/items/delete/${productId}`;
      const response = await fetch(url, {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      });
      window.location.reload();
    } else {
      const url = `http://localhost:8000/api/sellerfunctions/items/increment/${productId}`;
      const response = await fetch(url, {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ quantity }),
      });
      window.location.reload();
    }
  };
  const { img, name, product_description, price } = data;
  return (
    <div className="Sellerproduct-container-box">
      <div className="Sellerproduct-img-container">
        <img src={img} alt="img" className="Sellerproduct-img" />
      </div>
      <div className="Sellerproduct-details">
        <span className="Sellerproduct-name">{name}</span>

        <div className="Sellerproduct-first-flexbox">
          <span className="Sellerproduct-info">{product_description}</span>
          <div className="Sellerproduct-price">₹ {price}</div>
        </div>
        <div className="Sellerproduct-second-flexbox">
          <button className="Sellerproduct-btn" onClick={handleDecremt}>
            -
          </button>
          <button className="Sellerproduct-btn" onClick={handleQuantity}>
            {quantity}
          </button>
          <button className="Sellerproduct-btn" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerInventory;
