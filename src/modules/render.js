const ALL_MEALS = document.querySelector('#all-meals');

const RENDER = (meals) => {
  meals.forEach((meal) => {
    const MEAL = document.createElement('div');
    MEAL.className = 'meal';
    ALL_MEALS.appendChild(MEAL);

    const MEAL_IMAGE = document.createElement('img');
    MEAL_IMAGE.className = 'meal-image';
    MEAL_IMAGE.src = meal.image;
    MEAL_IMAGE.alt = meal.name;
    MEAL.appendChild(MEAL_IMAGE);

    const CONTAINER_NAME_LIKES = document.createElement('div');
    CONTAINER_NAME_LIKES.className = 'container-name-likes';
    MEAL.appendChild(CONTAINER_NAME_LIKES);

    const MEAL_NAME = document.createElement('h2');
    MEAL_NAME.className = 'meal-name';
    MEAL_NAME.innerHTML = meal.name;
    CONTAINER_NAME_LIKES.appendChild(MEAL_NAME);

    const CONTAINER_LIKES = document.createElement('div');
    CONTAINER_LIKES.className = 'container-likes';
    CONTAINER_NAME_LIKES.appendChild(CONTAINER_LIKES);

    const LIKE_IMG = document.createElement('img');
    LIKE_IMG.className = 'like-icon';
    LIKE_IMG.src = './assets/heart-line.png';
    LIKE_IMG.alt = 'like icon';
    CONTAINER_LIKES.appendChild(LIKE_IMG);

    const LIKES = document.createElement('p');
    LIKES.className = 'likes';
    LIKES.innerHTML = '5 likes';
    CONTAINER_LIKES.appendChild(LIKES);

    const COMMENTS = document.createElement('button');
    COMMENTS.className = 'comments';
    COMMENTS.innerHTML = 'Comments';
    MEAL.appendChild(COMMENTS);

    const RESERVATIONS = document.createElement('button');
    RESERVATIONS.className = 'reservations';
    RESERVATIONS.innerHTML = 'Reservations';
    MEAL.appendChild(RESERVATIONS);
  });
};

export default RENDER;