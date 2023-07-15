import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar';
import Catalog from './Catalog';

import './BuyPage.css'

const BuyPage = () => {
    const [authState] = useState(true);
    const demo_seller_details_1 ={seller: {name:"", title:"",services:["Hairstyling", "Wigs", "Make-Up"], customer_count:50, rating:4.5}}
    return (
        <div>
            <NavBar searchPlaceholder="Search departments" isAuth={authState}/>
            <div className='buyPane'>
                <h3 className='exploreText'> Explore departments </h3>
                <div className='topBuyPane'>
                    <div className='departments'>
                        <h5> Clothing </h5>
                        <hr />
                        <h5> Accessories </h5>
                        <hr />
                        <h5> Shoes </h5>
                        <hr />
                        <h5> Services </h5>
                    </div>
                </div>
                <div className='department'>
                    <div className='baseFilter'>
                        <h5> Men </h5>
                        <hr />
                        <h5> Women </h5>
                        <hr />
                        <h5> Kids </h5>
                    </div>
                    <div className='catalogs'>
                        <div className='catalog'>
                            <Catalog catalog="Best Sellers" seller_details={demo_seller_details_1} />
                            <Catalog catalog="Today's deals" seller_details={demo_seller_details_1} />
                            <Catalog catalog="Explore" seller_details={demo_seller_details_1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyPage;