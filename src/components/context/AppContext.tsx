import { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  isNavDialogOpen: boolean;
  setIsNavDialogOpen: (value: boolean) => void;
  isMobileCartDialogOpen: boolean;
  setIsMobileCartDialogOpen: (value: boolean) => void;
  isPreviewDialogOpen: boolean;
  setIsPreviewDialogOpen: (value: boolean) => void;
  isSnackbarOpen: boolean;
  setIsSnackbarOpen: (value: boolean) => void;
  snackbarMsg: string;
  setSnackbarMsg: (value: string) => void;
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
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] =
    useState<boolean>(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);
  const [snackbarMsg, setSnackbarMsg] = useState<string>("");
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
        isPreviewDialogOpen,
        setIsPreviewDialogOpen,
        isSnackbarOpen,
        setIsSnackbarOpen,
        snackbarMsg,
        setSnackbarMsg,
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
