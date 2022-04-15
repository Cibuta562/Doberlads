import React, { useEffect } from 'react';
import "./CTA.css"
import {Card, Col, Container, Row} from "react-bootstrap";
import {Button} from "bootstrap";
import test_cta from  "../assets/cta_test.jpg" ;
import {Link} from "react-router-dom";
import RoadMap from "./RoadMap";

const CTA = () => {


    function moveToDis(){
        window.open("https://discord.gg/hCdmCCJdfx");
    }

    function moveToTwitter(){
        window.open("https://twitter.com/DoberLads");
    }



    return (
        <div className='call-to-action'>
                <div className="call-space"></div>

            <div className="col-call col-margin">
            <div className="card-call">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                    </div>
                </div>
            </div>
                <div className="card-call1" onClick={moveToDis}>
                    <div style={{position: "relative"}}  style={{marginTop:"10px"}}>
                        <img className="img-call" src={test_cta} />
                    <p className="names-call">Join our pack</p>
                    <p  className="names-call-p">You can access our growing community and share your knowledge with other NFT fans.</p>
                    </div>
                </div>
            </div>

            <div className="col-call col-margin">
                <div className="card-call ">
                    <div className="icon" style={{marginTop:"10px"}}>
                        <div className="continut">
                        </div>
                    </div>
                </div>
                <div className="card-call1" onClick={moveToTwitter}>
                    <div  style={{marginTop:"10px"}}>
                        <div style={{position: "relative"}}>
                            <img className="img-call" src={test_cta} />
                            <p className="names-call">Always evolving</p>
                            <p  className="names-call-p">Stay tuned to all our new events. Be the first to see our latest updates and giveaways.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-call">
                <div className="card-call">
                    <div className="icon" style={{marginTop:"10px"}}>
                        <div className="continut">
                        </div>
                    </div>
                </div>
                <Link to="/roadmap">
                <div className="card-call1" >
                    <div style={{marginTop:"10px"}}>
                        <div style={{position: "relative"}}>
                            <img className="img-call" src={test_cta} />
                            <p className="names-call">Our main priority</p>
                            <p  className="names-call-p">We are creating life changing habits rewarding users with Doberlads Token.</p>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
            <div className="call-space"></div>
        </div>
    )
}

export default CTA