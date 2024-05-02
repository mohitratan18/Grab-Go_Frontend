/* eslint-disable no-unused-vars */
 import "./SellerProducsts.css";
// import { useContext } from 'react';
// import Newcontext from '../../Context/GrabGocontext';
const SellerProducts = (props) => {
  // const a = useContext(Newcontext);
  // eslint-disable-next-line react/prop-types
  const { img, name, price, product_description,_id } = props;
  const id = _id;
  const info = product_description;
  const AddtoInventory = async()=>{
    // api call to add
    try {
      const url = `http://localhost:8000/api/sellerfunctions/inventory/${id}`;
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem('auth-token'),
        },
      });
      const res = await response.json();
      if(res.flag){
        alert("Product added successfully");
        window.location.reload();
      }
      else{
        alert("Product already added");
      }
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div className="Sellerproduct-container-box">
      <div className="Sellerproduct-img-container">
        <img src={img} alt="img" className="Sellerproduct-img" />
      </div>
      <div className="Sellerproduct-details">
        <span className="Sellerproduct-name">{name}</span>

        <div className="Sellerproduct-first-flexbox">
          <span className="Sellerproduct-info">{info}</span>
          <div className="Sellerproduct-price">₹ {price}</div>
        </div>
        <div className="Sellerproduct-second-flexbox">
          <button className="Sellerproduct-btn" onClick={AddtoInventory}>Add To Inventory</button>
        </div>
      </div>
    </div>
  );
};

export default SellerProducts;
