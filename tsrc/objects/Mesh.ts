import Object3D from "./Object3D";
import { tMaterial } from "../type";
import Geometry from "../core/Geometry";

export default class Mesh extends Object3D {
  doubleSided: Boolean;
  geometry: Geometry;

  constructor(geometry: Geometry, material: Array<tMaterial>) {
    super(material);

    this.geometry = geometry;
	
	  this.doubleSided = false;
  }
  
}
