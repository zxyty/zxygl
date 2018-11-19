"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_1 = require("../../core/Vector2");
class RenderableFace4 {
    constructor() {
        this.v1 = new Vector2_1.default(0, 0);
        this.v2 = new Vector2_1.default(0, 0);
        this.v3 = new Vector2_1.default(0, 0);
        this.v4 = new Vector2_1.default(0, 0);
        this.z = null;
        this.color = null;
        this.material = null;
        this.uvs;
        this.overdraw;
    }
}
exports.default = RenderableFace4;
//# sourceMappingURL=RenderableFace4.js.map