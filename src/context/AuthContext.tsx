import { createContext, useState } from 'react';
import { localStorageUtil } from '../utils/localStorageUtil';

interface AuthContextType {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: (isAuth) => isAuth,
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isAuth, setIsAuth] = useState(() => {
    let isAuth;
    if (localStorageUtil.getAuth()) {
      isAuth = true;
    } else {
      isAuth = false;
    }
    return isAuth;
  });

  return (
    <div>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};
