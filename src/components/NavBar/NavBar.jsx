import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
    <div className="nav-container">
      <ul className="nav-item nav-item-group-1 nav-list fw-400 fs-14">
        <li className="pointer-cursor nav-hov-black">BUY</li>
        <li className="pointer-cursor nav-hov-black">SELL</li>
        <li className="pointer-cursor nav-hov-black">DEALS</li>
      </ul>
      <div className="nav-item nav-item-group-2 nav-search">
        <input type="text" className='nav-search-input' placeholder='Search' />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <ul className="nav-item nav-list nav-item-group-3">
        <li className= "user-profile pointer-cursor">Sign in</li>
        <li className="pointer-cursor">Cart</li>
      </ul>
    </div>
    
    </>
  )
}

export default NavBar