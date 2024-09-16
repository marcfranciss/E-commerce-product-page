import "./navLogo.sass";
import navLogo from "../../../images/logo.svg";
import burgerBtn from "../../../images/icon-menu.svg";
import { useAppContext } from "../../../context/AppContext";
import NavDialog from "../../Dialogs/NavDialog/NavDialog";
const NavLogo = () => {
  const { setIsNavDialogOpen } = useAppContext();
  return (
    <div className='navlogo-container'>
      <button
        className='mobilenav-toggler'
        onClick={() => setIsNavDialogOpen(true)}
        aria-label='Toggles navigation links'
        aria-controls='navdialog'>
        <img src={burgerBtn} alt='' loading='lazy' />
      </button>
      <NavDialog />
      <a href='/'>
        <img src={navLogo} alt='' loading='lazy' />
      </a>
    </div>
  );
};

export default NavLogo;
