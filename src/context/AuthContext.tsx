import React, { createContext, useCallback } from 'react';
import api from 'services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password
    });
  }, []);

  return <AuthContext.Provider value={{ name: 'Regis', signIn }}>{children}</AuthContext.Provider>;
};

// export default AuthContext;