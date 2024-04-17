// import React from "react";
import './Login.css'
import { Outlet, Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-container-box">
      <div className="login-container">
        <div className="login-container-1">
          <p className="login-welcome-heading">Welcome to Grab&Go</p>
          <p className="login-welcome-description">
            Discover nearby goods and groceries effortlessly on our website.
            Browse a variety of products from local shops with ease. Reserve
            items for pickup with just a few clicks. Enjoy a convenient shopping
            experience without the hassle. Support local businesses and
            streamline your shopping today!
          </p>
        </div>
        <div className="login-container-2">
          <h2 className="login-heading">Login</h2>
          <input className="login-input" type="email" placeholder="Email" />
          <input className="login-input" type="password" placeholder="Password" />
          <p>
            Don t have an account? <Link to="/signup" className='href'>Sign up</Link>
          </p>
          <button className="login-btn">Login</button>
          <p>Login as a Seller?<Link to='/sellerlogin' className='href'>Login</Link></p>
          <p>Are you Admin ? <Link to='/admin' className='href'>Admin</Link></p>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default Login;
