import Object3D from "../objects/Object3D";

export default class Scene {
  objects: Object3D[];

  constructor() {
    this.objects = new Array<Object3D>();
  }

  add(object: Object3D) {
    this.objects.push(object);
  }
  
  remove(object: Object3D) {
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
