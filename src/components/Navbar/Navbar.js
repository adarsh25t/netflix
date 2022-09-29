import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from '../../images/logo.png'
import './navbar.css'
import SelectBox from '../SelectBox.js/SelectBox';
import { Link } from 'react-router-dom';

export default function Navbar({isRight}) {

    const [language,setLanguage] = React.useState(["Eng","हिन्दी","മലയാളം"])


    return (
        <Box className='nav-items'>
            <img src={logo} alt="" />
            {isRight && 
                <Box className='nav-right-item'>
                    <SelectBox language={language} className="lan-select-box"/>
                    <Button variant="contained"> <Link to={'/authentication'}>Sign In</Link> </Button>
                </Box>
            }
        </Box>
    );
}
