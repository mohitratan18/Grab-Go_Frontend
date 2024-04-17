// import {React} from 'react';
import "./Signup.css";
import { Outlet, Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="container-box">
      <div className="container">
        <div className="container-1">
          <p className="welcome-heading">Welcome to Grab & Go</p>
          <p className="welcome-description">
            Discover nearby goods and groceries effortlessly on our website.
            Browse a variety of products from local shops with ease. Reserve
            items for pickup with just a few clicks. Enjoy a convenient shopping
            experience without the hassle. Support local businesses and
            streamline your shopping today!
          </p>
        </div>
        <div className="container-2">
          <h2 className="signup-heading">Signup</h2>
          <input className="input" type="text" placeholder="Name" />
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <p>
            Have an account ? <Link to="/Login">Login</Link>
          </p>
          <button className="btn">Signup</button>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default Signup;
