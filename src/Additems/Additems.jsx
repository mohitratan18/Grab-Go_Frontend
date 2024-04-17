// import React from 'react'
import "./Additems.css";
const Additems = () => {
  return (
    <div className="addItems-container">
      <label htmlFor="name" className="addItems-label">Name of the Item</label>
      <input type="text" className="addItems-input" name="name" required/>
      <label htmlFor="price" className="addItems-label">Price </label>
      <input type="text" className="addItems-input" name="price" required/>
      <label htmlFor="quantityinfo" className="addItems-label">Quantity of the item</label>
      <input type="text" className="addItems-input" name="quantityinfo" required/>
      <label htmlFor="quantity" className="addItems-label">Quantity of the items in inventory</label>
      <input type="text" className="addItems-input" name="quantity" required/>
      <label htmlFor="img" className="addItems-label">Image url</label>
      <input type="text" className="addItems-input" name="img" required/>
      <input type="file"/>
      <button className="addItems-btn">Submit</button>
    </div>
  );
};

export default Additems;
