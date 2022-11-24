import Meal from './meal_class.js';


export class Api {
  constructor() {
    this.url = URL;
  }

  async getMeals() {
    const RESPONSE = await fetch(`${this.url}/json/v1/1/search.php?s=`);
    const DATA = await RESPONSE.json();
    // console.log(DATA.meals);
    return DATA;
  }
}
export const postss = () => {
  const a = new Api();
  return a.getMeals().then((data) => data);
};
// const hello = async () => {
//   const ss = await post();
//   return ss;
// };

export  class Api {
  static URL = 'https://themealdb.com/api';

  static async getMeals() {
    const RESPONSE = await fetch(`${Api.URL}/json/v1/1/search.php?s=`);
    const { meals } = await RESPONSE.json();
    return meals;
  }

  static async getAllMeals() {
    const arrObj = await this.getMeals();
    const arrMeals = arrObj.map((meal) => new Meal(meal.idMeal, meal.strMeal, meal.strMealThumb));
    return arrMeals;
  }
}

