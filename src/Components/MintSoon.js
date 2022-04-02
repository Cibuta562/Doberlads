import React from 'react'
import DobTrailer from '../assets/DobTrailer.mp4'
import './MintSoon.css'
import Timer from "./Timer";
import {Link} from "react-router-dom";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";
import ScrollAnimate from "react-scroll-fade-animation";
import discordIcon from "../assets/assets_website/discord-black-icon-703937.png";


const MintSoon = () => {

    function moveToDiscord(){
        window.open ("https://discord.gg/hCdmCCJdfx");
    }

    return (
        <div className="mint-soon">
            <HeaderMobile/>
            <div className="space-soon-top"></div>
            <ScrollAnimate path={'bottom'}>
                <Timer/>
                <center>
                    <button className='mintButtonDiscord' onClick={moveToDiscord}>
                        <img className="img-soon" src={discordIcon} onClick={moveToDiscord}/>
                    </button>
                </center>
            </ScrollAnimate>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
            <div className="space-soon"></div>
            <Footer/>
        </div>
    )
}

export default MintSoon;