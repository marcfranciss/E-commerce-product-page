import NavDialog from "../Dialogs/NavDialog/NavDialog";
import "./navBar.sass";
import NavLinks from "./NavLinks/NavLinks";
import NavLogo from "./NavLogo/NavLogo";
import NavUser from "./NavUser/NavUser";

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <NavLogo />
      <NavLinks />
      <NavUser />
    </div>
  );
};

export default NavBar;
