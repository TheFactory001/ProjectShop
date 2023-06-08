import React from 'react'
import './MarketBody.css'
import SellerCard from '../SellerCard/SellerCard'

const MarketBody = () => {
    //demo seller details - should be passed from the main component
    const demo_seller_details ={distant:5 ,user: {name:"Daniel", title:"Eunice's Clothing", customer_count:50}}
  return (
    <div className='pl-pr-50 mt-25 '>
        <div className='market-body p-25 '>
            <div className='body-text opac-50 fs-14'><p>Top shops around you</p></div>
            <div className="flex">

            <SellerCard distant = "5km" seller_details={demo_seller_details} />
            <SellerCard distant = "5km" seller_details={demo_seller_details} />
            <SellerCard distant = "5km" seller_details={demo_seller_details} />
            </div>
            <div className="flex-center"><button className='enter-market-btn pointer-cursor' >ENTER THE MARKET</button></div>
            
        </div>
        
    </div>
    
  )
}

export default MarketBody