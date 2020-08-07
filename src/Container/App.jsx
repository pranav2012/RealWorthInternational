import React from 'react';
import '../styles/App.scss';
import Header from '../Components/header';
import Land from '../Components/land';
import Contact from '../Components/Contact';
import Footer from '../Components/footer';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Land/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
