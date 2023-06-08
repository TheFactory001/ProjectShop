import React from 'react'
import './SellerCard.css'
import tempo from '../../asset/Ibadan.jpg'

const SellerCard = ({seller_details}) => {
    const seller_services = ["Hairstyling", "Wigs", "Make-Up"]
    
  return (
    <div className='m-25' >
        <div className='seller-distance'><p>{seller_details.distant}km</p></div>
        <div className='seller-card-profile'>
            <div className="shop-title flex-8 fw-700"><p>{seller_details.user.title}</p></div>
            <div className="img-customer">
            <img src={tempo} alt="" className='seller-img'/>
                
                <div className="customer">
                    <p htmlFor=""><span>Customer:</span> <span>{seller_details.user.customer_count}</span></p>
                </div>
            </div>
            <div className="rating flex-8">
                <p >Rating</p>
                <p>****</p>
            </div>
            <div className="services">
                <ul className='flex-btw'>
                    
                    {seller_services.map((service)=>
                        <li>{service}</li>
                    )}
                  
                </ul>

            </div>
            
            <div className="view-shop fw-700">
                <p>View shop/catalog</p>
            </div>



        </div>
    </div>
  )
}

export default SellerCard