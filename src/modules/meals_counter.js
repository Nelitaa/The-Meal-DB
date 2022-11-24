const mealsCounter = () => {
  const mealCounter = document.querySelectorAll('.meal-counter');
  let counter = 1;

  mealCounter.forEach((meal) => {
    meal.innerHTML = `Meal ${counter}`;
    counter += 1;
  });

  const totalMeals = document.querySelectorAll('.total-meals');
  totalMeals.forEach((total) => {
    if (mealCounter.length < 1) {
      total.innerHTML = ` (${0})`;
      return 0;
    }
    total.innerHTML = ` (${mealCounter.length})`;
    return (mealCounter.length);
  });
};

export default mealsCounter;