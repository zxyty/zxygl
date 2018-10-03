export default class Vector3 {
  x: number;
  y: number;
  z: number;
  
  dx: number;
  dy: number;
  dz: number;

  tx: number;
  ty: number;
  tz: number;

  ool: any;

  constructor(x: number, y: number, z: number) {
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

  static add(a: Vector3, b: Vector3) {
    return new Vector3(a.x + b.x, a.y + b.y, a.z + b.z);
  }

  static sub(a: Vector3, b: Vector3) {
    return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
  }

  static multiply(a: Vector3, s: number) {
    return new Vector3(a.x * s, a.y * s, a.z * s);
  }

  static cross(a: Vector3, b: Vector3) {
    return new Vector3(
      a.y * b.z - a.z * b.y,
      a.z * b.x - a.x * b.z,
      a.x * b.y - a.y * b.x
    );
  }

  static dot(a: Vector3, b: Vector3) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  }

  set(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  copy(v: Vector3) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
  }

  addSelf(v: Vector3) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
  }

  add(v1: Vector3, v2: Vector3) {
    this.x = v1.x + v2.x;
    this.y = v1.y + v2.y;
    this.z = v1.z + v2.z;
  }

  addScalar(s: number) {
    this.x += s;
    this.y += s;
    this.z += s;
  }

  subSelf(v: Vector3) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
  }

  sub(v1: Vector3, v2: Vector3) {
    this.x = v1.x - v2.x;
    this.y = v1.y - v2.y;
    this.z = v1.z - v2.z;
  }

  crossSelf(v: Vector3) {
    let tx = this.x;
    let ty = this.y;
    let tz = this.z;

    this.x = ty * v.z - tz * v.y;
    this.y = tz * v.x - tx * v.z;
    this.z = tx * v.y - ty * v.x;
  }

  multiplySelf(v: Vector3) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
  }

  multiplyScalar(s: number) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
  }

  distanceTo(v: Vector3) {
    this.dx = this.x - v.x;
    this.dy = this.y - v.y;
    this.dz = this.z - v.z;

    return Math.sqrt(this.dx * this.dx + this.dy * this.dy + this.dz * this.dz);
  }

  distanceToSquared(v: Vector3) {
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
		
			this.multiplyScalar(1 / this.length());
			
		} else {
		
			this.multiplyScalar(0);
		}
  }

  dot(v: Vector3) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  isZero() {
		let almostZero = 0.0001;
		return (Math.abs(this.x) < almostZero) && (Math.abs(this.y) < almostZero) && (Math.abs(this.z) < almostZero);
	}	

  clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  toString() {
    return "Vector3 (" + this.x + ", " + this.y + ", " + this.z + ")";
  }
}
