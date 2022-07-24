import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './getemail.css'

function GetEmail() {
  return (
    <Container>
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <p className='get-email-text'>Ready to watch? Enter your email to create or restart your membership.</p>
                <Box className='get-email-input'>
                    <input type="text" placeholder='Email'/>
                    <Button variant="contained">Get Started <ArrowForwardIosIcon/></Button>
                </Box>
            </Col>
        </Row>
    </Container>
  )
}

export default GetEmail