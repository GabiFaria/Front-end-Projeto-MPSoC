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
        <div className='graph'>
          <GraphMatrix/>
        </div>
      </div>
    </div>
  );
}
export default CardMatriz;