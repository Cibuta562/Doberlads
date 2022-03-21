import React from 'react';
import Team from './Team'
import About from "./About";
import {findAllByTestId} from "@testing-library/react";

const AbtTeam = () =>{
    return (
        <div className='abtTeam'>
            <About/>
                <Team />
        </div>
    )
}

export default AbtTeam;