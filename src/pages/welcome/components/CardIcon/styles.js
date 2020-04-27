import styled from 'styled-components';

const Container = styled.li`
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #E7E7E7;
    box-shadow: 5px 5px 15px rgba(174, 174, 192, 0.4), -5px -5px 15px #FFFFFF;
    border-radius: 16px;

    width: 196px;
    height: 196px;
    padding: 0;
    border: 0;
    cursor: pointer;
    transition: background 0.5s;
  }

  button:hover {
    #background:rgb(87, 103, 158);
  }
  
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 48px;
    color: #808B9F;
  }
`;

export { Container };