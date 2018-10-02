"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Geometry_1 = require("../../core/Geometry");
class Cube extends Geometry_1.default {
    constructor(width, height, depth) {
        super();
        let widthHalf = width / 2;
        let heightHalf = height / 2;
        let depthHalf = depth / 2;
        // v 代表点 也就是向量
        this.v(widthHalf, heightHalf, -depthHalf);
        this.v(widthHalf, -heightHalf, -depthHalf);
        this.v(-widthHalf, -heightHalf, -depthHalf);
        this.v(-widthHalf, heightHalf, -depthHalf);
        this.v(widthHalf, heightHalf, depthHalf);
        this.v(widthHalf, -heightHalf, depthHalf);
        this.v(-widthHalf, -heightHalf, depthHalf);
        this.v(-widthHalf, heightHalf, depthHalf);
        // f 代表面
        this.f4(0, 1, 2, 3); // 后
        this.f4(4, 7, 6, 5); // 前
        this.f4(0, 4, 5, 1); // 右
        this.f4(1, 5, 6, 2); // 下
        this.f4(2, 6, 7, 3); // 左
        this.f4(4, 0, 3, 7); // 上
    }
}
exports.default = Cube;
//# sourceMappingURL=Cube.js.map