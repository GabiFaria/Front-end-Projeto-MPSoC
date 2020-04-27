import React from 'react';

import { Container, ListRow, Item } from './styles';

function ListView({ title, elements }) {
  return (
    <Container>
      <h3>{title}</h3>
      <ListRow>
        {elements.map((elem, index) => {
            return (
              <Item>
                <p>{elem}</p>
              </Item>
            );
        })}
      </ListRow>
    </Container>
  );
}

export default ListView;