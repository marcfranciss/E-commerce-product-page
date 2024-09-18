import { AppProviderProps } from "@components/context/AppContext";
import PreviewDialog from "@components/Dialogs/PreviewDialog/PreviewDialog";
import MainContent from "@components/MainContent/MainContent";
import NavBar from "@components/NavBar/NavBar";

function App() {
  return (
    <AppProviderProps>
      <PreviewDialog />
      <NavBar />
      <MainContent />
    </AppProviderProps>
  );
}

export default App;
