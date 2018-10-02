"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vector3_1 = require("../core/Vector3");
const Matrix4_1 = require("../core/Matrix4");
class Object3D {
    constructor(material) {
        this.position = new Vector3_1.default(0, 0, 0);
        this.rotation = new Vector3_1.default(0, 0, 0);
        this.scale = new Vector3_1.default(1, 1, 1);
        this.matrix = new Matrix4_1.default(); // 模型矩阵
        this.screen = new Vector3_1.default(0, 0, 0);
        this.material = material instanceof Array ? material : [material];
    }
    updateMatrix() {
        this.matrix.identity();
        this.matrix.multiplySelf(Matrix4_1.default.translationMatrix(this.position.x, this.position.y, this.position.z));
        // this.matrix.multiplySelf(
        //   Matrix4.rotationMatrix(this.rotation.x, this.rotation.y, this.rotation.z)
        // );
        this.matrix.multiplySelf(Matrix4_1.default.rotationXMatrix(this.rotation.x));
        this.matrix.multiplySelf(Matrix4_1.default.rotationYMatrix(this.rotation.y));
        this.matrix.multiplySelf(Matrix4_1.default.rotationZMatrix(this.rotation.z));
        this.matrix.multiplySelf(Matrix4_1.default.scaleMatrix(this.scale.x, this.scale.y, this.scale.z));
    }
}
exports.default = Object3D;
//# sourceMappingURL=Object3D.js.map