import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import pizzaBackground from "./images/pizza-background.jpg";

function App() {
  const [cartShown, setCartShown] = useState(false);

  function showCartHandler() {
    setCartShown(true);
  }

  function hideCartHandler() {
    setCartShown(false);
  }

  return (
    <Fragment>
      {cartShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <img className="backgroundImage" src={pizzaBackground} alt="Pizza" />
      <AvailableMeals />
    </Fragment>
  );
}

export default App;
