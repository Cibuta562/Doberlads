import React from 'react'
import './Mint.css'
import { useEffect, useState} from "react";
import Footer from "./Footer";
import LinksFooter from "./LinksFooter";
import HeaderMobile from "./HeaderMobile";
import nftBg from "../assets/mint_pic-removebg-preview.png";

const Mint = () => {


//MINTAT COAIE//

    const [mintAmount, setMintAmount] = useState(1);
    const [sum, setSum] = useState(2);
    const [text, setText] = useState([" DOBERLAD"]);
    const [meta, setMetaMask] = useState("Please connect your wallet");
    const [href, sethref] = useState("https://metamask.io/download/");



    function numberOfMintsDecrease() {

        if (mintAmount === 2) {
            setText("DOBERLAD");
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
            setText("DOBERLADS");
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
                <section>

                        <div className="background-img">
                            <div className="box-mint">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="box-mint-text">
                                <div className="content-mint" style={{alignContent: "center"}}>
                                    <center>
                                        <h2>Chose how many NFTS you want to mint</h2>
                                        <div>
                                            <button className='mintButton1-mint-sign' onClick={numberOfMintsDecrease}>
                                                -
                                            </button>
                                            <span className="mintButton1-mint-amount" style={{marginRight: "8px", marginLeft: "8px"}}>
                                                {mintAmount} {text}
                                            </span>
                                            <button className='mintButton1-mint-sign' onClick={numberOfMintsIncrease}>
                                                +
                                            </button>
                                        </div>
                                        <div className="mintButton1-mint-no-hover">
                                            {sum} SOL
                                        </div>
                                    <button className='mintButton1-mint'>
                                        MINT
                                    </button>
                                    </center>
                                </div>
                            </div>
                    </div>
                </section>
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