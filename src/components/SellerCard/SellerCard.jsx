import React from 'react'
import './SellerCard.css'

const SellerCard = ({seller_details}) => {
    
  return (
    <div className='m-25' >
        <div className='seller-distance'><p>{seller_details.distant}km</p></div>
        <div className='seller-card-profile'>
            <div className="shop-title"><p>{seller_details.user.title}</p></div>

        </div>
    </div>
  )
}

export default SellerCard