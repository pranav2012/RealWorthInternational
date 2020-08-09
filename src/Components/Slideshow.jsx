import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../styles/fadeimg.scss';
import 'react-slideshow-image/dist/styles.css';

const FadeImage = () => {
  const fadeImages = [
    "https://us.123rf.com/450wm/gilitukha/gilitukha1801/gilitukha180100094/93808056-traveler-making-coffee-in-cezve-on-a-gas-burner-in-the-mountains-in-turkey.jpg?ver=6",
    "https://us.123rf.com/450wm/zhukovvvlad/zhukovvvlad1511/zhukovvvlad151100376/48308590-girl-sitting-in-a-sleeping-bag-and-drinking-hot-drink-.jpg?ver=6",
    "https://us.123rf.com/450wm/shaiith/shaiith1801/shaiith180100170/93514113-view-from-tent-to-sunset-in-mountains-in-summer-poland-.jpg?ver=6",
    "https://us.123rf.com/450wm/vitalalp/vitalalp1801/vitalalp180100324/93206278-camping-on-the-river-bank-the-solar-panel-hangs-on-the-tent-.jpg?ver=6",
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