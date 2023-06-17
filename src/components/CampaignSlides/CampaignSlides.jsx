import React, { useState, useEffect } from 'react'
import image from '../../asset/water-waterfall.gif'
import image1 from '../../asset/moreGif.gif'
import image2 from '../../asset/renot.gif'

import './CampaignSlides.css'

const images = [image, image1, image2]

const CampaignSlides = () => {
  const [currentImage, setCurrentImage] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 3000)
    
        return () => clearInterval(intervalId);
    }, [])

  return (
    <div className='landingImage'><img src={currentImage} className="landingGif" resizeMode="contain" alt="loading..." /></div>
  )
}

export default CampaignSlides