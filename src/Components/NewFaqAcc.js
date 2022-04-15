import React from 'react';
import './NewFaqAcc.css';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Faq from "./Faq";
import {Accordion} from "react-bootstrap";

const NewFaqAcc = () => {
    return (
        <div className='bootstrapFaq'>

            <Accordion defaultActiveKey={['0']} alwaysOpen>


                <div className="newFaqtitle">
                    <h1>FAQ</h1>
                </div>

                <Accordion.Item eventKey="1" className='bootAcc1'>
                    <Accordion.Header><h2>HOW DO I GET A DOBERLAD?</h2></Accordion.Header>
                    <Accordion.Body>
                        You will be able to mint your Doberlad by clicking the MINT button up above, on our website.
                    </Accordion.Body>
                </Accordion.Item>

                    <Accordion.Item eventKey="2" className='bootAcc2'>
                        <Accordion.Header><h2>HOW MANY DOBERLADS ARE THERE GOING TO BE?</h2></Accordion.Header>
                        <Accordion.Body>
                            TBA.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className='bootAcc3'>
                        <Accordion.Header><h2>HOW MANY DOBERLADS CAN I BUY?</h2></Accordion.Header>
                        <Accordion.Body>
                            Everyone can mint up to 2 Doberlads per wallet. This is to prevent wales from buying out the whole collection.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className='bootAcc4'>
                        <Accordion.Header><h2>WHAT WILL THE MINTING PRICE BE?</h2></Accordion.Header>
                        <Accordion.Body>
                            The minting price will be announced in the coming weeks.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5" className='bootAcc4'>
                        <Accordion.Header>
                            <h2>WHAT ARE OUR SECONDARY ROYALTY FEES?</h2></Accordion.Header>
                        <Accordion.Body>
                            <h3>Our secondary royalty fees are 5%.</h3>
                        </Accordion.Body>
                    </Accordion.Item>

                <Accordion.Item eventKey="6" className='bootAcc6'>
                    <Accordion.Header>1</Accordion.Header>
                    <Accordion.Body>
                        no
                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>

            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>


        </div>
    )
}

export default NewFaqAcc