function Cart(props) {
  const { quantity = 0, handleBasket = Function.prototype } = props;
  return (
    <div className="cart blue darken-4 white-text" onClick={handleBasket}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
      <span className="cart-quantity"></span>
    </div>
  );
}

export { Cart };
