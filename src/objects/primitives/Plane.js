"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Geometry_1 = require("../../core/Geometry");
class Plane extends Geometry_1.default {
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
}
exports.default = Plane;
//# sourceMappingURL=Plane.js.map