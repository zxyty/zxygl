import Vector3 from "./Vector3";

export default class Vector4 {
    x: number;
    y: number;
    z: number;
    w: number;
    
    constructor(x, y, z, w) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.w = w || 0;
    }

    set(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    copy(v: Vector4) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        this.w = v.w;
    }

    add(v1: Vector4, v2: Vector4) {
        this.x = v1.x + v2.x;
        this.y = v1.y + v2.y;
        this.z = v1.z + v2.z;
        this.w = v1.w + v2.w;
    }

    addSelf(v: Vector4) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        this.w += v.w;
    }

    sub(v1: Vector4, v2: Vector4) {
        this.x = v1.x - v2.x;
        this.y = v1.y - v2.y;
        this.z = v1.z - v2.z;
        this.w = v1.w - v2.w;
    }

    subSelf(v: Vector4) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        this.w -= v.w;
    }

    clone() {
        return new Vector4(this.x, this.y, this.z, this.w);
    }

    toVector3() {
        return new Vector3(this.x / this.w, this.y / this.w, this.z / this.w);
    }

    toString() {
        return 'Vector4 (' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ')';
    }
}