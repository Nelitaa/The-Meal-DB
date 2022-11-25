const mealsCounter = () => {
  const mealCounter = document.querySelectorAll('.meal-counter');
  const totalMeals = document.querySelector('.total-meals');

  if (mealCounter.length < 1) {
    totalMeals.innerHTML = ` (${0})`;
    return 0;
  }
  totalMeals.innerHTML = ` (${mealCounter.length})`;
  return (mealCounter.length);
};

export default mealsCounter;