import classes from "./Header.module.css";
import CartButton from "./CartButton";

function Header() {
  return (
    <div className={classes.headerContainer}>
      <h1>Turgut Pizzaria</h1>
      <CartButton />
    </div>
  );
}

export default Header;
