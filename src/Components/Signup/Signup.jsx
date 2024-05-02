/* eslint-disable no-unused-vars */
import {React,useState} from 'react';
import "./Signup.css";
import { Outlet, Link ,useNavigate} from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phoneno, setphoneno] = useState("");

  const handleSignup = async () => {
    const url = "http://localhost:8000/api/auth/user/signup";
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name,email, password,phoneno}),
    });
    const res = await response.json();
    // console.log(await response.json());
    if (res.status == true) {
      // localStorage.setItem("auth-token", res.authtoken);
      alert("Account created. please login");
      navigate("/login");
    } else {
      alert(res.message);
    }
  };
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
          <input className="input" type="text" placeholder="Name" onChange={(e)=>{setname(e.target.value)}}/>
          <input className="input" type="email" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}/>
          <input className="input" type="email" placeholder="phone number" onChange={(e)=>{setphoneno(e.target.value)}}/>
          <input className="input" type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/>
          <p>
            Have an account ? <Link to="/Login">Login</Link>
          </p>
          <button className="btn" onClick={handleSignup}>Signup</button>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default Signup;
