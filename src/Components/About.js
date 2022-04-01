import './about.css'
import './Mint.scss'

import React, { useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";
import ScrollAnimate from "react-scroll-fade-animation";
import Trailer from "./Trailer";

const About = () => {
    useEffect(() => {
        document.title = 'About';
    });
    return (
        <div className='diagonal'>
        <div className='stories'>

                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
                <div className="story1">
                    <div className='box1'>
                        <h2 style={{marginBottom: "20px"}}>WHAT IS DOBERLADS?</h2>
                        <div className='non-hoverAbout'>
                       <p style={{textAlign: "center"}} >
                          Having its spotlight on Dobermans, the art comes up as an exquisite acquisition for any Metaverse gallery.
                        </p>
                            <p style={{textAlign: "center"}}>
                                🦴 The lads’ development team values, above all, quality, taste and creativity, attributes found both in the character and the management of the project. They analysed in depth the extent to which a project can bring real life benefits to it’s community members,
                                thus coming forward with two major goals: bringing people together, united by some of their common interests and helping said people become more productive on a daily basis. Both of these will be attained by the perks of web3, metaverse apps and live events the team
                                has planned for you. Therefore, it is their pleasure to announce that DoberLads is more than just art, it is a continuously growing community of which anybody can be a part of. Buy your first DoberLads here
                            </p>
                        </div>
                </div>
            </div>
        </div>
            <Link className="no-hover-mint" to="/mint">
            <button className='mintButton1'>
                MINT
                </button>
            </Link>
            <ScrollAnimate path={'bottom'}>
                <div className='stories'>
                    <div className="story1">
                            <div className='box1'>
                                <h2 style={{marginBottom: "20px"}}>WHO ARE WE?</h2>
                                    <div className='non-hoverAbout'>
                                        <p style={{textAlign: "center"}}>
                                            🦴 DoberLads is a team of 7 lads that share a passion for dogs.
                                            Our mission is to bring Dobermans to the ERC-721 blockchain and give every one of you a chance to own your very own custom Doberman NFT.
                                            We will bring our NFTs to the Metaverse with an app ready to offer functionality and battle procrastination.
                                            We have nothing but good intentions for our fans and the environment and we'd love to welcome you guys in our community.
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