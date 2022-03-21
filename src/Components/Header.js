import React from 'react'
import './header.css'
import Timer from '../Components/Timer'
import dobbsLogo from '../assets/header/img.png'
import twitterIcon from '../assets/assets_website/pngwing.com.png'
import discordIcon from '../assets/assets_website/discord-black-icon-703937.png'
import instagramIcon from '../assets/assets_website/5ecec78673e4440004f09e77.png'
import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";
import searchIcon from '../assets/header/search.png'


export function getCurrentDate(separator=''){
    let myCurrentDate = new Date()
    let date = myCurrentDate.getDate();
    let month = myCurrentDate.getMonth() + 1;
    let year = myCurrentDate.getFullYear();
}

const Header = () => {


    function moveToFAQ() {
        window.scrollTo(0,3400);
    }

    function moveToTeam() {
        window.scrollTo(0,1200);
    }

    function moveToAbout() {
        window.scrollTo(0,250);
    }

    function moveToTwitter(){
        window.location.href = "https://twitter.com/nftshub_";
    }

    function moveToDiscord(){
        window.location.href = "http://discord.gg/ZjtUSx9DjK";
    }

    function moveToInsta(){
        window.location.href = "https://www.instagram.com/nftshub_/";
    }

    const [counter, setCounter] = React.useState(60);

    // Timer
    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);


    return (

        <div className='header'>
            <link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap" rel="stylesheet"/>
            <div className='logoContainer'>
                <img src={dobbsLogo} className='dubbLogo' alt=''/>
            </div>
            <div className='headerItems'>
                <p className='abouthead' onClick={moveToAbout}>ABOUT</p>
                <p className='teamhead' onClick={moveToTeam}>TEAM</p>
                <p className='faqhead' onClick={moveToFAQ}>FAQ</p>
                <Link className="road-maphead" to="/roadmap">
                    <p className='road-maphead'>ROADMAP</p>
                </Link>
            </div>

            <div className='headerActions'>
                <div className="instagramContainerH" onClick={moveToInsta}>
                    <img src={instagramIcon}/>
                </div>
                <div className="twitterContainerH" onClick={moveToTwitter}>
                    <img src={twitterIcon}/>
                </div>
                <div className="discordContainerH" onClick={moveToDiscord}>
                    <img src={discordIcon}/>
                </div>
            </div>

        </div>
    )

}

export default Header
