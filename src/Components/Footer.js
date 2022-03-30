import React from 'react'
import './footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import discordIcon from "../assets/assets_website/discord-black-icon-703937.png";
import instagramIcon from "../assets/assets_website/5ecec78673e4440004f09e77.png";
import twitterIcon from "../assets/assets_website/pngwing.com.png";
import dubbsLogo from "../assets/header/logo_no_background.png";
import {Col, Container, NavLink, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Footer = () => {

    function moveToMint() {
        window.location.href = 'http://localhost:3000/mint'
    }

    function moveToTop(){
        window.scrollTo(0, 0);
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

    return (
        <div className='footer-big'>
            <div className="cards" style={{ backgroundColor: "#7388E1FF", margin: 0}}>
                <div className="card-logo display-footer" style={{position: "relative", backgroundColor: "#7388E1FF"}} >
                    <div className='footerLogo' onClick={moveToTop}>
                    <img src={dubbsLogo} className='footerLogo img-logo'  onClick={moveToTop}/>
                    <div className=' text-footer'>
                        <Link className="no-decorations l-text" to="/">
                            DoberLads
                        </Link>
                    </div>
                   </div>
                </div>
                <div className="card-logo" style={{position: "relative", backgroundColor: "#7388E1FF", margin: 0}}>
                    <div className="footerItems">
                    <Link className="no-decorations " to="/terms_of_service"><p className='terms'>Terms of Service</p></Link>
                    <p className='dash'>|</p>
                    <Link className="no-decorations " to="/privacy_policy"><p className='privacy'>Privacy Policy</p></Link>
                </div>
                </div>
                <div className="card-logo" style={{position: "relative", backgroundColor: "#7388E1FF", margin: 0}}>
                    <div className="copyrights">
                        <p className="terms">
                            © DoberLads
                        </p>
                </div>
                </div>
            </div>

        </div>

    )
}

export default Footer