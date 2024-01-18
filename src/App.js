import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Ingredients from './components/ingredients';

function App() {
  return (
    <>
      <Navbar title='Burger Builder'/>
      <Ingredients/>
    </>
  );
}

export default App;
