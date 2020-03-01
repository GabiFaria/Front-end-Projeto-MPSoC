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
        <div 
        className='voltar'
        onClick={gotoWelcome} 
        >
          <TiArrowLeft size={30} color='#fcfcfc'/>
          {
          redirect?(<Redirect to="/"/>):null
          }
        </div>
    </nav>
  );
};

export default NavHeader;
