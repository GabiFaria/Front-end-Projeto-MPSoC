import React, {useState} from 'react';
import { IoMdExpand } from "react-icons/io";
import { IoMdContract } from "react-icons/io";
import './styles.css'
function CardMatriz({indexHeu}){
    
    const [openMatriz, setOpen] = useState(false);

    function toggleMatriz(){
        setOpen(!openMatriz);
    }
    return(
        <div>
              <strong>Heurística {indexHeu}</strong>
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
                        ):<div onClick={toggleMatriz} className="extendInfo"><IoMdExpand color='#fcfcfc' size={20}/></div>
                  }
                </div>
              </div>
    );
}
export default CardMatriz;