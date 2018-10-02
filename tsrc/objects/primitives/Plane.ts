import Geometry from "../../core/Geometry";
import Vertex from "../../core/Vertex";
import Face4 from "../../core/Face4";
export default class Plane extends Geometry {
  constructor(width, height) {
    super();

    let widthHalf = width / 2;
    let heightHalf = height / 2;

    this.v(-widthHalf, heightHalf, 0);
    this.v(widthHalf, heightHalf, 0);
    this.v(widthHalf, -heightHalf, 0);
    this.v(-widthHalf, -heightHalf, 0);

    this.f4(0, 1, 2, 3);
  }

  // v(x, y, z) {
  //   this.vertices.push(new Vertex(x, y, z));
  // }

  // f4(a, b, c, d) {
  //   this.faces.push(
  //     new Face4(
  //       this.vertices[a],
  //       this.vertices[b],
  //       this.vertices[c],
  //       this.vertices[d]
  //     )
  //   );
  // }
}
