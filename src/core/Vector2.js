"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vector2 {
    constructor(x, y) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }
    static add(a, b) {
        return new Vector2(a.x + b.x, a.y + b.y);
    }
    static sub(a, b) {
        return new Vector2(a.x - b.x, a.y - b.y);
    }
    static multiply(a, s) {
        return new Vector2(a.x * s, a.y * s);
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
    copy(v) {
        this.x = v.x;
        this.y = v.y;
    }
    addSelf(v) {
        this.x += v.x;
        this.y += v.y;
    }
    add(v1, v2) {
        this.x = v1.x + v2.x;
        this.y = v1.y + v2.y;
    }
    subSelf(v) {
        this.x -= v.x;
        this.y -= v.y;
    }
    sub(v1, v2) {
        this.x = v1.x - v2.x;
        this.y = v1.y - v2.y;
    }
    multiplyScalar(s) {
        this.x *= s;
        this.y *= s;
    }
    unit() {
        this.multiplyScalar(1 / this.length());
    }
    expand(v1, v2) {
        // 暂时有问题
        this.unit(this.sub(v1, v2));
        v2.addSelf(this);
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    toString() {
        return "Vector2 (" + this.x + ", " + this.y + ")";
    }
}
exports.default = Vector2;
//# sourceMappingURL=Vector2.js.map