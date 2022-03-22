import React from 'react'
import './road.css'
import './RoadMap.scss'
import Footer from "./Footer";
import {useState} from 'react'
import HeaderMobile from "./HeaderMobile";
import Dober1 from "../assets/assets_website/dober.png";
import "animate.css/animate.min.css";
import ScrollAnimate from 'react-scroll-fade-animation';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import ScrollAnimation from "react-animate-on-scroll";



const RoadMap = () => {

    function moveQ1(){
        window.scrollTo(0, 800)
    }

    function moveQ2(){
        if(showQ1 === true){
            window.scrollTo(0, 1875)
        }
        else {
            window.scrollTo(0, 1300)
        }
    }

    function moveQ3(){
        if(showQ1 === true && showQ2 === false){
            window.scrollTo(0, 2900)
        }
        else if(showQ1 === false && showQ2 === true){
            window.scrollTo(0, 3200)
        }
        else if(showQ1 === true && showQ2 === true){
            window.scrollTo(0, 4100)
        }
        else {
            window.scrollTo(0, 2000)
        }
    }

    function settingShowQ1(){
        (setShowQ1(!showQ1));
        moveQ1()
    }

    function settingShowQ2(){
        (setShowQ2(!showQ2));
        moveQ2()
    }

    function settingShowQ3(){
        (setShowQ3(!showQ3));
        moveQ3()
    }

    const [showQ1, setShowQ1] = useState(false);
    const [showQ2, setShowQ2] = useState(false);
    const [showQ3, setShowQ3] = useState(false);


    const text = "> Q1 is all about planning and setting up the project <";
    const text2 = "> Q2 is all about forming a self-driven and self-dependent community with a focus on Live Events, Community talks, and the Release. Live Streamed Contests,\n" +
        "                        Entertaining clips, and many more activities are just some of the long-awaited community bonding events. All of these activities are meant for both amusement\n" +
        "                        and WhiteList sports awards. The end of Q2 will consist of the release and the minting event, available for the WhiteList 24 hours before the general public <"
    const text3 = "> Q3 is all about innovation and development <"
    return (

        <div className='road-map'>
            <HeaderMobile />
            <div className="titleRoad">
                    <h1 className="roadmap-title">ROADMAP</h1>
            </div>
            <ScrollAnimate path={'bottom'}>
            <div className="road-map-q1-text">

                <section className="road-map-q1-text-shown">
                    <h3>(Quarter 1)</h3>
                    <p>{text}</p>
                    <p>Ideas, meetings and rewards solely dedicated towards the community are brewing. Every detail and feature has been carefully considered. Accordingly, we only
                        want to provide you with the best experience available in the NFT market space. Thus, the end of Q1 is meant to bring all of these to your attention through
                        announcements on all the platforms we are registered on. The result could easily be seen in the events planned for you in Q2 and Q3. It’s worth remembering that
                        it’s just the beginning … the best is yet to come.</p>
                </section>

                <section className={showQ1 === true ? 'road-map-q1-text-unshown-show' : 'road-map-q1-text-unshown'}>
                    <div className="text-center-roadmap">
                    <h3 style={{marginTop: "30px"}}>Middle of Q1:</h3>
                    <p>- Coming up with the project. -</p>
                    <p>- Forming the team. -</p>
                    <p>- Setting the bases of the project. -</p>
                    <p>- Discussing and preparing the ideas. -</p>
                    <p>- Coming up with a crystal clear plan. -</p>
                    <h3> End of Q1:</h3>
                    <p>- Making and releasing the website. -</p>
                    <p>- Beginning of marketing and branding. -</p>
                    <p>- Setting up the Discord and social media platforms. -</p>
                    </div>
                </section>
                <button onClick={settingShowQ1} className={showQ1 === false ? 'read-more-btn' : 'read-more-btn'} >{showQ1 === false ? 'READ MORE >>>' : 'READ LESS <<<'}</button>
            </div>
            </ScrollAnimate>

            <ScrollAnimate path={'bottom'}>
            <div className="road-map-q2-text">
                <section className='road-map-q2-text-shown'>
                    <h3>(Quarter 2) </h3>
                    <p>{text2}</p>
                </section>
                <section className={showQ2 == true ? 'road-map-q2-text-unshown-show' : 'road-map-q2-text-unshown'}>
                    <h3>Beginning of Q2:</h3>
                    <p>- Focusing on building a community. -</p>
                    <p>- Community events such as Esports tournaments, Movie Nights, Rap Battle, Online Board Games (Jackbox) etc. -</p>
                    <h3>Middle of Q2:</h3>
                    <p>- Filling up the whitelist. -</p>
                    <p>- Releasing new content such as sneak peaks, guides and a trailer for the project. -</p>
                    <h3>End of Q2:</h3>
                    <p>- Minting & Release -</p>
                    <p>- Reveal (Live Event with the developers) -</p>
                </section>
                <button className='read-more-btn' onClick={settingShowQ2}>{showQ2 === false ? 'READ MORE >>>' : 'READ LESS <<<'}</button>
            </div>
            </ScrollAnimate>


            <ScrollAnimate path={'bottom'}>
            <div className="road-map-q3-text" style={{textAlign: "center"}}>
                <section className='road-map-q3-text-shown'>
                    <div className="text-center-roadmap">
                    <h3>(Quarter 3)</h3>
                    <p>{text3}</p>
                    <p>- We have planned 3 ground-breaking ideas for every investor to enjoy: -</p>
                    <p>- Utility: DobberLads App (The DobberLads application is the element that elevates the project to the trait of real-world utility. The app has 2 impactful purposes:
                        helping people become more productive and allowing people to personalize their pieces of DobberLads art.
                        Accordingly, not only does it have in-app rewards for cutting down the usage of the device, but also has purchasable packs of layers.
                        A piece of a better future starts with DobberLads.) -</p> </div>
                </section>

                <section className={showQ3 === true ? 'road-map-q3-text-unshown-show' : 'road-map-q3-text-unshown'}>
                    <p>- Aspect & Rarity: Partnerships (After the minting event, we planned on accumulating a pool of 25% of our royalties destined for partnerships. -</p>
                    <p>- In our view, a partnership should be exciting and desirable. Consequently, we came up with 2 scenarios: a partnership of 3 exclusive Doberman NFTs done in the style of other NFT houses and premium DobberLads with layers of real-life exquisite brands.) -</p>
                    <p>- Humanitarian: Planting 5 trees for every NFT Minted. -</p>
                    <p>- Release the 2nd phase of the Roadmap. -</p>
                </section>
                <button className='read-more-btn' onClick={settingShowQ3}>{showQ3 === false ? 'READ MORE >>>' : 'READ LESS <<<'}</button>
            </div>
            </ScrollAnimate>

            <Footer />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
        </div>

    )

}

const data = [
    {
        showLess: ' 1st Phase\n' +
            '                    (Quarter 1)\n' +
            '                    >>  Q1 is all about planning and setting up the project.\n' +
            '                    - Ideas, meetings and rewards solely dedicated towards the community are brewing. Every detail and feature has been carefully considered. Accordingly, we only\n' +
            '                    want to provide you with the best experience available in the NFT market space. Thus, the end of Q1 is meant to bring all of these to your attention through\n' +
            '                    announcements on all the platforms we are registered on. The result could easily be seen in the events planned for you in Q2 and Q3. It’s worth remembering that\n' +
            '                    it’s just the beginning … the best is yet to come.',
        showMore:
            'Middle of Q1:\n' +
            '                    - Coming up with the project.\n' +
            '                    - Forming the team.\n' +
            '                    - Setting the bases of the project.\n' +
            '                    - Discussing and preparing the ideas.\n' +
            '                    - Coming up with a crystal clear plan.\n' +
            '                    End of Q1:\n' +
            '                    - Making and releasing the website.\n' +
            '                    - Beginning of marketing and branding.\n' +
            '                    - Setting up the Discord and social media platforms.',
    },
    {
        showLess: '(Quarter 2) \n' +
            '>>  Q2 is all about forming a self-driven and self-dependent community with a focus on Live Events, Community talks, and the Release. Live Streamed Contests, \n' +
            '       Entertaining clips, and many more activities are just some of the long-awaited community bonding events. All of these activities are meant for both amusement \n' +
            '       and WhiteList sports awards. The end of Q2 will consist of the release and the minting event, available for the WhiteList 24 hours before the general public.',
        showMore:
            'Beginning of Q2:\n' +
            '- Focusing on building a community.\n' +
            '- Community events such as Esports tournaments, Movie Nights, Rap Battle, Online Board Games (Jackbox) etc.\n' +
            'Middle of Q2:\n' +
            '- Filling up the whitelist.\n' +
            '- Releasing new content such as sneak peaks, guides and a trailer for the project.\n' +
            'End of Q2:\n' +
            '- Minting & Release\n' +
            '- Reveal (Live Event with the developers)',
    },
    {
        showLess: '(Quarter 3) \n' +
            '>>  Q3 is all about innovation and development.'+
            '- We have planned 3 ground-breaking ideas for every investor to enjoy:\n' +
            '      - Utility: DobberLads App (The DobberLads application is the element that elevates the project to the trait of real-world utility. The app has 2 impactful purposes: helping people become more productive and allowing people to personalize their pieces of DobberLads art. Accordingly, not only does it have in-app rewards for cutting down the usage of the device, but also has purchasable packs of layers. A piece of a better future starts with DobberLads.)\n' +
            '      - Aspect & Rarity: Partnerships (After the minting event, we planned on accumulating a pool of 25% of our royalties destined for partnerships. \n' +
            'In our view, a partnership should be exciting and desirable. Consequently, we came up with 2 scenarios: a partnership of 3 exclusive Doberman NFTs done in the style of other NFT houses and premium DobberLads with layers of real-life exquisite brands.)\n' +
            '      - Humanitarian: Planting 5 trees for every NFT Minted\n' +
            '- Release the 2nd phase of the Roadmap.\n',
    }
]

export default RoadMap
