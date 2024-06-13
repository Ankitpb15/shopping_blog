import React from 'react';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';

const images = {
  's1.jpg': s1,
  's2.jpg': s2,
  's3.jpg': s3
};

function Article({ title, img, description }) {
  return (
    <div className="article">
      <h2>{title}</h2>
      <img src={images[img]} alt={title} />
      <p>{description}</p>
    </div>
  );
}

export default Article;
