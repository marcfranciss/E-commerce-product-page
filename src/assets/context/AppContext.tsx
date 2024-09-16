import { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  isNavDialogOpen: boolean;
  setIsNavDialogOpen: (value: boolean) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProviderProps = ({ children }: AppProviderProps) => {
  const [isNavDialogOpen, setIsNavDialogOpen] = useState<boolean>(false);
  return (
    <AppContext.Provider value={{ isNavDialogOpen, setIsNavDialogOpen }}>
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
