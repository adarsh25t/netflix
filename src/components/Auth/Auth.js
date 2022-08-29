import React from 'react'
import './Auth.css'
import Navbar from '../Navbar/Navbar'
import Login from './Login'

const Auth = () => {
  return (
    <div className='banner-wrapper auth-wrapper'>
        <Navbar/>
        <Login/>
    </div>
  )
}

export default Auth