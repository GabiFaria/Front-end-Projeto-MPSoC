import React from 'react';
import { useHistory } from "react-router-dom";

import {
  MdMemory,
  MdDeveloperBoard,
  MdSubject,
  MdDeviceHub
} from "react-icons/md";

import {
  Container,
  Header,
  Main,
  CenterDiv,
  ListColumn
} from './styles';

import CardIcon from './components/CardIcon';
import ListView from './components/ListView';

const elements = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
]

function Welcome() {
  const history = useHistory();

  function handleClick() {
    history.push("/simu/0");
  }

  return (
    <Container>
      <Header>
        <MdMemory size={192} color='#745FF2' />
        <h1>MPSoC Simulator</h1>
      </Header>

      <Main>
        <CenterDiv>
          <ListColumn>
            <CardIcon
              onClick={handleClick}
              Icon={MdDeveloperBoard}
              name="Nova Simulação"
            />
            <CardIcon
              onClick={handleClick}
              Icon={MdSubject}
              name="Nova Héuristica"
            />
            <CardIcon
              onClick={handleClick}
              Icon={MdDeviceHub}
              name="Nova Aplicação"
            />
          </ListColumn>
        

          <ListView
            title="Simulações"
            elements={elements}
          />
        </CenterDiv>
      </Main>
    </Container>
  );
}

export default Welcome;