import React, {useState} from 'react';
import { IoIosAddCircle } from "react-icons/io";

import './styles.css'

import NavHeader from '../../components/NavHeader';
import CardMatriz from '../../components/CardMatriz';
import Aplicacoes from '../../components/Aplicacoes';
import Grafos from '../../components/Grafos';
import InfosAplicacoes from '../../components/InfosAplicacoes';
import BotoesApl from '../../components/BotoesApl';

//Componente: Bloco isolado de HTML, o qual não interfere no restante da aplicação. 
//Propriedade: Informações que um componente PAI (o que contém) passa para o componente FILHO (o que está contido)
//Estado: Informação que o componente pode manipular. (Lembrar: imutabilidade )

//Toda função que um componente tem deve ser criada dentro da função do componente.
function Simulation(props) {
  const id = props.match.params.id;
  
  const [contMatriz, setCont] = useState(['Matriz']);

  function tratarCont() {
    setCont([...contMatriz, "Matriz"]);
  };

  return (
    <>
      <header className="header">
        <NavHeader/>
      </header>

      <section className="flexheuristica">
        {
          contMatriz.map( (matriz, index) => (
            <CardMatriz indexHeu={index}/>
            ))
        }

        <button onClick={tratarCont} className="addButtom">
          <div>
            <IoIosAddCircle color='#fcfcfc' size={30}/>
          </div>
        </button>
        
      </section>
      
      <section className="flexaplicacoes">
        <Grafos/>
        <Aplicacoes/>
        <InfosAplicacoes/>
        <BotoesApl/>
      </section>

    </>
  );
}

export default Simulation;
 