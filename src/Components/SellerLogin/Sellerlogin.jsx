// import React from 'react'
import './Sellerlogin.css'
import { Outlet, Link } from "react-router-dom";
const Sellerlogin = () => {
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
          <input className="sellerlogin-input" type="email" placeholder="Email" />
          <input className="sellerlogin-input" type="password" placeholder="Password"/>
          <p>
            Do not have an Seller account? <Link to="/sellersignup" className='sellerhref'>Create seller account</Link>
          </p>
          <button className="sellerlogin-btn">Login</button>
          <p>Login as a User/Buyer <Link to='/Login' className='sellerhref'>Login</Link></p>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Sellerlogin
