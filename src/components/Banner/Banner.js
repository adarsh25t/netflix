import React from 'react'
import Navbar from '../Navbar/Navbar'
import './banner.css'
import BannerDetails from './BannerDetails'

function Banner() {
  return (
    <div className='banner-wrapper'>
        <Navbar/>
        <BannerDetails/>
    </div>
  )
}

export default Banner