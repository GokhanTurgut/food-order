import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  return (
    <form className={classes.form}>
      <div className={classes.amount}>
        <label htmlFor={props.id}>Amount</label>
        <input
          type="number"
          id={props.id}
          min="1"
          max="20"
          step="1"
          defaultValue="1"
        />
      </div>
      <button>+</button>
    </form>
  );
}

export default MealItemForm;
