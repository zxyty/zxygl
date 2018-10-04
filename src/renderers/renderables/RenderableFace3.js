"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_1 = require("../../core/Vector2");
class RenderableFace3 {
    constructor() {
        this.v1 = new Vector2_1.default(0, 0);
        this.v2 = new Vector2_1.default(0, 0);
        this.v3 = new Vector2_1.default(0, 0);
        this.screenZ;
        this.color;
        this.material;
        this.uvs;
    }
}
exports.default = RenderableFace3;
//# sourceMappingURL=RenderableFace3.js.map