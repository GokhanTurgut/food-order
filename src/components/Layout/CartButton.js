import classes from "./CartButton.module.css";

function CartButton(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className="material-icons">shopping_cart</span>
      <h2>Cart</h2>
      <small>3</small>
    </button>
  );
}

export default CartButton;
