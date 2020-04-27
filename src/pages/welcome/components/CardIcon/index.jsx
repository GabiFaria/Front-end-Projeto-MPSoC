import React from 'react';

import { Container } from './styles';

function CardIcon({ onClick, Icon, name }) {
  return (
    <Container>
      <button onClick={onClick}>
        <Icon
          size={48} 
          color='#5A3E90' 
        />
        <p>{name || ""}</p>
      </button>
    </Container>
  );
}

export default CardIcon;
