import Geometry from "../../core/Geometry";
import Vertex from "../../core/Vertex";
import Face4 from "../../core/Face4";

export default class Cube extends Geometry {
  constructor(width, height, depth) {
    super();

    let widthHalf = width / 2;
    let heightHalf = height / 2;
    let depthHalf = depth / 2;

    this.v(widthHalf, heightHalf, -depthHalf);
    this.v(widthHalf, -heightHalf, -depthHalf);
    this.v(-widthHalf, -heightHalf, -depthHalf);
    this.v(-widthHalf, heightHalf, -depthHalf);

    this.v(widthHalf, heightHalf, depthHalf);
    this.v(widthHalf, -heightHalf, depthHalf);
    this.v(-widthHalf, -heightHalf, depthHalf);
    this.v(-widthHalf, heightHalf, depthHalf);

    this.f4(0, 1, 2, 3);
    this.f4(4, 7, 6, 5);
    this.f4(0, 4, 5, 1);
    this.f4(1, 5, 6, 2);
    this.f4(2, 6, 7, 3);
    this.f4(4, 0, 3, 7);

  }

  v(x, y, z) {
    this.vertices.push(new Vertex(x, y, z));
  }

  f4(a, b, c, d) {
      this.faces.push(new Face4(
          this.vertices[a],
          this.vertices[b],
          this.vertices[c],
          this.vertices[d]
      ))
  }
}
