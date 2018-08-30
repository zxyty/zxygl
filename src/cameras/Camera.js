import Vector3 from "../core/Vector3";
import Matrix4 from "../core/Matrix4";

export default class Camera extends Vector3 {
  constructor(x, y, z) {
    super(x, y, z);

    this.up = new Vector3(0, 1, 0);
    this.target = new Vector3(0, 0, 0); //lookAt center
    this.zoom = 3;
    this.focus = 500;
    this.roll = 0;

    this.matrix = new Matrix4();

    this.updateMatrix();
  }

  updateMatrix() {
    this.matrix.lookAt(this, this.target, this.up);
  }

  toString() {
    return "Camera ( " + this.x + ", " + this.y + ", " + this.z + " )";
  }
}
