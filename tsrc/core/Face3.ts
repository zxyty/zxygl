import Vector3 from "./Vector3";
import Color from "./Color";

export default class Face3 {
  a: number;
  b: number;
  c: number;

  screen: Vector3;
  normal: Vector3;
  color: Color;

  constructor(a: number, b: number, c: number, normal?: Vector3, color?: Color) {
    // super((a.x + b.x + c.x) / 3, (a.y + b.y + c.y) / 3, (a.z + b.z + c.z) / 3);

    this.a = a;
    this.b = b;
    this.c = c;

    this.screen = new Vector3();
    this.normal = normal || new Vector3();

    this.color = color || new Color();
    
  }

  toString() {
    return 'Face3 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' )';
  }
}
