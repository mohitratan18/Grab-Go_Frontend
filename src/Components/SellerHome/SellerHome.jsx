// import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SellerHome.css";
import Navbar from "../Navbar/Navbar";
import SellerProducts from "../SellerProducts/SellerProducts";
import Additems from "../../Additems/Additems";
const SellerHome = () => {
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
  const handleclose = () => {
    // eslint-disable-next-line no-undef
    addItemPopup.close();
  };
    
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      navigate("/sellerlogin");
    }
  }, [navigate]);
  
  return (
    <div className="SellerHome-container-box">
      <Navbar btn="Add Items" />
      <div className="dummy"></div>

      <div className="SellerHome-container">
        <div className="SellerHome-container-items">
          {data.map((datas, index) => {
            return <SellerProducts {...datas} key={index} />;
          })}
        </div>
      </div>

      <dialog id="addItemPopup" className="SellerHome-popup">
        <button className="SellerHome-popup-close" onClick={handleclose}>
          X
        </button>
        <Additems />
      </dialog>
    </div>
  );
};

export default SellerHome;
