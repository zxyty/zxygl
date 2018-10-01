export default class Scene {
  constructor() {
    this.objects = new Array();
  }

  add(object) {
    this.objects.push(object);
  }
  
  remove(object) {
    for (let i = 0; i < this.objects.length; i++) {
      const element = this.objects[i];
      if (object == element) {
        alert("scene-remove");
      }
    }
  }

  toString() {
    return "Scene ( " + this.objects + " )";
  }
}
