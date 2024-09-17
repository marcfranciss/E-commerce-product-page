import "./navUser.sass";
import navCartIcon from "../../../images/icon-cart.svg";
import userAvatar from "../../../images/image-avatar.png";
import { useAppContext } from "../../../context/AppContext";
const NavUser = () => {
  const { isMobileCartDialogOpen, setIsMobileCartDialogOpen, cartQuantity } =
    useAppContext();

  const handleCartDialog = () => {
    console.log(`Navcart status: ${isMobileCartDialogOpen}`);
    setIsMobileCartDialogOpen(!isMobileCartDialogOpen);
  };
  return (
    <div className='navuser-container'>
      <button
        className='navcart'
        onClick={handleCartDialog}
        aria-controls='mobile-cart-dialog'
        aria-label='Cart button'>
        {cartQuantity > 0 && (
          <span className='cart-quantity-tooltip'>{cartQuantity}</span>
        )}
        <img
          className='navcart__img'
          src={navCartIcon}
          alt=''
          loading='lazy'
          data-quantity={cartQuantity}
        />
      </button>
      <button className='navuser'>
        <img src={userAvatar} alt='' />
      </button>
    </div>
  );
};

export default NavUser;
