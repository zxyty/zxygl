"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Object3D_1 = require("./Object3D");
class Mesh extends Object3D_1.default {
    constructor(geometry, material) {
        super(material);
        this.geometry = geometry;
        this.doubleSided = false;
    }
}
exports.default = Mesh;
//# sourceMappingURL=Mesh.js.map