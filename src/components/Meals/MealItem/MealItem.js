import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import AuthContext from "../../../store/auth-context";
import classes from "./MealItem.module.css";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const price = `$${props.price.toFixed(2)}`;

  function addToCartHandler(amount) {
    if (authCtx.user) {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      });
    }
  }

  return (
    <li className={classes.container}>
      <div className={classes.info}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div>{price}</div>
      </div>
      <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
    </li>
  );
}

export default MealItem;
