import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <Typography>Sign In</Typography>
        <TextField
          required
          id="outlined-required"
          label="email or phone number"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button>Sign In</Button>
        <div>
            <input type="checkbox" id='checkbox'/>
            <label htmlFor="checkbox">Remember me</label>
            <Link to={'/'}>Need help?</Link>
        </div>
    </div>
  )
}

export default Login