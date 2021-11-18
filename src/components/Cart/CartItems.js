import { useContext } from "react";

import CartContext from "../../store/cart-context";
import classes from "./CartItems.module.css";

function CartItems(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  function itemRemoveHandler(id) {
    cartCtx.removeItem(id);
  }

  function itemAddHandler(item) {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  const cartItems = cartCtx.items.map((item) => (
    <li key={item.id}>
      <div className={classes.itemInfo}>
        <span>{item.name}</span>
        <small>{`$${item.price.toFixed(2)}`}</small>
      </div>
      <div className={classes.itemAction}>
        <div className={classes.itemAmount}>x{item.amount}</div>
        <div className={classes.itemButtons}>
          <button onClick={itemRemoveHandler.bind(null, item.id)}>-</button>
          <button onClick={itemAddHandler.bind(null, item)}>+</button>
        </div>
      </div>
    </li>
  ));

  return (
    <div className={classes.cartContainer}>
      <ul className={classes.items}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.closeBtn} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && (
          <button className={classes.orderBtn} onClick={props.onOrder}>
            Order
          </button>
        )}
      </div>
    </div>
  );
}

export default CartItems;
