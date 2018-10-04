"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Geometry_1 = require("../../core/Geometry");
const Default = require("../../default");
// 感觉可以重新设计vertices
class Cylinder extends Geometry_1.default {
    constructor(numSegs, topRad, botRad, height, topOffset, botOffset) {
        super();
        // Vertices
        // Top circle vertices
        for (let i = 0; i < numSegs; i++) {
            this.v(
            // zxy: 这里我感觉应该是x, y传反了
            Math.sin((2 * Default.PI * i) / numSegs) * topRad, // topRad 上半径
            Math.cos((2 * Default.PI * i) / numSegs) * topRad, 0);
        }
        // Bottom circle vertices
        for (let i = 0; i < numSegs; i++) {
            this.v(Math.sin((2 * Default.PI * i) / numSegs) * botRad, Math.cos((2 * Default.PI * i) / numSegs) * botRad, height);
        }
        // Face
        // body
        for (let i = 0; i < numSegs; i++) {
            this.f4(i, i + numSegs, numSegs + ((i + 1) % numSegs), (i + 1) % numSegs, "#ff0000");
        }
        // Bottom circle
        if (botRad != 0) {
            this.v(0, 0 - topOffset);
        }
        // Top circle
        if (topRad != 0) {
            this.v(0, 0, height + topOffset);
            for (let i = numSegs + numSegs / 2; i < 2 * numSegs; i++) {
                this.f4(((2 * i - 2 * numSegs + 2) % numSegs) + numSegs, ((2 * i - 2 * numSegs + 1) % numSegs) + numSegs, ((2 * i - 2 * numSegs) % numSegs) + numSegs, 2 * numSegs + 1);
            }
        }
    }
}
exports.default = Cylinder;
//# sourceMappingURL=Cylinder.js.map