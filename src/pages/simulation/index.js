import React from 'react';
import { TiArrowLeft } from "react-icons/ti";
import { IoIosAddCircle } from "react-icons/io";

import './styles.css'

//Componente: Bloco isolado de HTML, o qual não interfere no restante da aplicação. 
//Propriedade: Informações que um componente PAI (o que contém) passa para o componente FILHO (o que está contido)
//Estado: Informação que o componente pode manipular. (Lembrar: imutabilidade )

//Toda função que um componente tem deve ser criada dentro da função do componente.
function Simulation(props) {
  const id = props.match.params.id;

  return (
    <>
      <header className="header">
        <nav>
          <icon className="voltar"><TiArrowLeft size={30} /></icon>
          <p>Simulation ID: {id}</p>
        </nav>
      </header>

      <section className="flexheuristica">
        <div>
          <p>Heurística 1</p>
          <div className="matriz">
            <a>MATRIZ</a>
          </div>
          <ul className="infos">
            <li><a>Info 1</a></li>
            <li><a>Info 2</a></li>
            <li><a>Info 3</a></li>
          </ul>
          <div className="maisinfo">
            <icon><IoIosAddCircle color='#fcfcfc' size={20}/></icon>
          </div>
        </div>
        <div>
          
          <p>Heurística 1</p>
          <div className="matriz">
            <a>MATRIZ</a>
          </div>
          <ul className="infos">
            <li><a>Info 1</a></li>
            <li><a>Info 2</a></li>
            <li><a>Info 3</a></li>
          </ul>
          <div className="maisinfo">
            <icon><IoIosAddCircle color='#fcfcfc' size={20}/></icon>
          </div>
        </div>


        <button className="addButtom"><icon><IoIosAddCircle color='#fcfcfc' size={20}/></icon></button>
      </section>
      
      <section className="flexaplicacoes">
      <div className="grafos">
        <p>GRAFOS</p>
      </div>
      <div className="aplicacoes">
        <p>APLICAÇÕES</p>
      </div>
      <div className = "infosapp">
        <p>INFORMAÇÃO DA APP</p>
      </div>
      
      <div className = "divbotoes">
        <ul>
          <li><button className = "botoesapp">NOVA SIMULAÇÃO</button></li> 
          <li><button className = "botoesapp">EXPORTAR DADOS</button></li>
          <li><button className = "botoesapp">ADD APLICAÇÃO</button></li>
          <li><button className = "botoesapp">PAUSAR SIMULAÇÃO</button></li>
        </ul>
      </div>
    </section>

    </>
  );
}

export default Simulation;
 