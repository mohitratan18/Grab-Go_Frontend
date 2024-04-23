/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import axios from "axios";
import Product from "../Product/Product.jsx";
import { useEffect } from "react";
import { useState } from "react";
import "./AdminProducts.css";
import Additems from "../../../Additems/Additems.jsx";
import ApprovedContext from "../../../Context/ApprovedContext.jsx";
const AdminProducts = () => {

  useEffect(() => {
    getdata();
    getunapproved();
  }, []);
  const {Data,setData,Unapproved,setUnapproved} = useContext(ApprovedContext);

  const getdata = async () => {
    const url = "http://localhost:8000/api/adminfunctions/fetchitems/approved";
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setData(data);
  };

  const getunapproved = async () => {
    const url =
      "http://localhost:8000/api/adminfunctions/fetchitems/unapproved";
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setUnapproved(data);
  };
  const handleclose = () => {
    // eslint-disable-next-line no-undef
    addItemPopup.close();
  };
  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Approved Products</Tab>
          <Tab>Unapproved Products</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="AdminProduct-container-box">
              {Data.length > 0 ? Data.map((product, index) => {
                // console.log(product);
                return <Product data={product} key={index} approve={true} />;
              }) : <h1>Loading</h1>}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="AdminProduct-container-box">
              {Unapproved.length > 0 ? Unapproved.map((item, index) => {
                return <Product data={item} key={index} approve={false} />;
              }) : <h1>No Products</h1>}
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <dialog id="addItemPopup" className="Admin-popup">
        <button className="SellerHome-popup-close" onClick={handleclose}>
          X
        </button>
        <Additems admin={true}/>
      </dialog>
    </>
  );
};

export default AdminProducts;
