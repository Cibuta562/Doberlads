import React from 'react'
import HeaderMobile from "./HeaderMobile";
import './RoadmapNew.css'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import logo from '../assets/Logo.png'
import 'react-animate-on-scroll'
import Footer from "./Footer";
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
                <div className="quarter1">
                    <h2>QUARTER 1</h2>
                    <div className="verticalLine1">

                    </div>
                    <div className="container_road">
                        <div  className="box_road">
                            <p className='p-road-new'>'Getting together and starting to know each other because the chemestry of a team is their most important asset. </p>
                        </div>

                        <div className="Done">
                            <h2>DONE</h2>
                        </div>
                    </div>

                    <div className="container_road">
                        <div className="box_road1">
                            <p>Making a plan in order to implement the ideas that were the basis of Doberlads: </p>
                            <p> -  A world ruled by Dobermans.</p>
                            <p> - A way to battle procrastination</p>
                        </div>
                        <div className="Done1">
                            <h2>DONE</h2>
                        </div>
                    </div>

                    <div className="container_road">
                        <div className="box_road">
                            <p className='p-road-new'>Starting to implement the plan in order to build a strong community and deliver a quality product. </p>
                        </div>
                        <div className="Done">
                            <h2>DONE</h2>
                        </div>
                    </div>
                </div>

                <div className="quarter2">
                    <h2>QUARTER 2</h2>
                    <div className="verticalLine2">

                    </div>
                    <div className="container_road">
                        <div className="box_road1">
                            <p >Starting events on discord such as movie nights, rap battles and esports tournaments in order to bond the community and also give
                                prizes such as Whitelist spots and much more. </p>
                        </div>
                        <div className="Done1">
                            <h2>DONE</h2>
                        </div>
                    </div>

                    <div className="container_road">
                        <div className="box_road">
                            <p className='p-road-new'>As our main goal is to embrace anti-procrastination, we will have weekly meetings on discord about the ways of beeing much more productive
                                and to make the most of our time. </p>
                        </div>
                        <div className="in_Progress">
                            <h2>IN PROGRESS</h2>
                        </div>
                    </div>

                    <div className="container_road">
                        <div className="box_road1">
                            <p >The mint will take place at the and of Q2. We are working really hard to make the minting experience like nothing else that has
                                already been done before, thus making the holders feel special. </p>
                        </div>
                        <div className="in_Progress1">
                            <h2>IN PROGRESS</h2>
                        </div>
                    </div>
                </div>

                <div className="quarter3">
                    <h2>QUARTER 3</h2>
                    <div className="verticalLine3">

                    </div>
                    <div className="container_road">
                        <div className="box_road">
                            <p className='p-road-new'>We will release the core of our project, our app, between the middle and the end of Q3. </p>
                        </div>
                        <div className="in_Progress">
                            <h2>IN PROGRESS</h2>
                        </div>
                    </div>

                    <div className="container_road">
                        <div className="box_road1">
                            <p >With the app, we will also release our token, which the holders can acquire by completing anti-procrastinating tasks. </p>
                        </div>
                        <div className="in_Progress1">
                            <h2>IN PROGRESS</h2>
                        </div>
                    </div>

                    <div className="container_road">
                        <div className="box_road">
                            <p className='p-road-new'>By having the Doberlads take over the world, as every leader knows, we can't divulge all the secrets, so stay tuned for more. </p>
                        </div>
                        <div className="in_Progress">
                            <h2>IN PROGRESS</h2>
                        </div>
                    </div>
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