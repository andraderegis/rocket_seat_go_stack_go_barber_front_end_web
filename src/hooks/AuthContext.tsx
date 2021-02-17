import React, { createContext, useCallback, useContext, useState } from 'react';
import api from 'services/api';

interface AuthContextData {
  user: AuthUserData;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
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

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

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

  const signOut = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER);

    setAuthState({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: authState.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
