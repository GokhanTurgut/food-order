import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);

  function submitHandler(event) {
    event.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount < 1) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  }

  const amountInputRef = useRef();

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.amount}>
        <label htmlFor={props.id}>Amount</label>
        <input
          ref={amountInputRef}
          type="number"
          id={props.id}
          min="1"
          max="9"
          step="1"
          defaultValue="1"
        />
      </div>
      <button>+</button>
      {!amountIsValid && <p>Please enter a valid amount!</p>}
    </form>
  );
}

export default MealItemForm;
