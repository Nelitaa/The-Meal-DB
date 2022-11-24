import mealsCounter from './meals_counter.js';

describe('Meals Counter', () => {
  it('should return 0 if no meals are selected', () => {
    expect(mealsCounter()).toBe(0);
  });
}

// Path: src/modules/meals_counter.js
export default function mealsCounter() {
  return 0;
}

The test is failing because the function is not defined. Let’s fix that.

// Path: src/modules/meals_counter.js
export default function mealsCounter() {
  return 0;
}

Now the test is passing. Let’s add another test to check if the function returns the correct number of meals.


