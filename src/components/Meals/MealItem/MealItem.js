import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.container}>
      <div className={classes.info}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div>{price}</div>
      </div>
      <MealItemForm id={props.id} />
    </li>
  );
}

export default MealItem;
