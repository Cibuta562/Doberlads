import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/owner/x.svg";
import { ReactComponent as MenuIcon } from "../assets/owner/menu.svg";
import { ReactComponent as Logo } from "../assets/owner/menu.svg";
import "./HeaderMobile.css";
import {Link} from "react-router-dom";
import dobbsLogo from "../assets/assets_website/doberLogo.png";
import instagramIcon from "../assets/assets_website/5ecec78673e4440004f09e77.png";
import twitterIcon from "../assets/assets_website/pngwing.com.png";
import discordIcon from "../assets/assets_website/discord-black-icon-703937.png";

const HeaderMobile = () => {

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
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap" rel="stylesheet"/>
            <div className='logoContainer'>
                <Link classname="no-decorations" to="/">
                    <img src={dobbsLogo} className='doberLogo' />
                </Link>
            </div>
            <div className='headerItems' style={{marginBottom: "15px", marginRight: "120px", marginTop: "25px"}}>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option " onClick={closeMobileMenu}>
                        <Link   to="/" style={{ textDecoration: 'none', color: "rgb(0,0,20)"}}>
                            <p className='road-maphead' onClick={moveToAbout}>ABOUT</p>
                        </Link>
                    </li>
                    <li className="option" onClick={closeMobileMenu} >
                        <Link   to="/" style={{ textDecoration: 'none', color: "rgb(0,0,20)" }}>
                            <p className='road-maphead' onClick={moveToTeam}>TEAM</p>
                        </Link>
                    </li>
                    <li className="option " onClick={closeMobileMenu} >
                        <Link  to="/" style={{ textDecoration: 'none', color: "rgb(0,0,20)" }}>
                            <p className='road-maphead' onClick={moveToFAQ}>FAQ</p>
                        </Link>
                    </li>
                    <li className="option " onClick={closeMobileMenu} >
                        <Link  to="/roadmap"  style={{ textDecoration: 'none', color: "rgb(0,0,20)" }}>
                            <p className='road-maphead'>ROADMAP</p>
                        </Link>
                    </li>
                    <li className="option buttons"  onClick={closeMobileMenu} >
                        <div className='headerActions'>
                            <div className="instagramContainerH" >
                                <img src={instagramIcon} onClick={moveToInsta}/>
                            </div>
                            <div className="twitterContainerH" >
                                <img src={twitterIcon} onClick={moveToTwitter}/>
                            </div>
                            <div className="discordContainerH" onClick={moveToDiscord} >
                                <img src={discordIcon}/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon"/>
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    );
};

export default HeaderMobile;
