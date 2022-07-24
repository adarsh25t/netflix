import React from 'react'
import Box from '@mui/material/Box';
import './banner.css'
import GetEmail from '../Getemail/GetEmail';


function BannerDetails() {
  return (
    <div className='banner-details'>
        <h2>Unlimited movies, TV shows and more.</h2>
        <h4>Watch anywhere. Cancel anytime.</h4>
        <GetEmail/>
    </div>
  )
}

export default BannerDetails