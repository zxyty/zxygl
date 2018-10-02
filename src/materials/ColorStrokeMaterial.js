"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = require("../core/Color");
class ColorStrokeMaterial {
    constructor(hex, opacity, lineWidth) {
        this.lineWidth = lineWidth || 1;
        this.color = new Color_1.default((opacity ? (opacity * 0xff) << 24 : 0xff000000) | hex);
    }
    toString() {
        return 'ColorStrokeMaterial ( lineWidth: ' + this.lineWidth + ', color: ' + this.color + ' )';
    }
}
exports.default = ColorStrokeMaterial;
//# sourceMappingURL=ColorStrokeMaterial.js.map