import React, { useState } from 'react';
import '../styles/header.scss';
import Cert from './cert.jsx';
import {btn_ref} from '../data/data';

function Header() {
    let [burgerclicked, setburger] = useState(false);

    return (
        <>
            <div className='sticky-header'>
                <div className='header'>
                    <div className='start'>
                        <h3 className='logo'><a href='#home'>RealWorthInternational</a></h3>
                        <ul className='subgrid'>
                            <li className='sublist'><a href={btn_ref.location} rel="noopener noreferrer" target="_blank"><i className="material-icons">place</i> U.P, India</a></li>
                            <li>|</li>
                            <li className='sublist gst'><a href='/gst.pdf' target="_blank"><i className="material-icons">assignment_turned_in</i> GST No.{btn_ref.gst}</a></li>
                            <li className='gst'>|</li>
                            <li ><a className='cert' href='/creg.pdf' target="_blank"> <Cert /> <p> TrustSEAL Verified</p></a></li>
                        </ul>
                    </div>
                    <ul className={`nav ${burgerclicked ? 'nav-active' : ''}`}>
                        <li className='item'><a href='#home'>Home</a></li>
                        <li className='item'><a href='#products'>Product</a></li>
                        <li className='item'><a href='#contact'>Contact Us</a></li>
                    </ul>
                    <div className={`burger ${burgerclicked ? 'toggle' : ''}`} onClick={() => { setburger(burgerclicked = !burgerclicked) }}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                </div>
            </div>
            <div className='navcover'></div>
        </>
    );
}

export default Header;
