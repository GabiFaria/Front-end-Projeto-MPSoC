import React, {useState} from 'react';
import { IoIosUndo } from "react-icons/io";
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
          <IoIosUndo size={22} color='#C590EF'/>
          { 
          redirect?(<Redirect to="/"/>):null
          }
        </div>
    </nav>
  );
};

export default NavHeader;
