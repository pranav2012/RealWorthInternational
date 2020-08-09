import React from 'react';
import '../styles/map.scss';
import { address } from '../data/data';

function Map() {
    return (
        <div className='map'> {/* eslint-disable-next-line*/}
            <iframe src={address.map_embeded} width="600" height="450" frameBorder="0" style={{border:"1"}} allowFullScreen={false} aria-hidden="false" tabIndex="0"></iframe>
        </div>

    )
}

export default Map;

