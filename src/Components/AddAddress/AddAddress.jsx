/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./AddAddress.css";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { fromPlaceId, setKey } from "react-geocode";
import { api } from "../Account/Account";
const AddAddress = () => {
  const [Cood, setCood] = useState({});
  const [address, setaddress] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Value, setValue] = useState("");
  function getPos() {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setCood({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }
  const onMapClick = (e) => {
    setCood({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };
  useEffect(() => {
    setKey(api);
  }, []);

  const getCoodds = async () => {
    if (Value) {
      try {
        const response = await fromPlaceId(Value.value.place_id);
        setaddress(Value.label);
        const { lat, lng } = await response.results[0].geometry.location;
        setCood({ lat, lng });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const postaddress = async () => {
    // console.log(Cood);
    // console.log(address);
    try {
      if (localStorage.getItem("user")) {
        const url = `http://localhost:8000/api/sellerfunctions/update/address`;
        const response = await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
          body: JSON.stringify({
            address: address,
            coord: `${Cood.lat},${Cood.lng}`,
          }),
        });
        console.log(await response.json());
        window.location.reload();
      } else {
        const url = `http://localhost:8000/api/userfunctions/update/address`;
        const response = await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
          body: JSON.stringify({
            address: address,
            coord: `${Cood.lat},${Cood.lng}`,
          }),
        });
        console.log(await response.json());
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoodds();
  }, [Value]);

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Add Address
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <h3 className="font-bold text-lg">Add Address </h3>
          <GoogleMap
            onClick={onMapClick}
            zoom={18}
            center={Cood}
            options={{
              disableDefaultUI: true,
            }}
            mapContainerStyle={{
              width: "100%",
              height: "70vh",
              position: "relative",
            }}
          >
            <div className="p-4">
              <GooglePlacesAutocomplete
                apiOptions={{ language: "en", region: "in" }}
                autocompletionRequest={{
                  componentRestrictions: { country: "in" },
                }}
                className="shadow-md p-4"
                selectProps={{
                  Value,
                  onChange: setValue,
                  placeholder: "Search for area, street name...",
                }}
              />
            </div>
            <MarkerF draggable={true} position={Cood} />
            <div className="absolute bottom-0 flex justify-center items-center w-full p-4">
              <Button colorScheme="blue" mr={3} onClick={getPos}>
                Get Current Location
              </Button>
            </div>
          </GoogleMap>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary" onClick={postaddress}>
                Confirm
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AddAddress;
