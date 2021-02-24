import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

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
`;

const appersFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${appersFromRight} 1s;

  display: flex;
  align-items: center;
  flex-direction: column;
  /*
    Possui os mesmos efeitos das seguintes propriedades
    flex-direction: column;
    justify-content: center;
  */
  place-content: center;

  form {
    margin: 80px 0;
    text-align: center;
    width: 340px;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    display: flex;
    align-items: center;

    color: #f4ede8;
    display: block;
    margin-top: 24px;
    transition: color 0.2s;
    text-decoration: none;

    &:hover {
      /*Escurecendo 20% da cor original*/
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
