import { useContext, useEffect } from "react";

import classes from "./Header.module.css";
import LoggedIn from "./LoggedIn";
import AuthContext from "../../store/auth-context";
import CartContext from "../../store/cart-context";

let renderCycle = 0;

function Header(props) {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  const user = authCtx.user;

  useEffect(() => {
    if (user && renderCycle < 3) {
      fetch(
        `https://food-app-8e47b-default-rtdb.europe-west1.firebasedatabase.app/carts/${user.uid}.json`
      ).then((response) => {
        response.json().then((data) => {
          if (data) {
            data.forEach((meal) => {
              cartCtx.addItem(meal);
            });
          }
        });
      });
    }
  }, [user, cartCtx]);

  function loginHandler() {
    authCtx.login();
  }

  function logoutHandler() {
    authCtx.logout();
  }

  renderCycle++;

  return (
    <div className={classes.headerContainer}>
      <h1>Turgut Pizzaria</h1>
      {!user && (
        <button className={classes.logBtn} onClick={loginHandler}>
          Login
        </button>
      )}
      {user && (
        <LoggedIn
          onLogout={logoutHandler}
          userDisplay={user.displayName}
          onShowCart={props.onShowCart}
        />
      )}
    </div>
  );
}

export default Header;
