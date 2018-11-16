"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vector3_1 = require("../core/Vector3");
const Matrix4_1 = require("../core/Matrix4");
class Camera {
    constructor(x, y, z) {
        this.position = new Vector3_1.default(x, y, z); // 相机位置
        this.target = {
            position: new Vector3_1.default(0, 0, 0)
        };
        this.matrix = new Matrix4_1.default(); // 经过lookAt得到的 模型视图矩阵
        this.projectionMatrix = Matrix4_1.default.makePerspective(45, 1 /*SCREEN_WIDTH/SCREEN_HEIGHT*/, 0.001, 1000); // 投影矩阵
        this.up = new Vector3_1.default(0, 1, 0);
        // need to remove this
        this.zoom = 3;
        this.focus = 500;
        this.autoUpdateMatrix = true;
        this.updateMatrix();
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