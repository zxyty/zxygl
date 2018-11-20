import Color from "../core/Color";

export default class ColorFillMaterial {
    color: Color;
    __webGLColorBuffer: WebGLBuffer;

    constructor(hex: number, opacity: number) {

        this.__webGLColorBuffer = null;
        this.color = new Color((opacity >= 0 ? (opacity * 0xff) << 24 : 0xff000000) | hex);
        
    }

    toString() {
        return 'ColorFillMaterial ( color: ' + this.color + ' )';
    }
}