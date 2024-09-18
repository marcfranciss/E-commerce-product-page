import "./navLogo.sass";
import navLogo from "@images/logo.svg";
import burgerBtn from "@images/icon-menu.svg";
import NavDialog from "@components/Dialogs/NavDialog/NavDialog";
import { useAppContext } from "@components/context/AppContext";
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
        <img src={navLogo} alt='Sneakers logo' loading='lazy' />
      </a>
    </div>
  );
};

export default NavLogo;
