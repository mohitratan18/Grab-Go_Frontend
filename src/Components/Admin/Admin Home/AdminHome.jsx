// import React from 'react'
import "./AdminHome.css";

import Navbar from "../../Navbar/Navbar";
import AdminProducts from "../AdminProducts/AdminProducts";
const AdminHome = () => {
  return (
    <div className="AdminHome-container-box">
      <Navbar btn="Add Items" />
      <div className="AdminHome-switch">
        <button></button>
        <button></button>
      </div>
      <AdminProducts />
    </div>
  );
};

export default AdminHome;
