import Object3D from "./Object3D";
import { tMaterial } from "../type";

export default class Particle extends Object3D {
  autoUpdateMatrix: boolean;

  constructor(material: Array<tMaterial>) {
    super(material);

    this.autoUpdateMatrix = false;
  }
}
