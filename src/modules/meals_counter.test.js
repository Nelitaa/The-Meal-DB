import mealsCounter from './meals_counter.js';

describe('mealsCounter', () => {
  test('should return 0 if there are no meals', () => {
    document.body.innerHTML = '<div class="total-meals"></div>';
    expect(mealsCounter()).toBe(0);
  });

  test('should return the number of meals', () => {
    document.body.innerHTML = '<div class="total-meals"></div><div class="meal-counter"></div><div class="meal-counter"></div>';
    expect(mealsCounter()).toBe(2);
  });
});
