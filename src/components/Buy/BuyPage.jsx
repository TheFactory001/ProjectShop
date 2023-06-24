import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar/NavBar';

const BuyPage = () => {
    const [authState, setAuthState] = useState(true);
    return (
        <div>
            <NavBar searchPlaceholder="Search departments" isAuth={authState}/>
        </div>
    )
}