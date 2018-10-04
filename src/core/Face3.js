"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vector3_1 = require("./Vector3");
const Color_1 = require("./Color");
class Face3 {
    constructor(a, b, c, normal, color) {
        // super((a.x + b.x + c.x) / 3, (a.y + b.y + c.y) / 3, (a.z + b.z + c.z) / 3);
        this.a = a;
        this.b = b;
        this.c = c;
        this.screen = new Vector3_1.default();
        this.normal = normal || new Vector3_1.default();
        this.color = color || new Color_1.default();
    }
    toString() {
        return 'Face3 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' )';
    }
}
exports.default = Face3;
//# sourceMappingURL=Face3.js.map