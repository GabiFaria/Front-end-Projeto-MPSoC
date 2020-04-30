import React, { useState } from 'react';

import GraphMatrix from '../GraphMatrix';

import './styles.css'


function CardMatriz({ indexHeu }) {

  const [openMatriz, setOpen] = useState(false);

  function toggleMatriz() {
    setOpen(!openMatriz);
  }
  return (
    <div>
      <div className="matriz">
        <p>Heuristica {indexHeu}</p>
        <div className='graph'>
          <GraphMatrix />
        </div>
      </div>
    </div>
  );
}
export default CardMatriz;