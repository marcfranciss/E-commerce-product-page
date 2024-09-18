import MobileCartDialog from "@components/Dialogs/MobileCartDialog/MobileCartDialog";
import ItemDetails from "./ItemDetails/ItemDetails";
import ItemGallery from "./ItemGallery/ItemGallery";
import "./mainContent.sass";
import Snackbar from "../Utils/Snackbar/Snackbar";
import { useAppContext } from "../context/AppContext";

const MainContent = () => {
  const { isSnackbarOpen, setIsSnackbarOpen, snackbarMsg } = useAppContext();
  return (
    <main id='main-content' className='main-content'>
      <MobileCartDialog />
      <Snackbar
        message={snackbarMsg}
        visible={isSnackbarOpen}
        onClose={() => setIsSnackbarOpen(false)}
      />
      <ItemGallery />
      <ItemDetails />
    </main>
  );
};

export default MainContent;
