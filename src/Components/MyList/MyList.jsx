/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./MyList.css";
import MyListItem from "../MyListItem/MyListItem";
const MyList = () => {
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const url = `http://localhost:8000/api/userfunctions/fetchlist`;
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
  const [data, setdata] = useState([]);

  return (
    <div className="MyList-container">
      {data.map((item, index) => {
        console.log(item.productId);
        return <MyListItem id={item.productId} key={index} />;
      })}
    </div>
  );
};

export default MyList;
