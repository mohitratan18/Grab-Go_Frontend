/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./MyList.css";
import MyListItem from "../MyListItem/MyListItem";
import NearByStore from "../NearByStore/NearByStore";
const MyList = () => {
  const [shoplist,setshoplist] = useState(null)
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
        return <MyListItem shoplist={shoplist} setshoplist={setshoplist} id={item.productId} key={index} />;
      })}
       <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg m-4">Near By stores</h3>
              {shoplist &&
                shoplist.map((shop, index) => {
                  // console.log(shop);
                  return (
                      <NearByStore
                    key={index}
                    link={shop.coord}
                    name={shop.name}
                    distance={shop.distance}
                    />
                  );
                })}
            </div>
          </dialog>
    </div>
  );
};

export default MyList;
