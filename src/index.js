import './style.css';
import Meal from './modules/meal_class.js';
import Api from './modules/api_class.js';
import RENDER from './modules/render.js';

const HAMBURGER = document.querySelector('.hamburger');
const MOBILE_MENU = document.querySelector('.mobile-menu');
const X_BUTTON = document.querySelector('.container-x');

HAMBURGER.addEventListener('click', () => {
  HAMBURGER.classList.toggle('disabled');
  MOBILE_MENU.classList.toggle('active');
  X_BUTTON.classList.toggle('active');
});

X_BUTTON.addEventListener('click', () => {
  MOBILE_MENU.classList.toggle('active');
  HAMBURGER.classList.toggle('disabled');
window.addEventListener('load', () => {
  const API = new Api();
  API.getMeals().then((data) => {
    const MEALS = data.meals.map((meal) => new Meal(meal.strMeal, meal.strMealThumb));
    RENDER(MEALS);
  });
});