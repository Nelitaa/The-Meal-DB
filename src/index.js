import './style.css';
import Meal from './modules/meal_class.js';
import Api from './modules/api_class.js';
import RENDER from './modules/render.js';

window.addEventListener('load', () => {
  const API = new Api();
  API.getMeals().then((data) => {
    const all = data.meals;
    const MEALS = data.meals.map(
      (meal) => new Meal(meal.strMeal, meal.strMealThumb, meal.idMeal),
    );
    RENDER(MEALS, all);
  });
});

const parmodal = document.querySelector('.parmodal');
window.addEventListener('click', (e) => {
  if (e.target === parmodal) {
    parmodal.style.display = 'none';
  }
});
