import React, { useState, useEffect } from 'react'

import './App.css';

import NavBar from './components/NavBar/NavBar';
import CampaignSlides from './components/CampaignSlides/CampaignSlides';
import MarketBody from './components/MarketBody/MarketBody';
import Footer from './components/Footer/Footer';


function App() {
  const [authState, setAuthState] = useState(false);
  return (
    <div className="App">
       <NavBar searchPlaceholder="Search" isAuth={authState}/>
       <CampaignSlides/>
       <MarketBody/>
       <Footer/>
    </div>
  );
}

export default App;
