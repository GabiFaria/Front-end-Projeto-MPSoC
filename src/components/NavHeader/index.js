import React from 'react';
import { TiArrowLeft } from "react-icons/ti";
import './styles.css';

function NavHeader (){
    return(
      <nav>
        <div className="voltar"><TiArrowLeft size={30} /></div>
      </nav>
    );
};

export default NavHeader;
