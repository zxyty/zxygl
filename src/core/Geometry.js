import Vertex from "./Vertex";
import Face4 from "./Face4";

export default class Geometry {
  constructor() {
    this.vertices = new Array();
    this.faces = new Array();
  }
  v(x, y, z) {
    this.vertices.push(new Vertex(x, y, z));
  }
  f4(a, b, c, d) {
    this.faces.push(new Face4(a, b, c, d));
  }
}
