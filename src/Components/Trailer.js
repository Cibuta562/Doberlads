import React from 'react'
import DobTrailer from '../assets/DobTrailer.mp4'
import './Trailer.css'
import video1 from "../assets/video/amsterdam.mp4"

const Trailer = () => {
    return (
        <div className='trailer'>
            <video className='video' autoPlay loop muted>
                <source src={DobTrailer} type="videdo/mp4"/>
            </video>
            <h1 className='titluTrailer'>DOBERLADS</h1>

            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
        </div>
    )
}

export default Trailer