import MainContent from "./assets/components/MainContent/MainContent";
import NavBar from "./assets/components/NavBar/NavBar";
import { AppProviderProps } from "./assets/context/AppContext";

function App() {
  return (
    <AppProviderProps>
      <NavBar />
      <MainContent />
    </AppProviderProps>
  );
}

export default App;
