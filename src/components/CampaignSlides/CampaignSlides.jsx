import React from 'react'
import image from '../../asset/CampaignSlides/water-waterfall.gif'
import './CampaignSlides.css'

const CampaignSlides = () => {
  return (
    <div className='pl-pr-50 mt-25'><img src={image} className="landingGif" resizeMode="contain" alt="loading..." /></div>
  )
}

export default CampaignSlides