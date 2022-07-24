import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { Fragment } from 'react';
import { Typography } from '@mui/material';
import './question.css'
import GetEmail from '../Getemail/GetEmail';

function Questions() {
  return (
    <Fragment>
        <p className='top-border'></p>
        <Container>
            <Typography variant="h3" component="h2" className='question-title'>Frequently Asked Questions</Typography>
        <Row >
            <Col  md={{ span: 8, offset: 2 }} style={{paddingBottom:'60px'}}>
            <Accordion>

                <Accordion.Item eventKey="0" className='question-wrapper'>
                    <Accordion.Header >What is Netflix?</Accordion.Header>
                    <Accordion.Body>
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                        <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className='question-wrapper'>
                    <Accordion.Header>How much does Netflix cost?</Accordion.Header>
                    <Accordion.Body>
                        <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className='question-wrapper'>
                    <Accordion.Header>Where can I watch?</Accordion.Header>
                    <Accordion.Body>
                        <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                        <p>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className='question-wrapper'>
                    <Accordion.Header>How do I cancel?</Accordion.Header>
                    <Accordion.Body>
                        <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className='question-wrapper'>
                    <Accordion.Header>What can I watch on Netflix?</Accordion.Header>
                    <Accordion.Body>
                        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className='question-wrapper'>
                    <Accordion.Header>Is Netflix good for kids?</Accordion.Header>
                    <Accordion.Body>
                        <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
                        <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                    </Accordion.Body>
                </Accordion.Item>

                </Accordion>
            </Col>
            <GetEmail/>
        </Row>
    </Container>
    </Fragment>
  );
}

export default Questions;