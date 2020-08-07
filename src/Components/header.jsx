import React , {useState} from 'react';
import '../styles/header.scss';
import Cert from '../assets/cert';

function Header() {
    let [burgerclicked, setburger] = useState(false);

    return (
        <div className='header'>
            <div className='start'>
                <h3 className='logo'><a href='/'>RealWorthInternational</a></h3>
                <ul className='subgrid'>
                    <li className='sublist'><i class="material-icons">place</i> New Delhi, India</li>
                    <li>|</li>
                    <li className='sublist gst'><i class="material-icons">assignment_turned_in</i> GST No. 08H5T4BGJNJK332</li>
                    <li className='gst'>|</li>
                    <li ><a className='cert' href='/#'> <Cert /> <p> TrustSEAL Verified</p></a></li>
                </ul>
            </div>
            <ul className={`nav ${burgerclicked?'nav-active':''}`}>
                <li className='item'><a href='/'>Home</a></li>
                <li className='item'><a href='#products'>Product</a></li>
                <li className='item'><a href='#contact'>Contact Us</a></li>
            </ul>
            <div className={`burger ${burgerclicked?'toggle':''}`} onClick={()=>{setburger(burgerclicked=!burgerclicked)}}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </div>
    );
}

export default Header;
