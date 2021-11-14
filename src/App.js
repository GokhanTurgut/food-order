import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import InfoMassage from "./components/Layout/InfoMassage";
import AvailableMeals from "./components/Meals/AvailableMeals";
import CartProvider from "./store/CartProvider";
import pizzaBackground from "./assets/pizza-background.jpg";

function App() {
  const [cartShown, setCartShown] = useState(false);

  function showCartHandler() {
    setCartShown(true);
  }

  function hideCartHandler() {
    setCartShown(false);
  }

  return (
    <CartProvider>
      {cartShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <InfoMassage />
      <img className="backgroundImage" src={pizzaBackground} alt="Pizza" />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
