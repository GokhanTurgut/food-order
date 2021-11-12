import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "p1",
    name: "Kebab Pizza",
    description: "mozzarella, kebab",
    price: 24.99,
  },
  {
    id: "p2",
    name: "Supreme Pizza",
    description: "mozzarella, bacon, beef mince, pepperoni, mushroom, olives",
    price: 19.99,
  },
  {
    id: "p3",
    name: "BBQ Meatlovers Pizza",
    description: "BBQ sauce, mozzarella, pepperoni, bacon, beef mince, ham",
    price: 22.99,
  },
  {
    id: "p4",
    name: "Hawaiian (Ham & Pineapple) Pizza",
    description: "mozzarella, ham, pineapple",
    price: 17.99,
  },
  {
    id: "p5",
    name: "Pepperoni Pizza",
    description: "mozzarella, pepperoni",
    price: 17.99,
  },
  {
    id: "p6",
    name: "Margherita Pizza",
    description: "mozzarella, basil, olive oil, salt",
    price: 14.99,
  },
];

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <div className={classes.meals}>
      <Card>
        <h2>Menu</h2>
        <ul>{mealsList}</ul>
      </Card>
    </div>
  );
}

export default AvailableMeals;
