import React from 'react'
import SellerCard from '../SellerCard/SellerCard'

import './BuyPage.css'

const Catalog = (props) => {
    return (
        <div className='catalog'>
            <h3>{props.catalog}</h3>
            <div className='products'>
                <SellerCard seller_details={props.seller_details} />
                <SellerCard seller_details={props.seller_details} />
                <SellerCard seller_details={props.seller_details} />
            </div>
        </div>
    )
}

export default Catalog;