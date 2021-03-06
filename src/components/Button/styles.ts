import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
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
    background: ${shade(0.2, '#ff9000')};
  }
`;
