import React from 'react';
import '../styles/land.scss';
import {home} from '../data/data';

export default function Land() {
    return (
        <div className='bg'>
            <div className='layer'>
            <h1 className='head'>{home.home_heading}</h1>
                <p className='summ'>{home.home_paragraph}</p>
                <button className='btn'>{home.home_btn_text}</button>
            </div>
        </div>
    )
}

