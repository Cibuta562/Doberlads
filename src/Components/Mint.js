import React from 'react'
import './Mint.css'
import { useEffect, useState} from "react";
import Footer from "./Footer";
import LinksFooter from "./LinksFooter";
import HeaderMobile from "./HeaderMobile";

const Mint = () => {


//MINTAT COAIE//

    const [mintAmount, setMintAmount] = useState(1);
    const [sum, setSum] = useState(0.123);
    const [text, setText] = useState(["NFT"]);
    const [meta, setMetaMask] = useState("Please connect your wallet");
    const [href, sethref] = useState("https://metamask.io/download/");



    function numberOfMintsDecrease() {

        if (mintAmount <= 2) {
            setText("NFT");
        }
        if(mintAmount <= 1){
            setMintAmount(1);
        }
        if (mintAmount > 1) {
            setMintAmount(mintAmount - 1)
            setSum(sum-0.123);
        }

    }

    function numberOfMintsIncrease() {

        if (mintAmount >= 1 && mintAmount <= 10) {
            setText("NFTS");
        }
        if (mintAmount >= 10) {
            setMintAmount(10);
        } else {
            setMintAmount(mintAmount + 1)
            setSum(sum+0.123);
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
                                <div className="content-mint">
                                    <h2 style={{color: "aliceblue"}}>My animated Border </h2>
                                    <p><a>All our modules are designed to play nicely with responsive of course. At the
                                        end of the day it comes down to the theme you use - our code doesn't get in your
                                        way.</a></p>
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