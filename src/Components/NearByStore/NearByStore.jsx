/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const NearByStore = ({ link, name, distance }) => {
  const url = `https://www.google.com/maps/search/${link}`;
  return (
    <div className="flex gap-4">
      <p className="font-semibold items-center justify-center">{name}</p>
      <div className="flex flex-col">
        <div>{distance}</div>
        <button className="btn btn-primary">
          <a href={url}>View on google maps</a>
        </button>
        {/* <div>{url}</div> */}
      </div>
    </div>
  );
};

export default NearByStore;
