import "./mobileCartDialog.sass";
import firstItemImg from "@images/image-product-1-thumbnail.jpg";
import deleteIcon from "@images/icon-delete.svg";
import { useAppContext } from "@components/context/AppContext";

const MobileCartDialog = () => {
  const {
    isMobileCartDialogOpen,
    setIsMobileCartDialogOpen,
    cartQuantity,
    setCartQuantity,
    setIsSnackbarOpen,
    setSnackbarMsg,
  } = useAppContext();

  const totalPrice = cartQuantity * 125;

  const handleCheckOutButton = () => {
    setIsSnackbarOpen(true);
    setSnackbarMsg("Thank you for your purchase!");
    setIsMobileCartDialogOpen(!isMobileCartDialogOpen);
    setCartQuantity(0);
  };

  const handleDeleteButton = () => {
    setCartQuantity(0);
  };

  return (
    <dialog
      id='mobile-cart-dialog'
      open={isMobileCartDialogOpen}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setIsMobileCartDialogOpen(false);
        }
      }}
      aria-live={isMobileCartDialogOpen ? "assertive" : "off"}
      aria-atomic={isMobileCartDialogOpen}
      aria-modal='true'
      aria-label='Cart content'>
      <div className='mobile-cart-container'>
        <div className='mobile-cart__header'>
          <h2 className='cart-header__h2'>Cart</h2>
        </div>
        {cartQuantity < 1 ? (
          <div className='empty-cart'>
            <span className='empty-cart__text'>Your cart is empty.</span>
          </div>
        ) : (
          <div className='mobile-cart-content'>
            <div className='mobile-cart__items'>
              <div className='cart-item__img'>
                <img src={firstItemImg} alt='' />
              </div>
              <div className='cart-item__details'>
                <span className='cart-item__name'>
                  Fall Limited Edition Sneakers
                </span>
                <div className='cart-item__prices'>
                  <span className='original-price'>$125.00</span>
                  <span className='item-quantity'>x {cartQuantity}</span>
                  <span className='total-price'>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button
                className='cart-item__remove'
                onClick={handleDeleteButton}>
                <img src={deleteIcon} alt='' />
              </button>
            </div>
            <button
              className='btn-checkout scaleOnClick'
              onClick={handleCheckOutButton}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </dialog>
  );
};

export default MobileCartDialog;
