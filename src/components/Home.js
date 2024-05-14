// En src/components/Home.js

import React from 'react';
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div>
      <Banner />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Card
          title="Historia de las bibliotecas"
          description="Uno de los ejemplos más célebres de la antigüedad es la Biblioteca de Alejandría, fundada en el siglo III a.C. en Egipto..."
          imageUrl="https://www.comunidadbaratz.com/wp-content/uploads/Las-bibliotecas-son-centros-de-interes-por-la-informacion-cultura-y-conocimiento-que-albergan-en-su-interior.jpg"
          linkUrl="https://en.wikipedia.org/wiki/Library_of_Alexandria"
        />
        <Card
          title="Futuro de la Lectura"
          description="El futuro de la lectura se perfila como una interacción dinámica entre tradiciones antiguas y tecnologías innovadoras..."
          imageUrl="https://blogthinkbig.com/wp-content/uploads/sites/4/2017/12/tablet-1632909_1920.jpg?resize=1040%2C400"
          linkUrl="https://www.futureofreading.com"
        />
        <Card
          title="Beneficios de Leer"
          description="Leer es una actividad que enriquece la mente y el espíritu de maneras innumerables..."
          imageUrl="https://www.letraminuscula.com/wp-content/uploads/20-BENEFICIOS-DE-LA-LECTURA-infografias-02-scaled.jpg"
          linkUrl="https://www.justiciajujuy.gov.ar/bibliotecapj/index.php/64-leer-1"
        />
      </div>
    </div>
  );
}

export default Home;
