/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Sellerlogin.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
const Sellerlogin = () => {
  const Navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlelogin = async () => {
    const url = `http://localhost:8000/api/auth/seller/login`;
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.status) {
      localStorage.setItem("auth-token",data.authtoken);
      Navigate('/sellerhome');
    } else {
      alert(data.message);
    }
    // console.log(data.authtoken);
  };
  return (
    <div className="sellerlogin-container-box">
      <div className="sellerlogin-container">
        <div className="sellerlogin-container-1">
          <p className="sellerlogin-welcome-heading">Welcome to Grab&Go</p>
          <p className="sellerlogin-welcome-description">
            Discover nearby goods and groceries effortlessly on our website.
            Browse a variety of products from local shops with ease. Reserve
            items for pickup with just a few clicks. Enjoy a convenient shopping
            experience without the hassle. Support local businesses and
            streamline your shopping today!
          </p>
        </div>
        <div className="sellerlogin-container-2">
          <h2 className="sellerlogin-heading">Login as a Seller</h2>
          <input
            className="sellerlogin-input"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            className="sellerlogin-input"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <p>
            Do not have an Seller account?{" "}
            <Link to="/sellersignup" className="sellerhref">
              Create seller account
            </Link>
          </p>
          <button className="sellerlogin-btn" onClick={handlelogin}>
            Login
          </button>
          <p>
            Login as a User/Buyer{" "}
            <Link to="/Login" className="sellerhref">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Sellerlogin;
