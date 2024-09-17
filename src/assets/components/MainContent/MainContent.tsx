import MobileCartDialog from "../Dialogs/MobileCartDialog/MobileCartDialog";
import ItemDetails from "./ItemDetails/ItemDetails";
import ItemGallery from "./ItemGallery/ItemGallery";
import "./mainContent.sass";

const MainContent = () => {
  return (
    <main id='main-content' className='main-content'>
      <MobileCartDialog />
      <ItemGallery />
      <ItemDetails />
    </main>
  );
};

export default MainContent;
