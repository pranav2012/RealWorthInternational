import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../styles/fadeimg.scss';
import 'react-slideshow-image/dist/styles.css';
import one from "../assets/images/temp.jpg";

const FadeImage = () => {
  const fadeImages = [
    one,
    "https://us.123rf.com/450wm/shaiith/shaiith1801/shaiith180100170/93514113-view-from-tent-to-sunset-in-mountains-in-summer-poland-.jpg?ver=6",
    "https://us.123rf.com/450wm/pavilion016/pavilion0161802/pavilion016180200005/104951501-new-born-baby-sleeping-in-mosquito-net-baby-in-thailand.jpg?ver=6"
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