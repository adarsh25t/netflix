import React from 'react'
import Banner from '../components/Banner/Banner.js'
import Slide from '../components/HomeSlide/Slide.js'
import tv from '../images/tv.png'
import cartoon from '../images/cartton.png'
import mobile from '../images/mobile.jpg'
import lap from '../images/lap.png'
import { FormatColorResetRounded } from '@mui/icons-material'
import Questions from '../components/Question/Question.js'

const slide1 = {
  title:"Enjoy on your TV.",
  para:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
  image:tv,
  isReverse:false
}
const slide2 = {
  title:"Create profiles for children.",
  para:"Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
  image:cartoon,
  isReverse:true
}
const slide3 = {
  title:"Download your shows to watch offline.",
  para:"Save your favourites easily and always have something to watch.",
  image:mobile,
  isReverse:true
}
const slide4 = {
  title:"Watch everywhere.",
  para:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
  image:lap,
  isReverse:false
}

function Home() {
  return (
    <div>
        <Banner/>
        <Slide data={slide1}/>
        <Slide data={slide3}/>
        <Slide data={slide4}/>
        <Slide data={slide2}/>
        <Questions/>
    </div>
  )
}

export default Home