"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vector3_1 = require("./Vector3");
class Vertex {
    constructor(position, normal) {
        this.position = position || new Vector3_1.default(0, 0, 0);
        this.normal = normal || new Vector3_1.default(0, 0, 0);
        this.screen = new Vector3_1.default(0, 0, 0);
        this.visible = true; // internal
    }
    toString() {
        return 'Vertex ( position: ' + this.position + ', normal: ' + this.normal + ' )';
    }
}
exports.default = Vertex;
//# sourceMappingURL=Vertex.js.map