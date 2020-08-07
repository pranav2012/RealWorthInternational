import React from 'react';
import '../styles/App.scss';
import Header from '../Components/header';
//import Slideshow from '../Components/Slideshow';
import Land from '../Components/land';
import Contact from '../Components/Contact';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Land/>
      <Contact/>
    </div>
  );
}

export default App;
