import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartButton.module.css";

function CartButton(props) {
  const [btnHighlighted, setBtnHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((total, current) => {
    return total + current.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className="material-icons">shopping_cart</span>
      <h2>Cart</h2>
      <small>{numberOfItems}</small>
    </button>
  );
}

export default CartButton;
