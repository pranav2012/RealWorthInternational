import React from 'react';
import '../styles/App.scss';
import Header from '../Components/header';
import Slideshow from '../Components/Slideshow';
import Land from '../Components/land';

function App() {
  return (
    <div className="App">
        <Header/>
        <Land/>
        <Slideshow/>
    </div>
  );
}

export default App;
