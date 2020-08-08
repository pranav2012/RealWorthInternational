import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../styles/fadeimg.scss';
import 'react-slideshow-image/dist/styles.css';

const FadeImage = () => {
  const fadeImages = [
    require("../assets/images/bag1.jpg"),
    require("../assets/images/bag2.jpg"),
    require("../assets/images/bag3.jpg"),
    require("../assets/images/bag4.jpg"),
    require("../assets/images/bag5.jpg")
  ];

  const properties = {
    duration: 2000,
    transitionDuration: 300,
    infinite: true,
    indicators: true,
    scale: 0.4,
  };


  return (
    <div className='fls'>
      <div className="slide-container">
        <Fade {...properties}>
        {
        fadeImages.map((img, index) =>
          <div key={index} className="each-fade">
            <img style={{height:"400px"}}  alt='img' src={img} />
          </div>)
        }
        </Fade>
      </div>
    </div>
  );
};

export default FadeImage;