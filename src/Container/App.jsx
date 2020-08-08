import React from 'react';
import '../styles/App.scss';
import Header from '../Components/header';
import Land from '../Components/land';
import Product from '../Components/product';
import Contact from '../Components/Contact';
import Footer from '../Components/footer';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Land/>
      <Product/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
