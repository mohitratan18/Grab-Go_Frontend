/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Additems.css";
const Additems = ({ admin }) => {
  const [Name, setName] = useState("");
  const [product_description, setproduct_description] = useState("");
  const [price, setprice] = useState("");
  const [img, setimg] = useState("");
  const [quantity, setquantity] = useState("");
  const Handleclick = async (e) => {
    e.preventDefault();
    if (admin == true) {
      const url = `http://localhost:8000/api/adminfunctions/additems`;
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name:Name,product_description,price,img,approved:true}),
      });
      console.log(await response.json());
      window.location.reload();
    } else {
      console.log("seller");
    }
  };

  return (
    <div className="addItems-container">
      <label htmlFor="name" className="addItems-label">
        Name of the Item
      </label>
      <input
        type="text"
        className="addItems-input"
        name="name"
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="price" className="addItems-label">
        Price{" "}
      </label>
      <input
        type="text"
        className="addItems-input"
        name="price"
        required
        onChange={(e) => {
          setprice(e.target.value);
        }}
      />
      <label htmlFor="quantityinfo" className="addItems-label">
        Quantity of the item
      </label>
      <input
        type="text"
        className="addItems-input"
        name="quantityinfo"
        required
        onChange={(e) => {
          setproduct_description(e.target.value);
        }}
      />
      <label htmlFor="quantity" className="addItems-label">
        Quantity of the items in inventory
      </label>
      <input
        type="text"
        className="addItems-input"
        name="quantity"
        required
        onChange={(e) => {
          setquantity(e.target.value);
        }}
      />
      <label htmlFor="img" className="addItems-label">
        Image url
      </label>
      <input
        type="text"
        className="addItems-input"
        name="img"
        required
        onChange={(e) => {
          setimg(e.target.value);
        }}
      />
      <input type="file" />
      <button className="addItems-btn" onClick={Handleclick}>
        Submit
      </button>
    </div>
  );
};

export default Additems;
