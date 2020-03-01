import React from 'react';
import { MdMemory } from "react-icons/md";
import { MdDeveloperBoard } from "react-icons/md";
import { MdSubject } from "react-icons/md";
import { MdDeviceHub } from "react-icons/md";

import './styles.css';

function Welcome() {

  return (
    <div className="welcome">
      <header>
        <MdMemory size={192} color='#724EC0'  />
        <h1>MPSoC Simulator</h1>
      </header>

      <main>
        <ul>
          <li>
            <button>
              <MdDeveloperBoard size={48} color='#5A3E90' />
              <p>Nova Simulação</p>
            </button>
          </li>

          <li>
            <button>
              <MdSubject size={48} color='#5A3E90' />
              <p>Nova Héuristica</p>
            </button>
          </li>

          <li>
            <button>
              <MdDeviceHub size={48} color='#5A3E90' />
              <p>Nova Aplicação</p>
            </button>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default Welcome;