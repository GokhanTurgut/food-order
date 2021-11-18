import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [mealsLoading, setMealsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        "https://food-app-8e47b-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const data = await response.json();

      const fetchedMeals = [];

      for (let key in data) {
        fetchedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(fetchedMeals);
      setMealsLoading(false);
    }
    fetchMeals().catch((error) => {
      setError(`Error! Could not fetch menu, details: ${error}`);
      throw new Error(`Error! Could not fetch menu, details: ${error}`);
    });
  }, []);

  const mealsList = meals.map((meal) => {
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

  let content = "";

  if (mealsLoading) {
    content = <p className={classes.menuLoading}>Menu Loading...</p>;
  }

  if (!mealsLoading && error !== "") {
    content = <p className={classes.error}>{error}</p>;
  }

  if (!mealsLoading && error === "") {
    content = (
      <Card>
        <h2>Menu</h2>
        <ul>{mealsList}</ul>
      </Card>
    );
  }

  return <div className={classes.meals}>{content}</div>;
}

export default AvailableMeals;
