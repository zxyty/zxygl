export default class Color {
  r: number;
  g: number;
  b: number;
  a: number;
  hex: number;
  styleString: string;

  constructor(hex?: number) {  // 0xff000000
    this.r = null;
    this.g = null;
    this.b = null;
    this.a = null;

    this.hex = null;

    this.styleString = 'rgba(0, 0, 0, 1)';

    // this.setHex(hex ? hex : 0xff000000);
    this.setHex(hex);
  }
  setHex(hex: number) {
    this.hex = hex;
    this.updateRGBA();
    this.updateStyleString();
  }

  setRGBA(r: number, g: number, b: number, a: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.updateHex();
    this.updateStyleString();
  }

  updateRGBA() {
    this.r = (this.hex >> 16 & 0xff) / 0xff;
    this.g = (this.hex >> 8 & 0xff) / 0xff;
    this.b = (this.hex & 0xff) / 0xff;
    this.a = (this.hex >> 24 & 0xff) / 0xff;	
  }

  updateHex() {
    this.hex = Math.floor(this.a * 255) << 24 | Math.floor(this.r * 255) << 16 | Math.floor(this.g * 255) << 8 | Math.floor(this.b * 255);
  }

  updateStyleString() {
    this.styleString = 'rgba(' + Math.floor( this.r * 255 ) + ',' + Math.floor( this.g * 255 ) + ',' + Math.floor( this.b * 255 ) + ',' + this.a + ')';
  }

  toString() {
    return (
      "Color ( r: " +
      this.r +
      ", g: " +
      this.g +
      ", b: " +
      this.b +
      ", a: " +
      this.a +
      ", hex: " +
      this.hex +
      ", style: " +
      this.styleString +
      " )"
    );
  }
}
