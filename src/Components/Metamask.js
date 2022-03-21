import MetaMaskOnboarding from '@metamask/onboarding';
import React from 'react';
import './Mint.css'
import { ethers, BigNumber } from "ethers";
import App from "../App";
import {Web3Provider} from "@ethersproject/providers";

const ONBOARD_TEXT = 'CLICK HERE TO INSTALL METAMASK!';
const CONNECT_TEXT = 'CONNECT TO METAMASK!';
const CONNECTED_TEXT = 'YOUR WALLET IS CONNECTED!!';



const Metamask = () => {
    const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
    const [isDisabled, setDisabled] = React.useState(false);
    const [accounts, setAccounts] = React.useState([]);
    const onboarding = React.useRef();

    React.useEffect(() => {
        if (!onboarding.current) {
            onboarding.current = new MetaMaskOnboarding();
        }
    }, []);



    React.useEffect(() => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            if (accounts.length > 0) {
                setButtonText(CONNECTED_TEXT);
                setDisabled(false);
                onboarding.current.stopOnboarding();

            } else {
                setButtonText(CONNECT_TEXT);
                setDisabled(false);
            }
        }
    }, [accounts]);


    React.useEffect(() => {
        function handleNewAccounts(newAccounts) {
            setAccounts(newAccounts);
        }
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then(handleNewAccounts);
            window.ethereum.on('accountsChanged', handleNewAccounts);
            return () => {
                window.ethereum.off('accountsChanged', handleNewAccounts);
            };
        }


    }, []);

    const onClick = () => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then((newAccounts) => setAccounts(newAccounts));
        } else {
            onboarding.current.startOnboarding();
        }
    };

    function clickRefresh(){
        onClick();
        window.location.reload();
    }




    return (
        <button className="mint-button-sign" disabled={isDisabled} onClick={clickRefresh}>
            {buttonText}
        </button>
    );
}
export default Metamask;