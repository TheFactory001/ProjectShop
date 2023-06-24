import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar';

const BuyPage = () => {
    const [authState] = useState(true);
    return (
        <div>
            <NavBar searchPlaceholder="Search departments" isAuth={authState}/>
            <div className='buyPane'>
                <h3>Explore departments</h3>
                <div>
                    Clothing & Jewellrey
                    <div>
                        <p>M</p>
                        <p>F</p>
                        <p>B</p>
                    </div>
                </div>
                <div>
                    Shoes
                    <div>
                        <p>M</p>
                        <p>F</p>
                        <p>B</p>
                    </div>
                </div>
                <div>
                    Everything else
                    <div>
                        <p>M</p>
                        <p>F</p>
                    </div>
                </div>
                <div>Services</div>
            </div>
        </div>
    )
}

export default BuyPage;