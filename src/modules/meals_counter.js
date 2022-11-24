const mealsCounter = () => {
  const mealCounter = document.querySelectorAll('.meal-counter');
  let counter = 1;
  mealCounter.forEach((meal) => {
    meal.innerHTML = `Meal ${counter}`;
    counter += 1;
  });
};

export default mealsCounter;