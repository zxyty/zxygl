"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Geometry_1 = require("../../core/Geometry");
const Vertex_1 = require("../../core/Vertex");
const Vector3_1 = require("../../core/Vector3");
const Face3_1 = require("../../core/Face3");
const Vector2_1 = require("../../core/Vector2");
class Plane extends Geometry_1.default {
    constructor(width, height, segments_width, segments_height) {
        super();
        this.width_half = width / 2,
            this.height_half = height / 2,
            this.gridX = segments_width || 1,
            this.gridY = segments_height || 1,
            this.gridX1 = this.gridX + 1,
            this.gridY1 = this.gridY + 1,
            this.segment_width = width / this.gridX,
            this.segment_height = height / this.gridY;
        for (var iy = 0; iy < this.gridY1; iy++) {
            for (var ix = 0; ix < this.gridX1; ix++) {
                var x = ix * this.segment_width - this.width_half;
                var y = iy * this.segment_height - this.height_half;
                this.vertices.push(new Vertex_1.default(new Vector3_1.default(x, -y, 0)));
            }
        }
        for (iy = 0; iy < this.gridY; iy++) {
            for (ix = 0; ix < this.gridX; ix++) {
                var a = ix + this.gridX1 * iy;
                var b = ix + this.gridX1 * (iy + 1);
                var c = (ix + 1) + this.gridX1 * iy;
                this.faces.push(new Face3_1.default(a, b, c));
                this.uvs.push([
                    new Vector2_1.default(ix / this.gridX, iy / this.gridY),
                    new Vector2_1.default(ix / this.gridX, (iy + 1) / this.gridY),
                    new Vector2_1.default((ix + 1) / this.gridX, iy / this.gridY)
                ]);
                a = (ix + 1) + this.gridX1 * (iy + 1);
                b = (ix + 1) + this.gridX1 * iy;
                c = ix + this.gridX1 * (iy + 1);
                this.faces.push(new Face3_1.default(a, b, c));
                this.uvs.push([
                    new Vector2_1.default((ix + 1) / this.gridX, (iy + 1) / this.gridY),
                    new Vector2_1.default((ix + 1) / this.gridX, iy / this.gridY),
                    new Vector2_1.default(ix / this.gridX, (iy + 1) / this.gridY)
                ]);
            }
        }
    }
}
exports.default = Plane;
//# sourceMappingURL=Plane.js.map