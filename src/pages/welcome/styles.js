import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding-bottom: 32px;
  background: #E7E7E7;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding-top: 48px;

  h1 {
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 57px;
    color: #728AB7;
  }
`;

const Main = styled.main`
  margin-top: 32px;
`;

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const ListColumn = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 98px;
  list-style: none;
`;

export { Container, Header, Main, CenterDiv, ListColumn };