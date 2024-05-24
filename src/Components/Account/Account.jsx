/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Account.css";
import Navbar from "../Navbar/Navbar";
import { useLoadScript } from "@react-google-maps/api";
import AddAddress from "../AddAddress/AddAddress";
import { useReducer } from "react";

export const api = import.meta.env.VITE_MAPS_API_KEY;

const Account = () => {
  const [btnDisable, setbtnDisable] = useState(true);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: api,
    libraries: ["core", "geocoding", "maps", "places"],
  });

  const initialState = {
    name: "",
    email: "",
    phoneno: "",
    address: "ADD ADDRESS",
  };

  const userReducer = (state, { type, payload }) => {
    setbtnDisable(false);
    if (type === "name") {
      return { ...state, name: payload };
    } else if (type === "email") {
      return { ...state, email: payload };
    } else if (type === "phoneno") {
      return { ...state, phoneno: payload };
    } else if (type === "address") {
      return { ...state, address: payload };
    } else if (type === "user") {
      return payload;
    }
  };

  const [user, userDispatch] = useReducer(userReducer, initialState);
  const [Disable, setDisable] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      fetchseller();
    } else {
      fetchuser();
    }
    // console.log(api);
  }, []);
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
      userDispatch({
        type: "user",
        payload: {
          name: u.name,
          email: u.email,
          phoneno: u.phoneno,
          address: u.address,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchseller = async () => {
    try {
      const url = `http://localhost:8000/api/sellerfunctions/fetchseller`;
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      });
      const u = await response.json();
      userDispatch({
        type: "user",
        payload: {
          name: u.name,
          email: u.email,
          phoneno: u.phoneno,
          address: u.address,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const savechanges = async () => {
    document.getElementById("my_modal_1").showModal();
    console.log(user);
    setbtnDisable(true);
    setDisable(true);
    const url = `http://localhost:8000/api/userfunctions/update/account`;
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        phoneno: user.phoneno,
      }),
    });
    console.log(await response.json());
  };
  // console.log(user);
  return (
    <>
      <Navbar btn="My List" address={user.address} />
      <div className="Account-container bg-blue-100 md:bg-white">
        <div className="flex flex-col  justify-center items-center bg-blue-100 p-0 rounded-3xl lg:p-[6rem] lg:pl-[12rem] lg:pr-[12rem] ">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={user.name}
              onChange={(e) => {
                userDispatch({ type: "name", payload: e.target.value });
              }}
              disabled={Disable}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">email</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={user.email}
              onChange={(e) => {
                userDispatch({ type: "email", payload: e.target.value });
              }}
              disabled={Disable}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">phone Number</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={user.phoneno}
              onChange={(e) => {
                userDispatch({ type: "phoneno", payload: e.target.value });
              }}
              disabled={Disable}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Address</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={user.address}
              onChange={(e) => {
                userDispatch({ type: "address", payload: e.target.value });
              }}
              disabled={Disable}
            />
          </label>
          {isLoaded && <AddAddress />}

          <div className="flex gap-2">
            <button
              className="btn btn-accent"
              onClick={() => setDisable(false)}
            >
              Edit
            </button>
            <button
              className="btn btn-accent"
              onClick={savechanges}
              disabled={btnDisable}
            >
              Save
            </button>
            <dialog id="my_modal_1" className="modal">
              <div role="alert" className="alert alert-success w-[50%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Updated Successfully</span>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
