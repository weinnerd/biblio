// En src/components/Card.js

import React from 'react';

function Card({ title, description, imageUrl, linkUrl }) {
  return (
    <div className="card" style={{ width: '300px', margin: '10px' }}>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      </a>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;
