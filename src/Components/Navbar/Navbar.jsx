// import React from 'react'
import './Navbar.css'
const Navbar = (props) => {
  // eslint-disable-next-line react/prop-types
  const {btn} = props;
  const handleclick = ()=>{
    console.log(btn);
    if(btn === 'Add Items'){
      // eslint-disable-next-line no-undef
      addItemPopup.showModal();
    }
  }
  return (
    <div className='Navbar-container'>
      <div className='Navbar-logo'><h2>GRAB & GO</h2></div>
      <div className='Navbar-address'><h3>Address - Vizag</h3></div>
      <div className='Navbar-search'>
        <input type='text' name='search' placeholder='search'/>
      </div>
      <button className='Navbar-cart' onClick={handleclick}>{btn}</button>
    </div>
  )
}

export default Navbar
