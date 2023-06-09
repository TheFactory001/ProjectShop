import React from 'react'
import './MarketBody.css'
import SellerCard from '../SellerCard/SellerCard'

const MarketBody = () => {
    //demo seller details - should be passed from the main component
    const demo_seller_details_1 ={distant:5 ,seller: {name:"Betha", title:"Betha's Hair",services:["Hairstyling", "Wigs", "Make-Up"], customer_count:50, rating:4.5}}
    const demo_seller_details_2 ={distant:15 ,seller: {name:"Eunice", title:"Eunice's Clothing",services:["Baby Wears", "Formal", "Casual"], customer_count:200, rating:3.5}}
  return (
    <div className='pl-pr-50 mt-25 '>
        <div className='market-body p-25 '>
            <div className='body-text opac-50 fs-14'><p>Top shops around you</p></div>
            <div className="flex">

            <SellerCard distant = "5km" seller_details={demo_seller_details_1} />
            <SellerCard distant = "5km" seller_details={demo_seller_details_2} />
            <SellerCard distant = "5km" seller_details={demo_seller_details_2} />
            </div>
            <div className="flex-center"><button className='enter-market-btn pointer-cursor' >ENTER THE MARKET</button></div>
            
        </div>
        
    </div>
    
  )
}

export default MarketBody