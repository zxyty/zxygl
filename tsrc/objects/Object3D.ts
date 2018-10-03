import Vector3 from "../core/Vector3";
import Matrix4 from "../core/Matrix4";
import { tMaterial } from "../type";

export default class Object3D {
  material: Array<tMaterial>;
  
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
  matrix: Matrix4;
  screen: Vector3;

  autoUpdateMatrix: boolean;

  constructor(material: Array<tMaterial>) {
    this.position = new Vector3(0, 0, 0);
    this.rotation = new Vector3(0, 0, 0);
    this.scale = new Vector3(1, 1, 1);

    this.matrix = new Matrix4();            // 模型矩阵
    this.screen = new Vector3(0, 0, 0);

    this.material = material instanceof Array ? material : [material];
    
    this.autoUpdateMatrix = true;
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
