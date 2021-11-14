import classes from "./Header.module.css";
import CartButton from "./CartButton";

function Header(props) {
  return (
    <div className={classes.headerContainer}>
      <h1>Turgut Pizzaria</h1>
      <CartButton onClick={props.onShowCart} />
    </div>
  );
}

export default Header;
