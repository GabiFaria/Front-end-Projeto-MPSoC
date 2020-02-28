import React, {useState} from 'react';
import { TiArrowLeft } from "react-icons/ti";
import './styles.css';
import { Redirect } from 'react-router-dom';

function NavHeader (){

  const [redirect, setRedirect] = useState(false);

  function gotoWelcome(){
    setRedirect(!redirect);
  }
  
  return(
    <nav>
      <button 
      className="botao" 
      onClick={gotoWelcome} 
      >
        {
          redirect?(<Redirect to="/"/>):null
        }
        <div className='voltar'>
          <TiArrowLeft size={30} color='#fcfcfc'/>
        </div>
      </button>
    </nav>
  );
};

export default NavHeader;
