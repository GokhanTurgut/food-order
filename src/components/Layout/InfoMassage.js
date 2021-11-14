import Card from "../UI/Card";
import classes from "./InfoMassage.module.css";

function InfoMassage() {
  return (
    <div className={classes.infoContainer}>
      <p className={classes.info}>Order now to try our delicious pizzas!</p>
    </div>
  );
}

export default InfoMassage;
