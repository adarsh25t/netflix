import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from '../../images/logo.png'
import './navbar.css'
import SelectBox from '../SelectBox.js/SelectBox';

export default function Navbar() {

    const [language,setLanguage] = React.useState(["Eng","हिन्दी","മലയാളം"])


    return (
        <Box className='nav-items'>
            <img src={logo} alt="" />
            <Box className='nav-right-item'>
                <SelectBox language={language}/>
                <Button variant="contained">Sign In</Button>
            </Box>
        </Box>
    );
}
