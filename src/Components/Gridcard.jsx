import React from 'react';
import Card from '../Components/card';

export default function GridCard({data}) {
  return (
    <div className='gridlist'>
        {data.map((dt,i) => (
          <Card key={i} data={dt} />
        ))}
    </div>
  );
}
