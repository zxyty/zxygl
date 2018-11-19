"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vector3_1 = require("../core/Vector3");
const Matrix4_1 = require("../core/Matrix4");
class Camera {
    constructor(fov, aspect, near, far) {
        this.position = new Vector3_1.default(0, 0, 0); // 相机位置
        this.target = {
            position: new Vector3_1.default(0, 0, 0)
        };
        this.matrix = new Matrix4_1.default(); // 经过lookAt得到的 模型视图矩阵
        this.projectionMatrix = Matrix4_1.default.makePerspective(fov, aspect, near, far); // 投影矩阵
        this.up = new Vector3_1.default(0, 1, 0);
        this.autoUpdateMatrix = true;
    }
    updateMatrix() {
        this.matrix.lookAt(this.position, this.target.position, this.up);
    }
    toString() {
        return 'Camera ( ' + this.position + ', ' + this.target.position + ' )';
    }
}
exports.default = Camera;
//# sourceMappingURL=Camera.js.map