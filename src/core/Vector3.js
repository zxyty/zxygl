export default class Vector3 {
  constructor(x, y, z) {
    this.x = x ? x : 0;
    this.y = y ? y : 0;
    this.z = z ? z : 0;

    this.dx = null;
    this.dy = null;
    this.dz = null;

    this.tx = null;
    this.ty = null;
    this.tz = null;

    this.ool = null;
  }

  static add(a, b) {
    return new Vector3(a.x + b.x, a.y + b.y, a.z + b.z);
  }

  static sub(a, b) {
    return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
  }

  static multiply(a, s) {
    return new Vector3(a.x * s, a.y * s, a.z * s);
  }

  static cross(a, b) {
    return new Vector3(
      a.y * b.z - a.z * b.y,
      a.z * b.x - a.x * b.z,
      a.x * b.y - a.y * b.x
    );
  }

  static dot(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  }

  copy(v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
  }

  addSelf(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
  }

  add(v1, v2) {
    this.x = v1.x + v2.x;
    this.y = v1.y + v2.y;
    this.z = v1.z + v2.z;
  }

  subSelf(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
  }

  sub(v1, v2) {
    this.x = v1.x - v2.x;
    this.y = v1.y - v2.y;
    this.z = v1.z - v2.z;
  }

  cross(v) {
    this.tx = this.x;
    this.ty = this.y;
    this.tz = this.z;

    this.x = this.ty * v.z - this.tz * v.y;
    this.y = this.tz * v.x - this.tx * v.z;
    this.z = this.tx * v.y - this.ty * v.x;
  }

  multiply(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
  }

  distanceTo(v) {
    this.dx = this.x - v.x;
    this.dy = this.y - v.y;
    this.dz = this.z - v.z;

    return Math.sqrt(this.dx * this.dx + this.dy * this.dy + this.dz * this.dz);
  }

  distanceToSquared(v) {
    this.dx = this.x - v.x;
    this.dy = this.y - v.y;
    this.dz = this.z - v.z;

    return this.dx * this.dx + this.dy * this.dy + this.dz * this.dz;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
  }

  normalize() {
    if (this.length() > 0) {
      this.ool = 1.0 / this.length();
    } else {
      this.ool = 0;
    }

    this.x *= this.ool;
    this.y *= this.ool;
    this.z *= this.ool;

    return this;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  toString() {
    return "Vector3 (" + this.x + ", " + this.y + ", " + this.z + ")";
  }
}
