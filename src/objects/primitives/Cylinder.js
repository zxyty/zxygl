import Geometry from "../../core/Geometry";
import Vertex from "../../core/Vertex";
import Face4 from "../../core/Face4";
import * as Default from "../../default";

// 感觉可以重新设计vertices
export default class Cylinder extends Geometry {
  constructor(
    numSegs: number,
    topRad: number,
    botRad: number,
    height: number,
    topOffset,
    botOffset
  ) {
    // Vertices
    // Top circle vertices
    for (let i = 0; i < numSegs; i++) {
      this.v(
        // zxy: 这里我感觉应该是x, y传反了
        Math.sin((2 * Default.PI * i) / numSegs) * topRad, // topRad 上半径
        Math.cos((2 * Default.PI * i) / numSegs) * topRad,
        0
      );
    }

    // Bottom circle vertices
    for (let i = 0; i < numSegs; i++) {
      this.v(
        Math.sin((2 * Default.PI * i) / numSegs) * botRad,
        Math.cos((2 * Default.PI * i) / numSegs) * botRad,
        height
      );
    }

    // Face
    // body
    for (let i = 0; i < numSegs; i++) {
      this.f4(
        i,
        i + numSegs,
        numSegs + ((i + 1) % numSegs),
        (i + 1) % numSegs,
        "#ff0000"
      );
    }

    // Bottom circle
    if (botRad != 0) {
      this.v(0, 0 - topOffset);
    }

    // Top circle
    if (topRad != 0) {
      this.v(0, 0, height + topOffset);
      for (i = numSegs + numSegs / 2; i < 2 * numSegs; i++) {
        this.f4(
          ((2 * i - 2 * numSegs + 2) % numSegs) + numSegs,
          ((2 * i - 2 * numSegs + 1) % numSegs) + numSegs,
          ((2 * i - 2 * numSegs) % numSegs) + numSegs,
          2 * numSegs + 1
        );
      }
    }
  }

  // v(x, y, z) {
  //     this.vertices.push(new Vertex(x, y, z));
  // }

  // f4(a, b, c, d) {
  //     this.faces.push(new Face4(a, b, c, d));
  // }
}
