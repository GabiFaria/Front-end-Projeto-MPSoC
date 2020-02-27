import React from 'react';
import './styles.css';

function BotoesApl (){
    return(
      <div className = "divbotoes">
        <ul>
          <li><button className = "botoesapp">NOVA SIMULAÇÃO</button></li> 
          <li><button className = "botoesapp">EXPORTAR DADOS</button></li>
          <li><button className = "botoesapp">ADD APLICAÇÃO</button></li>
          <li><button className = "botoesapp">PAUSAR SIMULAÇÃO</button></li>
        </ul>
      </div>
    );
};

export default BotoesApl;