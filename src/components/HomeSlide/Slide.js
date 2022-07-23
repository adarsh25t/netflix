import { Box, Typography } from '@mui/material'
import React from 'react'
import './slide.css'

function Slide({data}) {
    console.log(data.title);
  return (
    <div className='home-slide' style={data.isReverse ? {flexDirection:'row-reverse'} : {flexDirection:'row'}}>
        <Box>
            <Typography variant="h3" component="h2">{data.title}</Typography>
            <Typography variant='h6'>{data.para}</Typography>
        </Box>
        <Box>
            <img src={data.image} alt="" />
        </Box>
    </div>
  )
}

export default Slide