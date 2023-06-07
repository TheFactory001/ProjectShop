import React from 'react'

const NavBar = () => {
  return (
    <>
    <div className="nav-container">
      <ul className="nav-item nav-item-group-1 nav-list">
        <li>BUY</li>
        <li>SELL</li>
        <li>Deals</li>
      </ul>
      <div className="nav-item nav-item-group-2 nav-search">Search</div>
      <ul className="nav-item nav-item-group-3">
        <li className= "user-profile">Sign in</li>
        <li>Cart</li>
      </ul>
    </div>
    
    </>
  )
}

export default NavBar