import React, { PropsWithChildren } from 'react';

import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';

const AppProvider = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
