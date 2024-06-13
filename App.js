import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Toolbar from './components/Toolbar';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Woman Shoes',
      imgSrc: 's1.jpg',
      description: 'This is a great product!'
    },
    {
      id: 2,
      title: 'Shein',
      imgSrc: 's2.jpg',
      description: 'This product is amazing!'
    },
    {
      id: 3,
      title: 'Product 3',
      imgSrc: 's3.jpg',
      description: 'You will love this product!'
    }
  ]);

  return (
    <div className="App">
      <Header title="Shopping Blog" />
      <Toolbar />
      <MainContent products={products} />
      <Footer text="&copy; 2024 Shopping Blog. All rights reserved." />
    </div>
  );
}

export default App;
