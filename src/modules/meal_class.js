export default class Meal {
  constructor(id = null, name, image, likes = 0, description) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.likes = likes;
    this.description = description;
  }

  set changeLikes(value) {
    this.likes = value;
  }
}