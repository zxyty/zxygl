import Vector3 from "./Vector3";
import Color from "./Color";
import Vertex from "./Vertex";

export default class Face3 {
  a: Vertex;
  b: Vertex;
  c: Vertex;

  screen: Vector3;
  normal: Vector3;
  color: Color;
  uv: Array<Array<number>>

  constructor(a, b, c, uv, normal, color) {
    // super((a.x + b.x + c.x) / 3, (a.y + b.y + c.y) / 3, (a.z + b.z + c.z) / 3);

    this.a = a;
    this.b = b;
    this.c = c;

    this.screen = new Vector3();
    this.uv = uv || [[0,0],[0,0],[0,0]];
    this.normal = normal || new Vector3();

    this.color = color || new Color();
    
  }

  toString() {
    return 'Face3 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' )';
  }
}
