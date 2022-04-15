import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import RoadMap from "./Components/RoadMap";
import Trailer from "./Components/Trailer.js";
import Footer from "./Components/Footer";
import Metamask from "./Components/Metamask";
import Team from "./Components/Team"
import Mint from './Components/Mint'
import "animate.css/animate.min.css";
import Faq from "./Components/Faq"
import HeaderMobile from "./Components/HeaderMobile";
import About from "./Components/About"
import { ethers, BigNumber } from "ethers";
import React, { useEffect, useState} from "react";
import mint from "./mintAbi.json"
import FaqJr from "./Components/FaqJr";
import Timer from "./Components/Timer";
import AbtTeam from './Components/AbtTeam'
import "./Fonts/Roboto/Roboto-Bold.ttf";
import "./Fonts/BebasNeue/BebasNeue/TTF/BebasNeue-Bold.ttf";
import "./Fonts/Archive/Archive/Commercial/OTF/Archive-Regular.otf";
import "./Fonts/Roboto/Roboto-Black.ttf";
import ScrollAnimation from 'react-animate-on-scroll';
import background from './assets/background.jpg'
import App2 from "./App2";
import CookieConsent from "react-cookie-consent";
import ScrollAnimate from "react-scroll-fade-animation";
import ReactGA from 'react-ga';
import NewFaqAcc from "./Components/NewFaqAcc";
import CTA from "./Components/CTA";
import Transition from "./Components/Transition";
const mintAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
ReactGA.initialize('UA-223827648-1');
ReactGA.pageview(window.location.pathname + window.location.search);


function App() {



    return (
        <div className='app'>
                <HeaderMobile/>
            <ScrollAnimate path={'bottom'}>
                <Trailer/>
            </ScrollAnimate>
            <ScrollAnimate path={'bottom'}>
                        <About/>
            </ScrollAnimate>
            <ScrollAnimate path={'bottom'}>
                <Team/>
            </ScrollAnimate>
            <ScrollAnimate path={'bottom'}>
                <Transition/>
            </ScrollAnimate>
            <ScrollAnimate path={'bottom'}>
                <CTA/>
            </ScrollAnimate>

            <ScrollAnimate path={'bottom'}>
                                <NewFaqAcc/>
            </ScrollAnimate>

                                <FaqJr/>
                                    <CookieConsent debug={false} location="bottom" buttonStyle={{ color: "#000", background: "#fff", fontSize: "14px", borderRadius: "10px"}}
                                        style={{background: "#1e1e1e", fontFamily: "Fredoka"}} contentStyle={{marginLeft: "13%"}}>
                                        Our website uses cookies to improve your experience 🍪
                                    </CookieConsent>
                                        <Footer />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet"/>


        </div>
    )
}export default App
