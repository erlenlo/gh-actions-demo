import { createContext, useContext } from 'react';

export type AuthContextProps = {
  isAuthenticated: boolean;
  username?: string;
  token?: string;
  setAuth?: any;
};

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
});

export default AuthContext;

export function useAuth() {
  return useContext(AuthContext);
}
