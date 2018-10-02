import Object3D from "./Object3D";
import { tMaterial } from "../type";
import Geometry from "../core/Geometry";

export default class Mesh extends Object3D {
  // doubleSided: Boolean
  doubleSided;

  // constructor(geometry: Geometry, material: tMaterial) {
  constructor(geometry, material) {
    super(material);

    this.geometry = geometry;
	
	  this.doubleSided = false;
  }
  
}
