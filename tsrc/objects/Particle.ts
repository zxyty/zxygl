import Object3D from "./Object3D";
import { tMaterial } from "../type";
export default class Particle extends Object3D {
  size: number;
  
  constructor(material: tMaterial) {
    super(material);

    this.size = 1;
  }
}
