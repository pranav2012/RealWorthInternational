import React from 'react';
import '../styles/map.scss';

function Map() {
    return (
        <div className='map'> {/* eslint-disable-next-line*/}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.4812980555!2d77.0688978924221!3d28.527280342051878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1596649234189!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:"1"}} allowfullscreen="false" aria-hidden="false" tabindex="0"></iframe>
        </div>

    )
}

export default Map;

