import Vertex from "./Vertex";
import Face4 from "./Face4";
import Vector3 from "./Vector3";
import Face3 from "./Face3";

export default class Geometry {
  vertices: Vertex[];
  faces: Array<Face3 | Face4>;
  uvs: Array<any>;

  constructor() {
    this.vertices = new Array();
    this.faces = new Array();
    this.uvs = new Array();
  }
  v(x: number, y: number, z?: number) {
    this.vertices.push(new Vertex(new Vector3(x, y, z), null));
  }
  f4(a: number, b: number, c: number, d: number) {
    
    this.faces.push(new Face4(a, b, c, d, null, null))
  }
  
}
