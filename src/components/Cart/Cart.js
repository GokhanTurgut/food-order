import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

function Cart(props) {
  const cartItems = [
    { id: "c1", name: "Kebab Pizza", amount: 2, price: 24.99 },
  ].map((item) => <li key={item.id}>{item.name}</li>);

  return (
    <Modal onClose={props.onHideCart}>
      <div className={classes.cartContainer}>
        <ul className={classes.items}>{cartItems}</ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>24.99</span>
        </div>
        <div className={classes.actions}>
          <button className={classes.closeBtn} onClick={props.onHideCart}>
            Close
          </button>
          <button className={classes.orderBtn}>Order</button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
