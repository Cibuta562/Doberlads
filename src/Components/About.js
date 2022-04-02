import './about.css'
import './Mint.scss'

import React, { useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";
import ScrollAnimate from "react-scroll-fade-animation";
import Trailer from "./Trailer";

const About = () => {
    useEffect(() => {
        document.title = 'Doberlads';
    });

    function moveToTop(){
        window.scrollTo(0, 100);
    }
    return (
        <div className='diagonal'>
        <div className='stories'>

                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
                <div className="story1">
                    <div className='box1'>
                        <h2 style={{marginBottom: "20px"}}></h2>
                        <div className='non-hoverAbout'>
                       <p style={{textAlign: "center"}} >
                        </p>
                            <p style={{textAlign: "center"}}>
                               </p>
                        </div>
                </div>
            </div>
        </div>
            <Link className="no-hover-mint" to="/mint">
            <button className='mintButton1' onClick={moveToTop}>
                MINT
                </button>
            </Link>
            <ScrollAnimate path={'bottom'}>
                <div className='stories'>
                    <div className="story1">
                            <div className='box1'>
                                <h2 style={{marginBottom: "20px"}}></h2>
                                    <div className='non-hoverAbout'>
                                        <p style={{textAlign: "center"}}>
                                          </p>
                                    </div>
                            </div>
                    </div>
                </div>
            </ScrollAnimate>

</div>
    )
}

export default About