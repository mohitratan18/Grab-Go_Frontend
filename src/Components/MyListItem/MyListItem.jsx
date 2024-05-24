/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import React from "react";
import "./MyListItem.css";
import NearByStore from "../NearByStore/NearByStore";
const MyListItem = ({ id,setshoplist,shoplist }) => {
  useEffect(() => {
    // console.log(id);
    fetchproduct();
  }, []);
  const [data, setdata] = useState([]);
  const fetchproduct = async () => {
    const url = `http://localhost:8000/api/sellerfunctions/fetchitem/${id}`;
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    // console.log(await response.json());
    setdata(await response.json());
  };
  const { img, name, product_description, price } = data;
  const findstore = async () => {
    document.getElementById("my_modal_3").showModal();
    console.log(id);
    const url = `http://localhost:8000/api/userfunctions/findstore/${id}`;
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    const res = await response.json();
    console.log(res);
    setshoplist([]);
    setshoplist(res);
  };
  return (
    <div className="MyListItem-container">
      <div className="MyListItem-img">
        <img src={img} alt="img" />
      </div>
      <div className="MyListItem-container2">
        <div className="MyListItem-container3">
          <div className="MyListItem-name">{name}</div>
          <div className="MyListItem-information">{product_description}</div>
        </div>
        <div className="flex gap-4 items-center">
          <div>{price}</div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button className="btn btn-primary" onClick={findstore}>
            find Store
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default MyListItem;
