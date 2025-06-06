'use client';
import { useRouter } from 'next/navigation';
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

interface AppContextType {
  router: ReturnType<typeof useRouter>;
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  isSeller: boolean;
  setIsSeller: React.Dispatch<React.SetStateAction<boolean>>;
  showUserLogin: boolean;
  setShowUserLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);
    
export const ContextProvider = ({children}: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);

  const value = { router, user, setUser, isSeller, setIsSeller, showUserLogin, setShowUserLogin };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext  = () => {
  const context = useContext(AppContext);
      if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
