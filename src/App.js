import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import pizzaBackground from "./images/pizza-background.jpg";

function App() {
  return (
    <div>
      <Header />
      <img className="backgroundImage" src={pizzaBackground} alt="Pizza" />
      <AvailableMeals />
    </div>
  );
}

export default App;
