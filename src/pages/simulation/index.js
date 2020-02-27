import React, {useState, useEffect} from 'react';
import { TiArrowLeft } from "react-icons/ti";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdExpand } from "react-icons/io";
import { IoMdContract } from "react-icons/io";
import './styles.css'

//Componente: Bloco isolado de HTML, o qual não interfere no restante da aplicação. 
//Propriedade: Informações que um componente PAI (o que contém) passa para o componente FILHO (o que está contido)
//Estado: Informação que o componente pode manipular. (Lembrar: imutabilidade )

//Toda função que um componente tem deve ser criada dentro da função do componente.
function Simulation(props) {
  const id = props.match.params.id;
  
  const [contMatriz, setCont] = useState(['Matriz']);
  const [openMatriz, setOpen] = useState(false);

  function tratarCont() {
    setCont([...contMatriz, "Matriz"]);
  };

  function toggleMatriz(){
    setOpen(!openMatriz);
  }

  return (
    <>
      <header className="header">
        <nav>
          <div className="voltar"><TiArrowLeft size={30} /></div>
        </nav>
      </header>

      <section className="flexheuristica">

        {
          contMatriz.map( (matriz, index) => (
            <div>
        <strong>Heurística {index}</strong>
        <div className="matriz">
          <a>Matriz</a>
        </div>
        <ul className="infos">
          <li><a>Info 1</a></li>
          <li><a>Info 2</a></li>
          <li><a>Info 3</a></li>
          {
            openMatriz?(
              <ul>
                <li><a>Info 4</a></li>
                <li><a>Info 5</a></li>
              </ul>  
            ):null
          }
        </ul>
        <div className="maisinfo">

          {
            openMatriz? (
            <div onClick={(e) => toggleMatriz(e)} className="extendInfo"><IoMdContract color='#fcfcfc' size={20}/></div>
            ):  <div onClick={toggleMatriz} className="extendInfo"><IoMdExpand color='#fcfcfc' size={20}/></div>
          }
        </div>
      </div>

          ))
        }


        <button onClick={tratarCont} className="addButtom"><div><IoIosAddCircle color='#fcfcfc' size={20}/></div></button>
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
 