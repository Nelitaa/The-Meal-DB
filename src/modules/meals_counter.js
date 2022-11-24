const mealsCounter = () => {
  const mealCounter = document.querySelectorAll('.meal-counter');
  const totalMeals = document.querySelectorAll('.total-meals');
  let counter = 1;

  mealCounter.forEach((meal) => {
    meal.innerHTML = `Meal ${counter}`;
    counter += 1;
  });

  totalMeals.forEach((total) => {
    if(mealCounter.length < 1){
      total.innerHTML = ` (${0})`;
    }else {
      total.innerHTML = ` (${counter - 1})`;
    }
  });
};

export default mealsCounter;