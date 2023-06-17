import React from 'react'
import './SellerCard.css'
import tempo from '../../asset/card-placeholder.jpg'

const SellerCard = ({seller_details}) => {
    const rate = seller_details.seller.rating;
    const unrate = 5-rate
    
  return (
    <div className='m-25' >
        <div className='seller-distance fs-16'>
            <div className="cardInfo flex-8 fw-700">
                <p>{seller_details.seller.title}</p>
                <p>{seller_details.distant}km</p>
            </div>
        </div>
        <div className='seller-card-profile'>
            <div className="img-customer">
                <img src={tempo} alt="" className='seller-img'/>
            </div>
            <div className='sellerInfo'>
                <div className="customerData">
                    <div className="ratingCount">
                        {/* write logic to ensure the rating gotten as number is well interpreted */}
                        <div className="rate-icons">
                            {/*full star ratings for whole numbers*/}
                            {[...Array(Math.floor(rate))].map((i,e)=>
                                <i className="fa-solid fa-star" key={e}></i> 
                            )}
                            {
                                //half star rating for fractions 
                            (rate%1)!==0? 
                            <i className="fa-solid fa-star-half-stroke"></i>:null
                            }

                            {
                                // no fill left portion
                            [...Array(Math.floor(unrate))].map((i,e)=>
                                <i className="fa-regular fa-star" key={e}></i> 
                            )}
                        </div>
                        <p> ({seller_details.seller.customer_count})</p>
                    </div>
                </div>
                <div className="services">
                    <ul className='flex-btw'>
                        
                        {seller_details.seller.services.map((service)=>
                            <li className="serviceText fw-400">{service}</li>
                        )}
                    
                    </ul>

                </div>
            </div>
            <div className="view-shop fw-400">
                <p className='calatogText'>Visit shop</p>
            </div>
        </div>
    </div>
  )
}

export default SellerCard