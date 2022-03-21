import React from 'react'
import "./faq.css"
import {useState} from 'react'
import Header from "./Header";
import * as events from "events";
import Footer from "./Footer";
import {Accordion} from "react-bootstrap";


const Faq = () => {

    const[selected, setSelected] = useState(null)


    const toggle = (i) => {
        if(selected == i){
            return setSelected(null);
        }
        setSelected(i);
    }



    return (
        <div className='accordion'>
            <div className='faq'>
                <h1>FAQ</h1>
            </div>
            {data.map((item, i) => (
                <div className='item'>
                    <div className='title'>
                        <h2>{item.question}</h2>
                        <button style={{transform: "2s ease"}} onClick={() => toggle(i)} className={selected == i ? 'minus' : 'plus'}>{selected == i ? '-' : '+'}</button>
                    </div>

                </div>
            ))}
        </div>
    )
}

const data = [
    {
        question: 'What is an NFT?',
        answer:
            'LMAO just screenshot one',
    },
    {
        question: 'How many are there?',
        answer:
            '10K boiiii',
    },
    {
        question: 'Where can I ask more questions?',
        answer: 'Join our discord, where our admins will try to respond promptly',
    }
]

export default Faq