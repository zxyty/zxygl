"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vector3_1 = require("./Vector3");
const Color_1 = require("./Color");
class Face4 {
    constructor(a, b, c, d, normal, color) {
        // super(
        //   (a.x + b.x + c.x + d.x) / 4,
        //   (a.y + b.y + c.y + d.y) / 4,
        //   (a.z + b.z + c.z + d.z) / 4
        // );
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.screen = new Vector3_1.default();
        this.normal = normal || new Vector3_1.default();
        this.color = color || new Color_1.default();
    }
    toString() {
        return 'Face4 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' )';
    }
}
exports.default = Face4;
//# sourceMappingURL=Face4.js.map