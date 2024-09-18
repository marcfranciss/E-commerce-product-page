import "./itemDetails.sass";
import ItemTexts from "./ItemTexts/ItemTexts";
import ItemPrices from "./ItemPrices/ItemPrices";
import ItemActions from "./ItemActions/ItemActions";

const ItemDetails = () => {
  return (
    <div className='item-details'>
      <ItemTexts />
      <ItemPrices />
      <ItemActions />
    </div>
  );
};

export default ItemDetails;
