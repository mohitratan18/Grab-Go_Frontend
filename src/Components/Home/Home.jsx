// import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      navigate("/login");
    }
  }, [navigate]);
  const data = [
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/289152a.jpg?ts=1684345618",
      name: "Lays",
      price: 10,
      info: "24grams",
    },
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/289152a.jpg?ts=1684345618",
      name: "Lays",
      price: 10,
      info: "24grams",
    },
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/289152a.jpg?ts=1684345618",
      name: "Lays",
      price: 10,
      info: "24grams",
    },
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/289152a.jpg?ts=1684345618",
      name: "Lays",
      price: 10,
      info: "24grams",
    },
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/289152a.jpg?ts=1684345618",
      name: "Lays",
      price: 10,
      info: "24grams",
    },
  ];
  return (
    <div className="Home-container-box">
      <Navbar btn="My cart"/>
      <div className="dummy"></div>
      
      <div className="Home-items-container">
        <h2 className="Home-available-items">Available Items</h2>
        <div className="Home-items">
          {data.map((datas, index) => {
            return <Product {...datas} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
