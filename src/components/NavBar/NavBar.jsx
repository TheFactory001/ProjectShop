import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
    <div className="nav-container">
      <ul className="nav-item nav-item-group-1 nav-list">
        <li className="pointer-cursor nav-hov-black">BUY</li>
        <li className="pointer-cursor nav-hov-black">SELL</li>
        <li className="pointer-cursor nav-hov-black">Deals</li>
      </ul>
      <div className="nav-item nav-item-group-2 nav-search">Search</div>
      <ul className="nav-item nav-list nav-item-group-3">
        <li className= "user-profile pointer-cursor">Sign in</li>
        <li className="pointer-cursor">Cart</li>
      </ul>
    </div>
    
    </>
  )
}

export default NavBar