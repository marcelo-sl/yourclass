import React from 'react';
import './App.css';
import './Overrides.css';

import Navb from './components/Navb';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Search from './components/Search';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navb />    
      <Slider />
      <Search /> 
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
