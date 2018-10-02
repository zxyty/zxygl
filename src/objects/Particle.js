import Object3D from "./Object3D";
import { tMaterial } from "../type";
export default class Particle extends Object3D {
  // constructor(material: tMaterial) {
  constructor(material) {
    super(material);

    this.size = 1;
  }
}
