"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Object3D_1 = require("./Object3D");
class Line extends Object3D_1.default {
    // constructor(geometry: Geometry, material: MaterialType) {
    constructor(geometry, material) {
        super(material);
        this.geometry = geometry;
    }
}
exports.default = Line;
//# sourceMappingURL=Line.js.map