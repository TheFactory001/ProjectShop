import React from 'react'
import './MarketBody.css'
import SellerCard from '../SellerCard/SellerCard'

const MarketBody = () => {
    const demo_seller_details ={distant:5 ,user: {name:"Daniel", title:"Eunice's Clothing"}}
  return (
    <div className='pl-pr-50 mt-25 '>
        <div className='market-body p-25'>
            <div className='body-text opac-50'><p>Top shops around you</p></div>
            <SellerCard distant = "5km" seller_details={demo_seller_details} />
        </div>
        
    </div>
    
  )
}

export default MarketBody