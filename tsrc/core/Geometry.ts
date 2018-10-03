import Vertex from "./Vertex";
import Face4 from "./Face4";
import Vector3 from "./Vector3";
import Face3 from "./Face3";

export default class Geometry {
  vertices: Vertex[];
  faces: Face4[] | Face3[];

  constructor() {
    this.vertices = new Array();
    this.faces = new Array();
  }
  v(x: number, y: number, z: number) {
    this.vertices.push(new Vertex(new Vector3(x, y, z), null));
  }
  f4(a: number, b: number, c: number, d: number) {
    
    this.faces.push(new Face4(a, b, c, d, null, null, null))
  }
  computeNormals() {
    let v, f, vA, vB, vC, cb, ab, normal;
    
    for (v = 0; v < this.vertices.length; v++) {
      this.vertices[v].normal.set(0, 0 ,0);
    }

    for(f = 0; f < this.faces.length; f++) {
      vA = this.vertices[this.faces[f].a];
      vB = this.vertices[this.faces[f].b];
      vC = this.vertices[this.faces[f].c];

      cb = new Vector3();
      ab = new Vector3();
      normal = new Vector3();

      cb.sub(vC.position, vB.position);
      ab.sub(vA.position, vB.position);
      cb.cross(ab);

      if(!cb.isZero()) {
        cb.normalize();
      }

      this.faces[f].normal = cb;

      vA.normal.addSelf(normal);
      vB.normal.addSelf(normal);
      vC.normal.addSelf(normal);

      if(this.faces[f] instanceof Face4) {
        let face =  this.faces[f] as Face4;
        this.vertices[face.d].normal.addSelf(normal);
      }

    }
  }
}
