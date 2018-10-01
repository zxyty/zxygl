import Vector3 from "./Vector3";
import Color from "./Color";
import Vertex from "./Vertex";

export default class Face4 {
  a: Vertex
  b: Vertex
  c: Vertex
  d: Vertex

  constructor(a, b, c, d, uv, normal, color) {
    // super(
    //   (a.x + b.x + c.x + d.x) / 4,
    //   (a.y + b.y + c.y + d.y) / 4,
    //   (a.z + b.z + c.z + d.z) / 4
    // );

    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;

    this.screen = new Vector3();
    this.normal = normal || Vector3();

    this.color = color || new Color();
    this.uv = uv || [[0, 0], [0, 0], [0, 0], [0, 0]];

  }

  toString() {
    return 'Face4 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' )';
  }
}
