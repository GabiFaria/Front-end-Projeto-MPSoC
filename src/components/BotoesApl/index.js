import React from 'react';
import {IoIosPause, IoMdCode, IoMdDownload} from 'react-icons/io'
import { MdDeviceHub } from "react-icons/md";
import './styles.css';

function BotoesApl({addCallBack}) {

  return (
    <div className="divbotoes">
      <ul>
        <li>
          <button
            onClick={addCallBack}
            className="botoesapp">
            <IoMdCode size={30}/>
          </button>
        </li>

        <li>
          <button
            className="botoesapp">
            <MdDeviceHub size={30}/>
          </button>
        </li>  

        <li>
          <button
            className="botoesapp">
            <IoIosPause size={30}/>
          </button>
        </li>

        <li>
          <button
            className="botoesapp">
            <IoMdDownload size={30}/>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BotoesApl;