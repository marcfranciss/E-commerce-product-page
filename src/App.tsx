import NavBar from "./assets/components/NavBar/NavBar";
import { AppProviderProps } from "./assets/context/AppContext";

function App() {
  return (
    <AppProviderProps>
      <NavBar />
    </AppProviderProps>
  );
}

export default App;
