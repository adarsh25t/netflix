import React from 'react'
import Box from '@mui/material/Box';
import './banner.css'
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function BannerDetails() {
  return (
    <div className='banner-details'>
        <h2>Unlimited movies, TV shows and more.</h2>
        <h4>Watch anywhere. Cancel anytime.</h4>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <Box className='banner-details-text'>
            <input type="text" placeholder='Email'/>
            <Button variant="contained">Get Started <ArrowForwardIosIcon/></Button>
        </Box>
    </div>
  )
}

export default BannerDetails