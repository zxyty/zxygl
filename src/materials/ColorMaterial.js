import Color from '../core/Color';
export default class ColorMaterial {
    constructor(hex, opacity) {
        this.color = new Color((opacity ? (opacity * 0xff) << 24 : 0xff000000) | hex);
    }
}
