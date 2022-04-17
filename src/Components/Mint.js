import React from 'react'
import './Mint.css'
import Footer from "./Footer";
import LinksFooter from "./LinksFooter";
import HeaderMobile from "./HeaderMobile";
import nftBg from "../assets/mint_pic-removebg-preview.png";
import { FC, useEffect, useState } from "react";





const Mint = () => {



    const [mintAmount, setMintAmount] = useState(1);
    const [sum, setSum] = useState(2);
    const [text, setText] = useState([" DOB"]);
    const [meta, setMetaMask] = useState("Please connect your wallet");
    const [href, sethref] = useState("https://metamask.io/download/");
    const [nrMint, setNrMint] = useState(0);



    function numberOfMintsDecrease() {

        if (mintAmount === 2) {
            setText("DOB");
        }
        if(mintAmount <= 1){
            setMintAmount(1);
        }
        if (mintAmount > 1) {
            setMintAmount(mintAmount - 1)
            setSum(sum-2);
        }

    }

    function numberOfMintsIncrease() {

        if (mintAmount === 1) {
            setText("DOBS");
        }
        if (mintAmount >= 2) {
            setMintAmount(2);
        } else {
            setMintAmount(mintAmount + 1)
            setSum(sum+2);
        }
    }

    let ok = 0;

    function showMint() {

    }


    function functions() {
        numberOfMintsDecrease();
        showMint();
    }

    function functions1() {
        numberOfMintsIncrease()
        showMint();
    }



    /////////////METAMASK COAIE/////////////


    //<a href={href} className="line">{meta}</a>

    ////////////////////////////////////////


    return (
        <div className='mint'>
            <link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap" rel="stylesheet"/>
            <HeaderMobile/>
            <div className="mint-content">
                <div className="mint-h">
                    <h2 className="heading-h">Become a doberlads holder</h2>
                    <p className="heading-p">By holding a Doberlad you become aligible to do challanges in our app and by doing so you will get rewarded with our token</p>
                </div>
                <section>

                        <div className="background-img" >
                            <div className="box-mint">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="box-mint-text">
                                <div className="content-mint" style={{alignContent: "center"}}>
                                    <center>
                                        <h2>Chose how many DOBERLADS you want to mint</h2>
                                        <div style={{marginTop: "20px"}}>
                                            <button className='mintButton1-mint-sign' onClick={numberOfMintsDecrease}>
                                                -
                                            </button>
                                            <button className="mintButton1-mint-amount" style={{marginRight: "8px", marginLeft: "8px"}}>
                                                {mintAmount} {text}
                                            </button>
                                            <button className='mintButton1-mint-sign' onClick={numberOfMintsIncrease}>
                                                +
                                            </button>
                                        </div>
                                        <div className="mintButton1-mint-no-hover">
                                            {sum} SOL
                                        </div>
                                    <div className='mintButton1-mint'>
                                        MINT
                                    </div>
                                    </center>
                                </div>
                            </div>
                    </div>
                </section>
                <div className="nr-mints">
                    <p>{nrMint}/10.000 Minted</p>
                </div>
            </div>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet"/>
            <Footer/>
        </div>
    )
}

export default Mint