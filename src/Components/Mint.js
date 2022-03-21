import React from 'react'
import MetaMaskOnboarding from '@metamask/onboarding';
import './Mint.css'
import "./Mint.scss"
import nft from'../assets/Aqua.png'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState} from "react";
import mint from "../../src/mintAbi.json"
import Metamask from "./Metamask";
import caine from "../assets/owner/Caine_Web3.jpeg";
import Header from "./Header";
import Faq from "./Faq";
import Footer from "./Footer";
import LinksFooter from "./LinksFooter";
const mintAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const onboarding = new MetaMaskOnboarding();

const Mint = () => {

    const [accounts, setAccounts] = useState([]);

    async function connectAccounts() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
            connectMetaMask();
        }
    }

    useEffect(() => {
        connectAccounts();

    }, []);

//MINTAT COAIE//

    const [mintAmount, setMintAmount] = useState(1);
    const [sum, setSum] = useState(0.123);
    const [text, setText] = useState(["NFT"]);
    const [meta, setMetaMask] = useState("Please connect your wallet");
    const [href, sethref] = useState("https://metamask.io/download/");

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                mintAddress,
                mint.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log("response ", response);
            } catch (err) {
                console.log("error: ", err);
            }
        }
    }

    function connectMetaMask() {
        if (window.ethereum) {
            setMetaMask("Buy NFT");
            sethref("javascript:;")
        }
        if (!window.ethereum) {
            setMetaMask("Please connect your wallet");
            sethref("https://metamask.io/download/")
        }

    }




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
        connectMetaMask()
        showMint();
    }

    function functions2() {
        handleMint()
    }

    function metaMask() {
        onboarding.startOnboarding();
    }

    function calculator() {

    }

    function refresh () {
        window.location.reload();
    }



    /////////////METAMASK COAIE/////////////


    //<a href={href} className="line">{meta}</a>

    ////////////////////////////////////////


    return (
        <div className='mint'>
            <Header/>
        <div className="space-up"></div>
        <div className="column-text"></div>
            <div className="space-up"></div>
            <div className="column rainbow " style={{ marginLeft: 'auto', marginRight: 'auto'}}>
            <div className="card">
                <img className='contract-pic' src={caine}/>
                <div className="container">
                    <Metamask/>
                    <button className="mint-button-sign" onClick={refresh}>Refresh</button>
                    {accounts.length && (
                        <div>
                            <button onClick={functions} className="mint-button-sign">-</button>
                            <button onClick={functions2} className="mint-button">MINT {mintAmount} {text}</button>
                            <button className="mint-button-sign" onClick={functions1}>+</button>
                            <p className="mint-button-sign">TOTAL: {sum} ETH</p>
                        </div>
                    )}
                </div>
            </div>
            </div>
            <div className="space">

            </div>
            <div className="space">

            </div>

            <div className="space">

            </div>
            <Footer/>
        </div>
    )
}

export default Mint