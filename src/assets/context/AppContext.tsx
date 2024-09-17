import { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  isNavDialogOpen: boolean;
  setIsNavDialogOpen: (value: boolean) => void;
  isMobileCartDialogOpen: boolean;
  setIsMobileCartDialogOpen: (value: boolean) => void;
  cartQuantity: number;
  setCartQuantity: (value: number) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProviderProps = ({ children }: AppProviderProps) => {
  const [isNavDialogOpen, setIsNavDialogOpen] = useState<boolean>(false);
  const [isMobileCartDialogOpen, setIsMobileCartDialogOpen] =
    useState<boolean>(false);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  return (
    <AppContext.Provider
      value={{
        isNavDialogOpen,
        setIsNavDialogOpen,
        cartQuantity,
        setCartQuantity,
        isMobileCartDialogOpen,
        setIsMobileCartDialogOpen,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(`useInputContext must be used within an InputProvider`);
  }
  return context;
};
