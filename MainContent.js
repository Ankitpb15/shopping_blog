import React from 'react';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';

function MainContent() {
  return (
    <main className="main-content">
      <div className="article">
        <h2>Woman Shoes</h2>
        <img src={s1} alt="Product 1" />
        <p>This is a great product!</p>
      </div>
      <div className="article">
        <h2>Shein</h2>
        <img src={s2} alt="Product 2" />
        <p>This product is amazing!</p>
      </div>
      <div className="article">
        <h2>Product 3</h2>
        <img src={s3} alt="Product 3" />
        <p>You will love this product!</p>
      </div>
    </main>
  );
}

export default MainContent;
