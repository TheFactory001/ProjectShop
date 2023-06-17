import React, { useRef, useState } from 'react'
import './NavBar.css'

const NavBar = () => {
  const [searchItem, setSearchItem]=useState("")
  const ref =useRef(null)
  
  return (
    <>
    <div className="nav-container">

      {/* First Set Items by left */}
      <ul className="nav-item nav-item-group-1 nav-list fw-400 fs-14">
        <li className="pointer-cursor nav-hov-black">BUY</li>
        <li className="pointer-cursor nav-hov-black">SELL</li>
        <li className="pointer-cursor nav-hov-black">DEALS</li>
      </ul>

      {/* Middle Item */}
      <form className="nav-item nav-item-group-2 nav-search" onSubmit={(e)=>{
        e.preventDefault()
        console.log(searchItem)
      }}>
        <input  className='nav-search-input' placeholder='Search' ref={ref}
        onInput={(e)=>setSearchItem(e.currentTarget.value)}
        />

        {/* Search Icon */}
        <div className="search-icon-container pos-abs ml-5" 
          onClick={()=>{
            console.log(searchItem)
          }}>
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>

        {/* Cancel Search Icon */}
        <div className="cancel-search-container pos-abs mr-5">
        
          {
            // only show on input and clear input box on click
            searchItem?<i className="fa-solid fa-times cancel-search-icon" onClick={(e)=>{
              ref.current.value=""
              setSearchItem("")}} ></i>:null
          }          
        </div>
        
      </form>

      {/* Right Items */}
      <ul className="nav-item nav-list nav-item-group-3">
        <li className= "user-profile pointer-cursor"><i className="fa-regular fa-user mr-20"></i>Sign in</li>
        <li className="pointer-cursor"><i className="fa-solid fa-cart-shopping"></i></li>
      </ul>
    </div>
    
    </>
  )
}

export default NavBar