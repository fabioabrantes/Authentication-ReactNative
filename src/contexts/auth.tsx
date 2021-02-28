import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {api} from '../services/api';
import * as auth from '../services/auth';

interface IUser {
  name: string;
  email: string;
}
interface AuthContextData {
  signed: boolean;
  user: IUser | null;
  signIn(): Promise<void>;
  logout(): void;
  loading: boolean;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      let values = await AsyncStorage.multiGet([
        '@RNAuth:user',
        '@RNAuth:token',
      ]);

      if (values[0][1] && values[1][1]) {
        api.defaults.headers.Authorization = `Bearer ${values[1][1]}`; // isso é o token
        setUser(JSON.parse(values[0][1])); // isso é o objeto usuário
      }
      setLoading(false);
    }
    loadStoragedData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);
    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    const firstPair = ['@RNAuth:user', JSON.stringify(response.user)];
    const secondPair = ['@RNAuth:token', response.token];
    await AsyncStorage.multiSet([firstPair, secondPair]);
  }

  function logout() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, loading, signIn, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
export {AuthContext, AuthProvider};
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
