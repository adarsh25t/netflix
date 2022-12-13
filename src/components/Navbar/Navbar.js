import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from '../../images/logo.png'
import './navbar.css'
import SelectBox from '../SelectBox.js/SelectBox';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

export default function Navbar({isRight}) {

    const [language,setLanguage] = useState(["Eng","हिन्दी","മലയാളം"])


    return (
        <Stack
            justifyContent={'space-between'}
            alignItems={'center'}
            direction="row"
            className='nav-items'
        >
        <Link to={'/'}>
            <img src={logo} alt="" className='nav-image'/>
        </Link>
        <Stack 
            direction="row" 
            alignItems={'center'}
        >
            <SelectBox language={language} className="lan-select-box"/>
            <Button variant="contained" className='nav-right-item-button'> <Link to={'/profiles'}>Sign In</Link> </Button>
        </Stack>
      </Stack>
    );
}
