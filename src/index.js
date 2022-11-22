import './style.css';
import Meal from './modules/meal_class.js';
import Api from './modules/api_class.js';
import RENDER from './modules/render.js';

window.addEventListener('load', () => {
  const API = new Api();
  API.getMeals().then((data) => {
    const MEALS = data.meals.map((meal) => new Meal(meal.strMeal, meal.strMealThumb));
    RENDER(MEALS);
  });
});