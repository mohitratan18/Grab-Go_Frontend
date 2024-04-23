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
    console.log(id);
    alert("Added Check for Quantity");
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
