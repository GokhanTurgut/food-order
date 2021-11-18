import { useState, useContext } from "react";

import Modal from "../UI/Modal";
import CartItems from "./CartItems";
import OrderForm from "./OrderForm";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";

function Cart(props) {
  const [orderState, setOrderState] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const cartCtx = useContext(CartContext);

  function orderHandler() {
    setOrderState(true);
  }

  function cancelHandler() {
    setOrderState(false);
  }

  function confirmHandler(userData) {
    const orderInformation = {
      name: userData.name,
      city: userData.city,
      address: userData.address,
      order: [...cartCtx.items],
    };

    fetch(
      "https://food-app-8e47b-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify(orderInformation),
        type: "cors",
      }
    ).then((response) => {
      cartCtx.clear();
      setOrderConfirmed(true);
    });
  }

  return (
    <Modal onClose={props.onHideCart}>
      {!orderState && !orderConfirmed && (
        <CartItems onHideCart={props.onHideCart} onOrder={orderHandler} />
      )}
      {orderState && !orderConfirmed && (
        <OrderForm onCancel={cancelHandler} onConfirm={confirmHandler} />
      )}
      {orderState && orderConfirmed && (
        <div className={classes.confirmed}>
          <p>Order confirmed, thank you for your order!</p>
          <button onClick={props.onHideCart} className={classes.ok}>
            Ok
          </button>
        </div>
      )}
    </Modal>
  );
}

export default Cart;
