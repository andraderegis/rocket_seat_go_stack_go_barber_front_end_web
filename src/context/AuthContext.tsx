import React, { createContext, useCallback, useState } from 'react';
import api from 'services/api';

interface AuthContextData {
  user: AuthUserData;
  signIn(credentials: SignInCredentials): Promise<void>;
}
interface AuthState {
  token: string;
  user: AuthUserData;
}
interface AuthUserData {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  created_at?: string;
  updated_at?: string;
}
interface SignInCredentials {
  email: string;
  password: string;
}

const LOCAL_STORAGE_KEYS = {
  TOKEN: '@GoBarber:token',
  USER: '@GoBarber:user'
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
    const user = localStorage.getItem(LOCAL_STORAGE_KEYS.USER);

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password
    });

    const { token, user } = response.data;

    localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, token);
    localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(user));

    setAuthState({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: authState.user, signIn }}>{children}</AuthContext.Provider>
  );
};
