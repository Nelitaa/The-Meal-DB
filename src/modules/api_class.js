const URL = 'https://themealdb.com/api';

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
