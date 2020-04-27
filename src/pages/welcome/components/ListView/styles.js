import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  background: #E7E7E7;
  box-shadow: 4px 4px 12px rgba(174, 174, 192, 0.6), -4px -4px 12px #FFFFFF;
  border-radius: 16px;
  margin-top: 48px;
  padding: 12px;

  h3 {
    color: #728AB7;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    margin-block-start: 5px;
    margin-block-end: 5px;
  }
`;

const ListRow = styled.ul`
  margin-top: 22px;
  display: grid;
  gap: 32px;
  list-style: none;
`;

const Item = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    background: #E7E7E7;
    box-shadow: 2px 2px 4px rgba(174, 174, 192, 0.8), -2px -2px 4px #FFFFFF;
    border-radius: 5px;
    padding: 10px;
`;

export { Container, ListRow, Item };