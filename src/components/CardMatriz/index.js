import React, { useState } from 'react';

import './styles.css'


function CardMatriz({ indexHeu }) {

  const [openMatriz, setOpen] = useState(false);

  function toggleMatriz() {
    setOpen(!openMatriz);
  }
  return (
    <div>
      <div className="matriz">
        <strong className="name">Heurística {indexHeu}</strong>
      </div>
    </div>
  );
}
export default CardMatriz;