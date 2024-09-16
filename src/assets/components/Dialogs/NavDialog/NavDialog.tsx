import "./navDialog.sass";
import closeBtn from "../../../images/icon-close.svg";
import { useAppContext } from "../../../context/AppContext";

const navLinksArr = ["collection", "men", "women", "about", "contact"];

const NavDialog = () => {
  const { isNavDialogOpen, setIsNavDialogOpen } = useAppContext();
  return (
    <dialog
      id='navdialog'
      className='navdialog'
      open={isNavDialogOpen}
      onClick={() => setIsNavDialogOpen(false)}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setIsNavDialogOpen(false);
        }
      }}
      aria-live={isNavDialogOpen ? "assertive" : "off"}
      aria-atomic={isNavDialogOpen}
      aria-modal='true'
      aria-label='Navigation links'>
      <nav className='mobile-navlinks-container'>
        <button
          className='mobilenav-toggler'
          onClick={() => setIsNavDialogOpen(false)}>
          <img src={closeBtn} alt='' loading='lazy' />
        </button>
        <ul className='mobile-navlinks__ul'>
          {navLinksArr.map((links) => {
            return (
              <li className='mobile-navlinks__li' key={links}>
                <a href={`${links}`}>{links}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </dialog>
  );
};

export default NavDialog;
