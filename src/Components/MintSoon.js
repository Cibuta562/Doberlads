import React from 'react'
import DobTrailer from '../assets/DobTrailer.mp4'
import './MintSoon.css'
import Timer from "./Timer";
import {Link} from "react-router-dom";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";


const MintSoon = () => {
    return (
        <div className="mint-soon">
            <HeaderMobile/>
            <div className="space-soon-top"></div>
            <Timer/>
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