import Object3D from "./Object3D";
export default class Particle extends Object3D {
  constructor(material) {
    super();

    this.size = 1;
    this.material = material;
  }
}
