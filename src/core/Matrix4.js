"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vector3_1 = require("./Vector3");
const Vector4_1 = require("./Vector4");
const Default = require("../default");
class Matrix4 {
    constructor() {
        this.identity();
    }
    static translationMatrix(x, y, z) {
        let m = new Matrix4();
        m.n14 = x;
        m.n24 = y;
        m.n34 = z;
        return m;
    }
    static scaleMatrix(x, y, z) {
        let m = new Matrix4();
        m.n11 = x;
        m.n22 = y;
        m.n33 = z;
        return m;
    }
    static rotationXMatrix(theta) {
        let rot = new Matrix4();
        rot.n22 = rot.n33 = Math.cos(theta);
        rot.n32 = Math.sin(theta);
        rot.n23 = -rot.n32;
        return rot;
    }
    static rotationYMatrix(theta) {
        let rot = new Matrix4();
        rot.n11 = rot.n33 = Math.cos(theta);
        rot.n13 = Math.sin(theta);
        rot.n31 = -rot.n13;
        return rot;
    }
    static rotationZMatrix(theta) {
        let rot = new Matrix4();
        rot.n11 = rot.n22 = Math.cos(theta);
        rot.n21 = Math.sin(theta);
        rot.n12 = -rot.n21;
        return rot;
    }
    static makeFrustum(left, right, bottom, top, near, far) {
        let m = new Matrix4(), x = 2 * near / (right - left), y = 2 * near / (top - bottom), a = (right + left) / (right - left), b = (top + bottom) / (top - bottom), c = -(far + near) / (far - near), d = -2 * far * near / (far - near);
        m.n11 = x;
        m.n13 = a;
        m.n22 = y;
        m.n23 = b;
        m.n33 = c;
        m.n34 = d;
        m.n43 = -1;
        m.n44 = 0;
        return m;
    }
    static makePerspective(fovy, aspect, near, far) {
        let ymax = near * Math.tan(fovy * Default.PERPI); // Math.tan(fovy * Math.PI / 360.0) 
        let ymin = -ymax;
        let xmin = ymin * aspect;
        let xmax = ymax * aspect;
        return Matrix4.makeFrustum(xmin, xmax, ymin, ymax, near, far);
    }
    identity() {
        this.n11 = 1;
        this.n12 = 0;
        this.n13 = 0;
        this.n14 = 0;
        this.n21 = 0;
        this.n22 = 1;
        this.n23 = 0;
        this.n24 = 0;
        this.n31 = 0;
        this.n32 = 0;
        this.n33 = 1;
        this.n34 = 0;
        this.n41 = 0;
        this.n42 = 0;
        this.n43 = 0;
        this.n44 = 1;
        this.x = new Vector3_1.default(0, 0, 0);
        this.y = new Vector3_1.default(0, 0, 0);
        this.z = new Vector3_1.default(0, 0, 0);
    }
    // lookAt(eye: Vector3, center: Vector3, up: Vector3) {
    lookAt(eye, center, up) {
        this.z.sub(center, eye);
        this.z.normalize();
        this.x.copy(this.z);
        this.x.crossSelf(up);
        this.x.normalize();
        this.y.copy(this.x);
        this.y.crossSelf(this.z);
        this.y.normalize();
        this.y.negate(); //
        this.n11 = this.x.x;
        this.n12 = this.x.y;
        this.n13 = this.x.z;
        this.n14 = -this.x.dot(eye);
        this.n21 = this.y.x;
        this.n22 = this.y.y;
        this.n23 = this.y.z;
        this.n24 = -this.y.dot(eye);
        this.n31 = this.z.x;
        this.n32 = this.z.y;
        this.n33 = this.z.z;
        this.n34 = -this.z.dot(eye);
    }
    transform(v) {
        let vx = v.x, vy = v.y, vz = v.z, vw = (v.w ? v.w : 1.0);
        v.x = this.n11 * vx + this.n12 * vy + this.n13 * vz + this.n14 * vw;
        v.y = this.n21 * vx + this.n22 * vy + this.n23 * vz + this.n24 * vw;
        v.z = this.n31 * vx + this.n32 * vy + this.n33 * vz + this.n34 * vw;
        vw = this.n41 * vx + this.n42 * vy + this.n43 * vz + this.n44 * vw;
        if (v.w) {
            v.w = vw;
        }
        else {
            v.x = v.x / vw;
            v.y = v.y / vw;
            v.z = v.z / vw;
        }
    }
    corssVector(a) {
        let v = new Vector4_1.default();
        v.x = this.n11 * a.x + this.n12 * a.y + this.n13 * a.z + this.n14 * a.w;
        v.y = this.n21 * a.x + this.n22 * a.y + this.n23 * a.z + this.n24 * a.w;
        v.z = this.n31 * a.x + this.n32 * a.y + this.n33 * a.z + this.n34 * a.w;
        v.w = (a.w) ? this.n41 * a.x + this.n42 * a.y + this.n43 * a.z + this.n44 * a.w : 1;
        return v;
    }
    multiply(a, b) {
        this.n11 = a.n11 * b.n11 + a.n12 * b.n21 + a.n13 * b.n31 + a.n14 * b.n41;
        this.n12 = a.n11 * b.n12 + a.n12 * b.n22 + a.n13 * b.n32 + a.n14 * b.n42;
        this.n13 = a.n11 * b.n13 + a.n12 * b.n23 + a.n13 * b.n33 + a.n14 * b.n43;
        this.n14 = a.n11 * b.n14 + a.n12 * b.n24 + a.n13 * b.n34 + a.n14 * b.n44;
        this.n21 = a.n21 * b.n11 + a.n22 * b.n21 + a.n23 * b.n31 + a.n24 * b.n41;
        this.n22 = a.n21 * b.n12 + a.n22 * b.n22 + a.n23 * b.n32 + a.n24 * b.n42;
        this.n23 = a.n21 * b.n13 + a.n22 * b.n23 + a.n23 * b.n33 + a.n24 * b.n34;
        this.n24 = a.n21 * b.n14 + a.n22 * b.n24 + a.n23 * b.n34 + a.n24 * b.n44;
        this.n31 = a.n31 * b.n11 + a.n32 * b.n21 + a.n33 * b.n31 + a.n34 * b.n41;
        this.n32 = a.n31 * b.n12 + a.n32 * b.n22 + a.n33 * b.n32 + a.n34 * b.n42;
        this.n33 = a.n31 * b.n13 + a.n32 * b.n23 + a.n33 * b.n33 + a.n34 * b.n43;
        this.n34 = a.n31 * b.n14 + a.n32 * b.n24 + a.n33 * b.n34 + a.n34 * b.n44;
        this.n41 = a.n41 * b.n11 + a.n42 * b.n21 + a.n43 * b.n31 + a.n44 * b.n41;
        this.n42 = a.n41 * b.n12 + a.n42 * b.n22 + a.n43 * b.n32 + a.n44 * b.n42;
        this.n43 = a.n41 * b.n13 + a.n42 * b.n23 + a.n43 * b.n33 + a.n44 * b.n43;
        this.n44 = a.n41 * b.n14 + a.n42 * b.n24 + a.n43 * b.n34 + a.n44 * b.n44;
    }
    multiplySelf(m) {
        let n11 = this.n11, n12 = this.n12, n13 = this.n13, n14 = this.n14, n21 = this.n21, n22 = this.n22, n23 = this.n23, n24 = this.n24, n31 = this.n31, n32 = this.n32, n33 = this.n33, n34 = this.n34, n41 = this.n41, n42 = this.n42, n43 = this.n43, n44 = this.n44;
        this.n11 = n11 * m.n11 + n12 * m.n21 + n13 * m.n31 + n14 * m.n41;
        this.n12 = n11 * m.n12 + n12 * m.n22 + n13 * m.n32 + n14 * m.n42;
        this.n13 = n11 * m.n13 + n12 * m.n23 + n13 * m.n33 + n14 * m.n43;
        this.n14 = n11 * m.n14 + n12 * m.n24 + n13 * m.n34 + n14 * m.n44;
        this.n21 = n21 * m.n11 + n22 * m.n21 + n23 * m.n31 + n24 * m.n41;
        this.n22 = n21 * m.n12 + n22 * m.n22 + n23 * m.n32 + n24 * m.n42;
        this.n23 = n21 * m.n13 + n22 * m.n23 + n23 * m.n33 + n24 * m.n43;
        this.n24 = n21 * m.n14 + n22 * m.n24 + n23 * m.n34 + n24 * m.n44;
        this.n31 = n31 * m.n11 + n32 * m.n21 + n33 * m.n31 + n34 * m.n41;
        this.n32 = n31 * m.n12 + n32 * m.n22 + n33 * m.n32 + n34 * m.n42;
        this.n33 = n31 * m.n13 + n32 * m.n23 + n33 * m.n33 + n34 * m.n43;
        this.n34 = n31 * m.n14 + n32 * m.n24 + n33 * m.n34 + n34 * m.n44;
        this.n41 = n41 * m.n11 + n42 * m.n21 + n43 * m.n31 + n44 * m.n41;
        this.n42 = n41 * m.n12 + n42 * m.n22 + n43 * m.n32 + n44 * m.n42;
        this.n43 = n41 * m.n13 + n42 * m.n23 + n43 * m.n33 + n44 * m.n43;
        this.n44 = n41 * m.n14 + n42 * m.n24 + n43 * m.n34 + n44 * m.n44;
    }
    clone() {
        let m = new Matrix4();
        m.n11 = this.n11;
        m.n12 = this.n12;
        m.n13 = this.n13;
        m.n14 = this.n14;
        m.n21 = this.n21;
        m.n22 = this.n22;
        m.n23 = this.n23;
        m.n24 = this.n24;
        m.n31 = this.n31;
        m.n32 = this.n32;
        m.n33 = this.n33;
        m.n34 = this.n34;
        m.n41 = this.n41;
        m.n42 = this.n42;
        m.n43 = this.n43;
        m.n44 = this.n44;
        return m;
    }
    toString() {
        return "| " + this.n11 + " " + this.n12 + " " + this.n13 + " " + this.n14 + " |\n" +
            "| " + this.n21 + " " + this.n22 + " " + this.n23 + " " + this.n24 + " |\n" +
            "| " + this.n31 + " " + this.n32 + " " + this.n33 + " " + this.n34 + " |";
        "| " + this.n31 + " " + this.n32 + " " + this.n33 + " " + this.n34 + " |\n" +
            "| " + this.n41 + " " + this.n42 + " " + this.n43 + " " + this.n44 + " |";
    }
}
exports.default = Matrix4;
//# sourceMappingURL=Matrix4.js.map