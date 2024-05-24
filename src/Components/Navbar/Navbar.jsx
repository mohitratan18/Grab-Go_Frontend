// import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { CiUser } from "react-icons/ci";
const Navbar = (props) => {
  // eslint-disable-next-line react/prop-types
  const {btn,address} = props;
  const handleclick = ()=>{
    console.log(address);
    console.log(btn);
    if(btn === 'Add Items'){
      // eslint-disable-next-line no-undef
      addItemPopup.showModal();
    }
    else{
      // eslint-disable-next-line no-undef
      MylistPopup.showModal();
    }
  }
  return (
    <div className='Navbar-container'>
      <div className='Navbar-logo'><h2>GRAB & GO</h2></div>
      <div className='Navbar-address'><h3>{address}</h3></div>
      <div className='Navbar-search'>
        <input type='text' name='search' placeholder='search'/>
      </div>
      <Link className='Navbar-user' to="/account"> <CiUser size={28}/> </Link>
      <button className='Navbar-cart' onClick={handleclick}>{btn}</button>
    </div>
  )
}

export default Navbar
