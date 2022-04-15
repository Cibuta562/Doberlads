import React from 'react'
import "./faq.css"
import {useState} from 'react'

const Faq = () => {

    const[selected, setSelected] = useState(null)


    const toggle = (i) => {
        if(selected == i){
            return setSelected(null);
        }
        setSelected(i);
    }


    const [show, setShow] = useState(false);


    return (
        <div className='accordion'>
            <div className='faq'>
                <h1>FAQ</h1>
            </div>
            {data.map((item, i) => (
                <div className='item' onClick={() => toggle(i)}>
                    <div className='title'>
                        <h2 className="faq-h2">{item.question}</h2>
                        <button  className={selected == i ? 'minus' : 'plus'}>{selected == i ? '-' : '+'}</button>
                    </div>
                    <div className='contents'>
                        <div className={selected == i ? 'contents.show' : 'content'}>{item.answer}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const data = [
    {
        question: 'HOW DO I GET A DOBERLAD?',
        answer:
            'You will be able to mint your Doberlad by clicking the MINT button up above, on our website.',
    },
    {
        question: 'HOW MANY DOBERLADS ARE THERE GOING TO BE?',
        answer:
            'TBA.',
    },
    {
        question: 'HOW MANY DOBERLADS CAN I BUY?',
        answer: 'Everyone can mint up to 2 Doberlads per wallet. This is to prevent wales from buying out the whole collection.',
    },
    {
        question: 'WHAT WILL THE MINTING PRICE BE?',
        answer: 'The minting price will be announced in the coming weeks',
    },
    {
      question: 'WHAT ARE OUR SECONDARY ROYALTY FEES?',
        answer: "Our secondary royalty fees are 5%",
    }
]

export default Faq