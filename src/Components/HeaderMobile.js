import React, { useState, useEffect } from "react";
import { ReactComponent as CloseMenu } from "../assets/owner/x.svg";
import { ReactComponent as MenuIcon } from "../assets/owner/menu.svg";
import { ReactComponent as Logo } from "../assets/owner/menu.svg";
import "./HeaderMobile.css";
import {Link} from "react-router-dom";
import dobbsLogo from "../assets/llogo.png";
import instagramIcon from "../assets/assets_website/5ecec78673e4440004f09e77.png";
import twitterIcon from "../assets/assets_website/pngwing.com.png";
import discordIcon from "../assets/assets_website/discord-black-icon-703937.png";

const HeaderMobile = () => {

        const mql = window.matchMedia('(max-width: 600px)');
        let mobileView = mql.matches;

        const tql = window.matchMedia('(max-width: 900px)');
        let tabletView = tql.matches;

        const tlql = window.matchMedia('(max-width: 1100px)');
        let tabletLandView = tlql.matches;

        const dql = window.matchMedia('(min-width: 1280px)');
        let desktopView = dql.matches;

        const [header, setHeader] = useState("header")


            const listenScrollEvent = (event) => {
                if (window.scrollY < 2100 && desktopView) {
                    return setHeader("header")
                } else if (window.scrollY > 2150 && desktopView) {
                    return setHeader("header2")
                }
                else if (window.scrollY < 3400 && mobileView) {
                    return setHeader("header")
                } else if (window.scrollY > 3450 && mobileView) {
                    return setHeader("header2")
                }
                  else if (window.scrollY < 3600 && tabletView) {
                    return setHeader("header")
                } else if (window.scrollY > 3650 && tabletView) {
                    return setHeader("header2")
                }
                else if (window.scrollY < 2250 && tabletLandView) {
                    return setHeader("header")
                } else if (window.scrollY > 2300 && tabletLandView) {
                    return setHeader("header2")
                }
            }




        useEffect(() => {
            window.addEventListener('scroll', listenScrollEvent);

            return () =>
                window.removeEventListener('scroll', listenScrollEvent);
        }, []);

    function componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    function moveToFAQ() {
        window.scrollTo(0,3400);
    }

    function moveToTeam() {
        window.scrollTo(0,1200);
    }

    function moveToDoberlads() {
        window.scrollTo(0,0);
    }

    function moveToTwitter(){
        window.open ("https://twitter.com/DoberLads");
    }

    function moveToDiscord(){
        window.open ("https://discord.gg/hCdmCCJdfx");
    }

    function moveToInsta(){
        window.open ("https://www.instagram.com/doberlads/");
    }

    function moveToTop() {
        window.scrollTo(0,0);
    }

    function mobileAndMove(){
        moveToTop();
        closeMobileMenu();
    }

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className={header}>
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
                            <p className='road-maphead' onClick={moveToDoberlads}>DOBERLADS</p>
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
                    <li className="option " onClick={mobileAndMove} >
                        <Link  to="/roadmap" style={{ textDecoration: 'none', color: "rgb(0,0,20)" }}>
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
