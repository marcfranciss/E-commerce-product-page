import "./itemActions.sass";
import minusIcon from "../../../../images/icon-minus.svg";
import addIcon from "../../../../images/icon-plus.svg";
import cartIcon from "../../../../images/icon-cart.svg";
import { useState } from "react";
import { useAppContext } from "../../../../context/AppContext";

const ItemActions = () => {
  const [itemQuantity, setItemQuantity] = useState<number>(0);
  const { setCartQuantity } = useAppContext();

  const handleDecrease = () => {
    itemQuantity > 0
      ? setItemQuantity(itemQuantity - 1)
      : alert("You have reached zero");
  };
  const handleIncrease = () => {
    itemQuantity >= 0 && setItemQuantity(itemQuantity + 1);
  };

  return (
    <div className='item-actions'>
      <div className='button-group'>
        <button
          className='decrease'
          onClick={handleDecrease}
          aria-label='Decrease quantity'
          aria-controls='quantity-count'>
          <img src={minusIcon} alt='' />
        </button>
        <span id='quantity-count' className='item-count'>
          {itemQuantity}
        </span>
        <button
          className='increase'
          onClick={handleIncrease}
          aria-label='Increase quantity'
          aria-controls='quantity-count'>
          <img src={addIcon} alt='' />
        </button>
      </div>
      <button
        className={`atc-action ${itemQuantity > 0 && "scaleOnClick"}`}
        onClick={() => setCartQuantity(itemQuantity)}
        aria-disabled={itemQuantity < 1}
        disabled={itemQuantity < 1}>
        <img src={cartIcon} alt='' />
        Add to cart
      </button>
    </div>
  );
};

export default ItemActions;
