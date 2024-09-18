import { useAppContext } from "@components/context/AppContext";
import "./navDialog.sass";
import CloseButton from "../../Utils/CloseButton/CloseButton";

const navLinksArr = ["collection", "men", "women", "about", "contact"];

const NavDialog = () => {
  const { isNavDialogOpen, setIsNavDialogOpen } = useAppContext();
  return (
    <dialog
      role='dialog'
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
      aria-modal='true'>
      <nav className='mobile-navlinks-container'>
        <CloseButton
          btnClick={() => setIsNavDialogOpen(false)}
          ariaControls='navdialog'
          btnStyle={{ width: "max-content" }}
        />
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
