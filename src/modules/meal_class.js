export default class Meal {
  constructor(id = null, name, image, likes = 0) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.likes = likes;
  }

  set changeLikes(value) {
    this.likes = value;
  }
}