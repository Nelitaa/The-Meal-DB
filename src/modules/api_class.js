import Meal from './meal_class.js';

export default class Api {
  static URL = 'https://themealdb.com/api';

  static async getMeals() {
    const RESPONSE = await fetch(`${Api.URL}/json/v1/1/search.php?s=`);
    const { meals } = await RESPONSE.json();
    return meals;
  }

  static async getAllMeals() {
    const arrObj = await this.getMeals();
    const arrMeals = arrObj.map((meal) => new Meal(meal.idMeal, meal.strMeal, meal.strMealThumb, meal.strInstructions));
    return arrMeals;
  }
}