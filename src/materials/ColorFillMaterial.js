"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = require("../core/Color");
class ColorFillMaterial {
    constructor(hex, opacity) {
        this.color = new Color_1.default((opacity >= 0 ? (opacity * 0xff) << 24 : 0xff000000) | hex);
    }
    toString() {
        return 'ColorFillMaterial ( color: ' + this.color + ' )';
    }
}
exports.default = ColorFillMaterial;
//# sourceMappingURL=ColorFillMaterial.js.map