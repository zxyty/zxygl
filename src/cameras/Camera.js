import Vector3 from "../core/Vector3";
import Matrix4 from "../core/Matrix4";

export default class Camera {
  constructor(x, y, z) {
    super(x, y, z);

    this.position = new Vector3(x, y, z);     // 相机位置
    this.target = {
      position: new Vector3(0, 0, 0)
    };

    this.matrix = new Matrix4();              // 观察矩阵（视图矩阵）
    this.projectionMatrix = Matrix4.makePerspective(45, 1 /*SCREEN_WIDTH/SCREEN_HEIGHT*/, 0.001, 1000); // 投影矩阵
    this.up = new Vector3(0, 1, 0);
    this.roll = 0;

    // need to remove this
    this.zoom = 3;
    this.focus = 500;

    this.updateMatrix();
  }

  updateMatrix() {
    this.matrix.lookAt(this.position, this.target.position, this.up);
  }

  toString() {
    return 'Camera ( ' + this.position + ', ' + this.target.position + ' )';
  }
}
