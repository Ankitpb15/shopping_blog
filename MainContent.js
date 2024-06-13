import React from 'react';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';

const images = {
  's1.jpg': s1,
  's2.jpg': s2,
  's3.jpg': s3
};

function MainContent({ products }) {
  return (
    <main className="main-content">
      {products.map(product => (
        <div key={product.id} className="article">
          <h2>{product.title}</h2>
          <img src={images[product.imgSrc]} alt={product.title} />
          <p>{product.description}</p>
        </div>
      ))}
    </main>
  );
}

export default MainContent;
