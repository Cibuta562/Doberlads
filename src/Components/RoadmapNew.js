import React from 'react'
import HeaderMobile from "./HeaderMobile";
import './RoadmapNew.css'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import logo from '../assets/Logo.png'
import 'react-animate-on-scroll'
import Footer from "./Footer";
import ScrollAnimate from 'react-scroll-fade-animation';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";


const RoadmapNew = () => {

    return (
        <div className='roadmap_new'>
            <HeaderMobile />
            <div className='roadmap_section'>

                <ScrollAnimate path={'bottom'}>
                    <div className="explanation">
                        <h1 className='expTitle'>HOW IT WORKS?</h1>
                        <div className="done">
                            DONE
                        </div>
                        <div className="verticalLine"></div>
                        <div className="inProgress">
                            IN PROGRESS
                        </div>
                    </div>
                </ScrollAnimate>

                    <div className="quarter1">
                            <h2>QUARTER 1</h2>
                        <div className="verticalLine1"></div>

                        <ScrollAnimate path={'right'}>
                            <div className="container_road">
                                <div  className="box_road-q1-1">
                                    <p className='p-road-new'>Getting together and starting to know each other because the chemestry of a team is their most important asset. </p>
                                </div>
                            </div>
                        </ScrollAnimate>

                        <ScrollAnimate path={'left'}>
                            <div className="container_road">
                                <div className="box_road1-q1-1">
                                    <p>Making a plan in order to implement the ideas that were the basis of Doberlads: </p>
                                    <p> -  A world populated by Dobermans.</p>
                                    <p> - A way to battle procrastination</p>
                                </div>
                            </div>
                        </ScrollAnimate>

                        <ScrollAnimate path={'right'}>
                            <div className="container_road">
                                <div className="box_road-q1-2">
                                    <p className='p-road-new'>Starting to implement the plan in order to build a strong community and deliver a quality product. </p>
                                </div>
                            </div>
                        </ScrollAnimate>
                </div>

                <div className="quarter2">
                        <h2>QUARTER 2</h2>
                    <div className="verticalLine2"></div>

                    <ScrollAnimate path={"left"}>
                        <div className="container_road">
                            <div className="box_road1-q2-1">
                                <p>As our main goal is to embrace anti-procrastination, we will have weekly meetings on discord about the ways of beeing much more productive
                                    and to make the most of our time.</p>
                            </div>
                        </div>
                    </ScrollAnimate>

                    <ScrollAnimate path={'right'}>
                        <div className="container_road">
                            <div className="box_road-q2-1">
                                <p className='p-road-new'>Starting events on discord such as movie nights, rap battles and esports tournaments in order to bond the community and also give
                                    prizes such as Whitelist spots and much more.</p>
                            </div>
                        </div>
                    </ScrollAnimate>

                    <ScrollAnimate path={"left"}>
                        <div className="container_road">
                            <div className="box_road1-q2-2">
                                <p >The mint will take place at the and of Q2. We are working really hard to make the minting experience like nothing else that has
                                    already been done before, thus making the holders feel special. </p>
                            </div>
                        </div>
                    </ScrollAnimate>
                </div>

                <div className="quarter3">
                        <h2>QUARTER 3</h2>
                    <div className="verticalLine3"></div>

                    <ScrollAnimate path={'right'}>
                        <div className="container_road">
                            <div className="box_road-q3-1">
                                <p className='p-road-new'>We will release the core of our project, our app, between the middle and the end of Q3. </p>
                            </div>
                        </div>
                    </ScrollAnimate>

                    <ScrollAnimate path={"left"}>
                        <div className="container_road">
                            <div className="box_road1-q3-1">
                                <p >With the app, we will also release our token, which the holders can acquire by completing anti-procrastinating tasks. </p>
                            </div>
                        </div>
                    </ScrollAnimate>

                    <ScrollAnimate path={'right'}>
                    <div className="container_road">
                        <div className="box_road-q3-2">
                            <p className='p-road-new'>By having the Doberlads take over the world, as every leader knows, we can't divulge all the secrets, so stay tuned for more. </p>
                        </div>
                    </div>
                    </ScrollAnimate>
                </div>

                <Footer />
            </div>

            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>

        </div>
    )

}

export default RoadmapNew