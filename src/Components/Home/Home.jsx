/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import React from "react";
import { useEffect , useState } from "react";
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
    fetchadata();
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
  return (
    <div className="Home-container-box">
      <Navbar btn="My List" />
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
