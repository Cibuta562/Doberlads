
import './App.css';
import Trailer from "./Components/Trailer.js";
import Footer from "./Components/Footer";
import Team from "./Components/Team"
import Mint from './Components/Mint'
import "animate.css/animate.min.css";
import Faq from "./Components/Faq"
import HeaderMobile from "./Components/HeaderMobile";
import About from "./Components/About"
import React, { useEffect, useState, Component} from "react";
import FaqJr from "./Components/FaqJr";
import Timer from "./Components/Timer";
import AbtTeam from './Components/AbtTeam'
import "./Fonts/Roboto/Roboto-Bold.ttf";
import "./Fonts/BebasNeue/BebasNeue/TTF/BebasNeue-Bold.ttf";
import "./Fonts/Archive/Archive/Commercial/OTF/Archive-Regular.otf";
import "./Fonts/Roboto/Roboto-Black.ttf";
import CookieConsent from "react-cookie-consent";
import ScrollAnimate from "react-scroll-fade-animation";
import ReactGA from 'react-ga';
import NewFaqAcc from "./Components/NewFaqAcc";
import CTA from "./Components/CTA";
import Transition from "./Components/Transition";
import loading from "../src/assets/assets_website/hypno (1).gif";
import Page from 'react-page-loading'
import LoadingScreen from "react-loading-screen";
ReactGA.initialize('UA-223827648-1');
ReactGA.pageview(window.location.pathname + window.location.search);


function App() {

    const [isLoding, setIsLoding] = useState(true);


    useEffect(() => {

        setTimeout(() => {
            setIsLoding(false);
        }, 3000);
    }, []);


    return (
        <div className='app'>
            {isLoding ? (
                <LoadingScreen
                    loading={true}
                    bgColor="linear-gradient(to bottom, #7388e1,#2344b9, #7388E1FF)"
                    spinnerColor="#9ee5f8"
                    textColor="#676767"
                    //logoSrc={loading}
                    //text="Loading..."
                />
            ) : ( <>
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
            </>  )}
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet"/>


        </div>
    )
}export default App
