import React, { Fragment,useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import SelectBox from '../SelectBox.js/SelectBox';
import './footer.css'

function Footer() {

    const [language,setLanguage] = React.useState(["Eng","हिन्दी","മലയാളം"])


  return (
   <Fragment>
         <p className='top-border'></p>
        <Container>
            <Row className='footer-items'>
                <Col xs={12} style={{textAlign:'left',marginTop:'20px',marginBottom:'20px'}} md={{ span: 10, offset: 0 }}>
                    <Typography variant="h6" component="h6" style={{color:'gray'}}>Questions? Call 000-800-040-1843</Typography>
                </Col>
                <Col md={{ span: 10, offset: 0 }}>
                    <Row>
                        <Col style={{display:'flex',flexDirection:'column'}} className='footer-links'>
                            <Link to={'/'} >FAQ</Link>
                            <Link to={'/'} >Investor Relations</Link>
                            <Link to={'/'} >Privacy</Link>
                            <Link to={'/'} >Speed Test</Link>
                        </Col>
                        <Col style={{display:'flex',flexDirection:'column'}} className='footer-links'>
                            <Link to={'/'} >Help Centre</Link>
                            <Link to={'/'} >Jobs</Link>
                            <Link to={'/'} >Cookie Preferences</Link>
                            <Link to={'/'} >Legal Notices</Link>
                        </Col>
                        <Col style={{display:'flex',flexDirection:'column'}} className='footer-links'>
                            <Link to={'/'} >Account</Link>
                            <Link to={'/'} >Ways to Watch</Link>
                            <Link to={'/'} >Corporate Information</Link>
                            <Link to={'/'} >Only on Netflix</Link>
                        </Col>
                        <Col style={{display:'flex',flexDirection:'column'}} className='footer-links'>
                            <Link to={'/'} >Media Centre</Link>
                            <Link to={'/'} >Terms of Use</Link>
                            <Link to={'/'} >Contact Us</Link>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} style={{textAlign:'left',marginTop:'20px'}} md={{ span: 10, offset: 0 }}>
                    <SelectBox language={language} />
                    <p style={{color:'gray'}}>Netflix India</p>
                </Col>
            </Row>
        </Container>
   </Fragment>
  )
}

export default Footer