"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vertex_1 = require("./Vertex");
const Face4_1 = require("./Face4");
const Vector3_1 = require("./Vector3");
class Geometry {
    constructor() {
        this.vertices = new Array();
        this.faces = new Array();
        this.uvs = new Array();
    }
    v(x, y, z) {
        this.vertices.push(new Vertex_1.default(new Vector3_1.default(x, y, z), null));
    }
    f4(a, b, c, d) {
        this.faces.push(new Face4_1.default(a, b, c, d, null, null));
    }
    computeNormals() {
        let v, f, vA, vB, vC, cb, ab, normal;
        for (v = 0; v < this.vertices.length; v++) {
            this.vertices[v].normal.set(0, 0, 0);
        }
        for (f = 0; f < this.faces.length; f++) {
            vA = this.vertices[this.faces[f].a];
            vB = this.vertices[this.faces[f].b];
            vC = this.vertices[this.faces[f].c];
            cb = new Vector3_1.default();
            ab = new Vector3_1.default();
            normal = new Vector3_1.default();
            cb.sub(vC.position, vB.position);
            ab.sub(vA.position, vB.position);
            cb.crossSelf(ab);
            if (!cb.isZero()) {
                cb.normalize();
            }
            this.faces[f].normal = cb;
            vA.normal.addSelf(normal);
            vB.normal.addSelf(normal);
            vC.normal.addSelf(normal);
            if (this.faces[f] instanceof Face4_1.default) {
                let face = this.faces[f];
                this.vertices[face.d].normal.addSelf(normal);
            }
        }
    }
}
exports.default = Geometry;
//# sourceMappingURL=Geometry.js.map