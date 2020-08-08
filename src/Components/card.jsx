import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';


export default function Cards({data}) {
  return (
    <div className="cards">
      <Zoom><img className='cardimg' src={data.img} alt="product"></img></Zoom>
      <h3>{data.title}</h3>
    </div>
  );
}
