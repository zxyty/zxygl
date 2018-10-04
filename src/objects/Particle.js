"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Object3D_1 = require("./Object3D");
class Particle extends Object3D_1.default {
    constructor(material) {
        super(material);
        this.size = 1;
        this.autoUpdateMatrix = false;
    }
}
exports.default = Particle;
//# sourceMappingURL=Particle.js.map