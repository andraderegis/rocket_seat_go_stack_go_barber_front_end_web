import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  /*Total do viewport disponível*/
  height: 100vh;

  align-items: stretch;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /*
    Possui os mesmos efeitos das seguintes propriedades
    flex-direction: column;
    justify-content: center;
  */
  place-content: center;

  max-width: 700px;
  width: 100%;

  form {
    margin: 80px 0;
    text-align: center;
    width: 340px;

  h1 {
    margin-bottom: 24px;
  }

    input {
    background: #232129;
    border: 2px solid #232129;
    border-radius: 10px;
    color: #f4ede8;
    padding: 16px;
    width: 100%;

    &::placeholder {
      color: #666360;
    }

    & + input {
      margin-top: 8px;
    }
  }

  button {
    background: #ff9000;
    border: 0;
    border-radius: 10px;
    color: #312e38;
    font-weight: 400;
    height: 56px;
    padding: 0 16px;
    margin-top: 16px;
    transition: background-color 0.2s;
    width: 100%;

    &:hover {
      /*Escurecendo 20% da cor original*/
      background: ${shade(0.2, '#ff9000')}
    }
  }

  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    transition: color 0.2s;
    text-decoration: none;

    &:hover {
      color: ${shade(0.2, '#f4ede8')}
    }
  }
}
  > a {
    display: flex;
    align-items: center;

    color: #ff9000;
    display: block;
    margin-top: 24px;
    transition: color 0.2s;
    text-decoration: none;

    &:hover {
      /*Escurecendo 20% da cor original*/
      color: ${shade(0.2, '#ff9000')}
    }

    svg {
      margin-right: 16px;
    }
  }

`;

export const Background = styled.div`
  flex: 1;

  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
