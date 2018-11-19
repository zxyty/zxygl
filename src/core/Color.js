"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Color {
    constructor(hex) {
        this.r = null;
        this.g = null;
        this.b = null;
        this.a = null;
        this.hex = null;
        this.styleString = 'rgba(0, 0, 0, 1)';
        // this.setHex(hex ? hex : 0xff000000);
        this.setHex(hex);
    }
    setHex(hex) {
        this.hex = hex;
        this.updateRGBA();
        this.updateStyleString();
    }
    setRGBA(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.updateHex();
        this.updateStyleString();
    }
    updateRGBA() {
        this.r = this.hex >> 16 & 0xff;
        this.g = this.hex >> 8 & 0xff;
        this.b = this.hex & 0xff;
        this.a = (this.hex >> 24 & 0xff) / 255;
    }
    updateHex() {
        this.hex = Math.floor(this.a * 255) << 24 | this.r << 16 | this.g << 8 | this.b;
    }
    updateStyleString() {
        this.styleString =
            "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
    }
    toString() {
        return ("Color ( r: " +
            this.r +
            ", g: " +
            this.g +
            ", b: " +
            this.b +
            ", a: " +
            this.a +
            ", hex: " +
            this.hex +
            ", style: " +
            this.styleString +
            " )");
    }
}
exports.default = Color;
//# sourceMappingURL=Color.js.map