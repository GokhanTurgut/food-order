import { useState, useRef } from "react";
import classes from "./OrderForm.module.css";

function OrderForm(props) {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormTouched, setIsFormTouched] = useState(false);

  const nameInput = useRef();
  const cityInput = useRef();
  const addressInput = useRef();

  function formSubmitHandler(event) {
    event.preventDefault();
    setIsFormTouched(true);

    if (
      nameInput.current.value === "" ||
      cityInput.current.value === "" ||
      addressInput.current.value === ""
    ) {
      setIsFormValid(false);
      return;
    }

    setIsFormValid(true);

    props.onConfirm({
      name: nameInput.current.value,
      city: cityInput.current.value,
      address: addressInput.current.value,
    });
  }

  const itemClasses =
    !isFormValid && isFormTouched
      ? `${classes.formItem} ${classes.invalid}`
      : `${classes.formItem}`;

  return (
    <form className={classes.orderContainer} onSubmit={formSubmitHandler}>
      <div className={classes.formFirst}>
        <div className={itemClasses}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameInput} />
        </div>
        <div className={itemClasses}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" ref={cityInput} />
        </div>
      </div>
      <div className={itemClasses}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInput} />
      </div>
      {!isFormValid && isFormTouched && (
        <p className={classes.message}>Please fill all fields!</p>
      )}
      <div className={classes.actions}>
        <button className={classes.cancelBtn} onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.confirmBtn} type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
}

export default OrderForm;
