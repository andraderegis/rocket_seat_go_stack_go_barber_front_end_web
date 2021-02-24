import React from 'react';

import { ToastMessage } from 'hooks/ToastContext';
import { Container } from './styles';

import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer = ({ messages }: ToastContainerProps): JSX.Element => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
