import React from 'react'
import DobTrailer from '../assets/DobTrailer.mp4'
import './Trailer.css'


const Trailer = () => {
    return (
        <div className='trailer' id="bg-video">
            <h1 className='titluTrailer'>DOBERLADS</h1>
            <video loop autoPlay>
                <source src={DobTrailer} type="video/mp4"/>
            </video>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
        </div>
    )
}

export default Trailer