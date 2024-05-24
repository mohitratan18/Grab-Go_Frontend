/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";
import Additems from "../../Additems/Additems";
import MyList from "../MyList/MyList";
const Home = () => {
  const [address, setaddress] = useState("")
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      navigate("/login");
    }
    fetchadata();
    fetchuser();
    console.log("hello");
  }, [navigate]);
  const [data, setdata] = useState([]);
  const fetchadata = async () => {
    try {
      const url = `http://localhost:8000/api/adminfunctions/fetchitems`;
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      });
      setdata(await response.json());
    } catch (error) {
      console.log(error);
    }
  };
  const fetchuser = async () => {
    try {
      const url = `http://localhost:8000/api/userfunctions/details`;
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      });
      const u = await response.json();
      console.log(u);
      setaddress(u.address);
    } catch (error) {console.log(error);}
  };
  const handleclose = () => {
    MylistPopup.close();
  };
  return (
    <div className="Home-container-box">
      {console.log(address)}
      <Navbar btn="My List" user="cust" address={address} />
      <div className="dummy"></div>

      <div className="Home-items-container">
        <h2 className="Home-available-items">Available Items</h2>
        <div className="Home-items">
          {data.map((datas, index) => {
            // console.log(datas);
            return <Product {...datas} key={index} />;
          })}
        </div>
      </div>

      <dialog id="MylistPopup" className="UserHome-popup">
        <button className="UserHome-popup-close" onClick={handleclose}>
          X
        </button>
        <MyList />
      </dialog>
    </div>
  );
};

export default Home;
