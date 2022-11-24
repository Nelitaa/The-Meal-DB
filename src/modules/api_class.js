const URL = 'https://themealdb.com/api';

class Api {
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

export default Api;