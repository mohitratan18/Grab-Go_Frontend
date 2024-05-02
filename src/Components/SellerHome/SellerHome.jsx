/* eslint-disable no-unused-vars */
// import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SellerHome.css";
import Navbar from "../Navbar/Navbar";
import SellerProducts from "../SellerProducts/SellerProducts";
import SellerInventory from "../SellerInventory/SellerInventory";
import Additems from "../../Additems/Additems";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
const SellerHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      navigate("/login");
    }
    fetchdata();
    fetchInventory();
  }, [navigate]);

  const [data, setdata] = useState([]);
  const [Inventory, setInventory] = useState([])
  const fetchdata = async () => {
    const url = "http://localhost:8000/api/adminfunctions/fetchitems";
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setdata(await response.json());
  };

  const fetchInventory = async()=>{
    const url = "http://localhost:8000/api/sellerfunctions/inventory/getitems";
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('auth-token'),
      },
    });
    setInventory(await response.json());

  }
  const handleclose = () => {
    // eslint-disable-next-line no-undef
    addItemPopup.close();
  };

  return (
    <div className="SellerHome-container-box">
      <Navbar btn="Add Items" />
      <div className="dummy"></div>

      <Tabs variant="soft-rounded" colorScheme="green" padding="1rem">
        <TabList>
          <Tab>Your Inventory</Tab>
          <Tab>Items</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <div className="SellerHome-container">
              <div className="SellerHome-container-items">
                {Inventory.length > 0 ? (
                  Inventory.map((datas, index) => {
                    return <SellerInventory {...datas} key={index} />;
                  })
                ) : (
                  <h1>Items Loading</h1>
                )}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="SellerHome-container">
              <div className="SellerHome-container-items">
                {data.length > 0 ? (
                  data.map((datas, index) => {
                    // {
                    //   console.log(data);
                    // }
                    return <SellerProducts {...datas} key={index} />;
                  })
                ) : (
                  <h1>Items Loading</h1>
                )}
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

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
