import React from 'react';
import Slideshow from '../Components/Slideshow';
import Gridcard from '../Components/Gridcard';
import {sleepingbagcard, portabletentcard, mosquitonetcard} from '../data/data';
import '../styles/product.scss';

function product() {
    return (
        <div id='products'>
            <Slideshow/>
            <div className="product__typebg">
                <h2>Sleeping Bag's</h2>
                <Gridcard data={sleepingbagcard} />
            </div>
            <div className="product__typebg">
                <h2>Portable Tents</h2>
                <Gridcard data={portabletentcard}/>
            </div>
            <div className="product__typebg">
                <h2>Mosquito Net's</h2>
                <Gridcard data={mosquitonetcard} />
            </div>
        </div>
    )
}

export default product
