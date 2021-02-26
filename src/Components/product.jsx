import React from 'react';
import Slideshow from '../Components/Slideshow';
import Gridcard from '../Components/Gridcard';
import {sleepingbagcard, portabletentcard, mosquitonetcard, process, filtration, hydraulics, metering, heating} from '../data/data';
import '../styles/product.scss';

function product() {
    return (
        <div id='products'>
            <Slideshow/>
            <div className="product__typebg">
                <h2>Process Control Equipments</h2>
                <Gridcard data={process} />
            </div>
            <div className="product__typebg">
                <h2>Filtration Services and Equipments</h2>
                <Gridcard data={filtration} />
            </div>
            <div className="product__typebg">
                <h2>Hydraulics Equipments</h2>
                <Gridcard data={hydraulics} />
            </div>
            <div className="product__typebg">
                <h2>Metering and Regulation Machinery and Equipments</h2>
                <Gridcard data={metering} />
            </div>
            <div className="product__typebg">
                <h2>Heat Tracing and Cathodic Protection Equipments</h2>
                <Gridcard data={heating} />
            </div>
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
