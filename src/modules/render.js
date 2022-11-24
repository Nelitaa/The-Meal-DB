import postComments from './postcomments.js';

const ALL_MEALS = document.querySelector('#all-meals');
const RENDER = (meals, alls) => {
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
    LIKE_IMG.setAttribute('id', meal.id);
    LIKE_IMG.src = './assets/img/heart-line.png';
    LIKE_IMG.alt = 'like icon';
    CONTAINER_LIKES.appendChild(LIKE_IMG);

    const LIKES = document.createElement('p');
    LIKES.className = 'likes';
    LIKES.innerHTML = `${meal.likes} likes`;
    CONTAINER_LIKES.appendChild(LIKES);

    const COMMENTS = document.createElement('button');
    COMMENTS.className = 'comments';
    COMMENTS.innerHTML = 'Comments';
    COMMENTS.setAttribute('name', `${meal.id}`);
    COMMENTS.addEventListener('click', (e) => {
      const a = e.target.name;
      const res = alls.filter((item) => item.idMeal === a);
      // console.log(res[0]);
      const parmodal = document.querySelector('.parmodal');
      parmodal.style.display = 'grid';
      parmodal.innerHTML = `
      <div class="parmodal__modal">
        <div class="front"><button id="close" class="close">&times;</button></div>
        <div class="parmodal__modal__details">
          <div class="parmodal__modal__details__detail">
           <div class="parmodal__modal__details__detail__responsive">
            <img src="${res[0].strMealThumb}" alt="" class="responsive parmodal__modal__details__detail__responsive__respo">
           </div>
            <h3>Add comment</h3>
            <form action="">
              <div class="formcontrol">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div class="formcontrol">
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div class="formcontrol">
                <input type="submit" value="comment" />
              </div>
            </form>
          </div>
          <div class="parmodal__modal__details__detail">
            <span>${res[0].strMeal}</span>
            <p>
            ${res[0].strInstructions}
            strInstructions
            </p>
            <h3>comments <span>14</span></h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
      </div>
    `;
      const close = document.querySelector('#close');
      close.addEventListener('click', () => {
        parmodal.style.display = 'none';
      });
      const form = document.querySelector('form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newData = {
          item_id: meal.id,
          username: form.name.value,
          comment: form.textarea.value,
        };
        postComments(newData);
        // console.log(meal.id, form.textarea.value, form.name.value);
        // console.log('SUBMITED');
      });
    });
    MEAL.appendChild(COMMENTS);
    const RESERVATIONS = document.createElement('button');
    RESERVATIONS.className = 'reservations';
    RESERVATIONS.innerHTML = 'Reservations';
    MEAL.appendChild(RESERVATIONS);
  });
};

export default RENDER;
