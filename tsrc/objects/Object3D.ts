import Vector3 from "../core/Vector3";
import Matrix4 from "../core/Matrix4";
import { tMaterial } from "../type";

export default class Object3D {
  // material: tMaterial[]
  material;

  constructor(material) {
    this.position = new Vector3(0, 0, 0);
    this.rotation = new Vector3(0, 0, 0);
    this.scale = new Vector3(1, 1, 1);

    this.matrix = new Matrix4();            // 模型矩阵
    this.screen = new Vector3(0, 0, 0);

	  this.material = material instanceof Array ? material : [material];
  }

  updateMatrix() {
    this.matrix.identity();
    this.matrix.multiplySelf(
      Matrix4.translationMatrix(
        this.position.x,
        this.position.y,
        this.position.z
      )
    );
    // this.matrix.multiplySelf(
    //   Matrix4.rotationMatrix(this.rotation.x, this.rotation.y, this.rotation.z)
    // );
    this.matrix.multiplySelf(
      Matrix4.rotationXMatrix(this.rotation.x)
    );
    this.matrix.multiplySelf(
      Matrix4.rotationYMatrix(this.rotation.y)
    );
    this.matrix.multiplySelf(
      Matrix4.rotationZMatrix(this.rotation.z)
    );
    this.matrix.multiplySelf(
      Matrix4.scaleMatrix(this.scale.x, this.scale.y, this.scale.z)
    );
  }
}
