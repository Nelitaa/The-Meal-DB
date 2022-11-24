import Meal from './meal_class.js';

export default class Api {
  static URL = 'https://themealdb.com/api';


  async getMeals() {
    const RESPONSE = await fetch(`${this.url}/json/v1/1/search.php?s=`);
    const DATA = await RESPONSE.json();
    // console.log(DATA.meals);
    return DATA;

  }

  static async getAllMeals() {
    const arrObj = await this.getMeals();
    const arrMeals = arrObj.map((meal) => new Meal(meal.idMeal, meal.strMeal, meal.strMealThumb));
    return arrMeals;
  }
}