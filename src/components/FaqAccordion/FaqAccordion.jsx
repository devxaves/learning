import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Having Doubts? Check below to find your answer. Doubt Not cleared? Contact the Team DEVx AVES.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Can I Learn in My Free Time ?</Accordion.Header>
                    <Accordion.Body>
                        Yes Our Courses are completely Online so that you can learn anytime, anywhere
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Are They useful ?</Accordion.Header>
                    <Accordion.Body>
                        Our Courses are Modern and Updated by experts to match with the present day scenarios and learn the latest
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>How to access Courses ?</Accordion.Header>
                    <Accordion.Body>
                        Log In securely in our Platform and create a account to get curated content made just for you
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Are they Verified ?</Accordion.Header>
                    <Accordion.Body>
                        Our all courses and resources are government approved and certified
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;