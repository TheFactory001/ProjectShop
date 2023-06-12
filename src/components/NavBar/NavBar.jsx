import React, { useRef, useState } from 'react'
import './NavBar.css'
import { isVisible } from '@testing-library/user-event/dist/utils'
import NavMarket from '../NavMarket/NavMarket'

const NavBar = () => {
  const [searchItem, setSearchItem]=useState("")
  const ref =useRef(null)
  const[isIconFilled, setIsIconFill]=useState("False")
  const toggleIconFill =()=>{
    setIsIconFill(!isIconFilled)
  }
  // show nav items and hide effect
  const [menuIconShown,setMenuIconShown] =useState("false")

  const toggleMenuIcon=()=>{
    setMenuIconShown(!menuIconShown)

  }
  
  return (
    <>
    <div className="nav-container">

      {/* First Set Items by left */}
      <ul className= {` nav-item nav-item-group-1 nav-list fw-400 fs-14 ${menuIconShown?"displ-none":null}`}>
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
        <li className= "user-profile pointer-cursor" ><i className={"fa-regular fa-user"  } ></i><span className='ml-20'>Sign in</span></li>
        <li className="pointer-cursor"><i className="fa-solid fa-cart-shopping"></i></li>
        <li className={"pointer-cursor menu-bar"}><i className={`fa-solid ${menuIconShown? "fa-bars":"fa-times"}`} onClick={()=>{
          toggleMenuIcon()
        }}></i></li>
      </ul>
    </div>
    
    </>
  )
}

export default NavBar