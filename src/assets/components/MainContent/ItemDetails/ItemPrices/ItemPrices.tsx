import "./itemPrices.sass";

const ItemPrices = () => {
  return (
    <div className='item-price-container'>
      <div className='item-price__discounted'>
        <span className='discounted'>$125.00</span>
        <span className='discount-percent'>50%</span>
      </div>
      <span className='item-price__original'>$250.00</span>
    </div>
  );
};

export default ItemPrices;
