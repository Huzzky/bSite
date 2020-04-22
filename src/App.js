import React from 'react';
import './App.css';
import NAV from './components/nav';
import About from './components/about';
import BOA from './components/boa';
import ContactUS from './components/cu';

function App() {
  return (
    <div className="all">
      <NAV/>
      <About/>
      <BOA/>
      <ContactUS/>
    </div>
  );
}

export default App;
