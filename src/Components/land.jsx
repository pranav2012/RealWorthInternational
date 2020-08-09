import React from 'react';
import '../styles/land.scss';
import {home} from '../data/data';
import Typewriter from 'typewriter-effect';

export default function Land() {
    return (
        <div id='home' className='bg'>
            <div className='layer'>
            <Typewriter
                    options={{
                        strings: [home.home_heading],
                        autoStart: true,
                        loop: true,
                    }}
                    
            />
                <p className='summ'>{home.home_paragraph}</p>
                <button onClick={()=> window.location = "#products" } className='btn'>{home.home_btn_text}</button>
            </div>
        </div>
    )
}

