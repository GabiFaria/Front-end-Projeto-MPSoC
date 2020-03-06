import React from 'react';
import {IoIosPause, IoMdCode, IoMdDownload} from 'react-icons/io'
import { MdDns } from "react-icons/md";
import './styles.css';

function BotoesApl() {
  return (
    <div className="divbotoes">
      <ul>
        <li>
          <button
            className="botoesapp">
            <IoMdCode size={30}/>
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
        <li>
          <button
            className="botoesapp">
            <MdDns size={30}/>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BotoesApl;