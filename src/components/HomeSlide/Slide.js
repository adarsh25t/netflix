import { Box, Typography } from '@mui/material'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Fragment } from 'react'
import './slide.css'


function Slide({data}) {
    console.log(data.title);
  return (
    <Fragment>
        <p className='top-border'></p>
        <Container >
          <Row className='home-slide' style={{flexDirection: data.isReverse ? "row-reverse" : 'row'}}>
              <Col md={{ span: 6}}>
                <Box>
                    <Typography variant="h3" component="h2">{data.title}</Typography>
                    <Typography variant='h6'>{data.para}</Typography>
                </Box>
              </Col>

              <Col md={{ span: 4}}>
                <Box className='slide-wrapper'>
                    <img src={data.image} alt="" />
                </Box>
              </Col>

          </Row>
        </Container>
    </Fragment>

  )
}

export default Slide