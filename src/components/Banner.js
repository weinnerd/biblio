// En src/components/Banner.js

import React from 'react';

function Banner() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', background: 'url(http://example.com/banner-image.jpg)', color: 'white', backgroundSize: 'cover', marginBottom: '20px' }}>
      <h1>Bienvenido a Nuestra Biblioteca Virtual</h1>
      <p>Explora y descubre una vasta colección de libros desde la comodidad de tu hogar.</p>
    </div>
  );
}

export default Banner;
