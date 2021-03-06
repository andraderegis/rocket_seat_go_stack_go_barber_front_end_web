import React, { CSSProperties, useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';

import { ToastMessage, useToast } from 'hooks/ToastContext';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: CSSProperties;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />
};

const Toast = ({ message, style }: ToastProps): JSX.Element => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  const handleRemoveToast = (toastId: string): void => {
    return removeToast(toastId);
  };

  return (
    <Container type={message.type} hasDescription={!!message.description} style={style}>
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => handleRemoveToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
