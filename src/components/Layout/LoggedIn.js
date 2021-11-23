import CartButton from "./CartButton";
import classes from "./LoggedIn.module.css";

function LoggedIn(props) {
  return (
    <div className={classes.loggedInContainer}>
      <div className={classes.userInfo}>{props.userDisplay}</div>
      <div className={classes.seperator}></div>
      <CartButton onClick={props.onShowCart} />
      <button className={classes.logBtn} onClick={props.onLogout}>
        Logout
      </button>
    </div>
  );
}

export default LoggedIn;
