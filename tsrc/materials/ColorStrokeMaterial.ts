import Color from "../core/Color";

export default class ColorStrokeMaterial {
    lineWidth: number;
    color: Color;

    constructor(hex: number, opacity: number, lineWidth: number) {
        this.lineWidth = lineWidth || 1;
        this.color = new Color((opacity >= 0 ? (opacity * 0xff) << 24 : 0xff000000) | hex);
    }

    toString() {
        return 'ColorStrokeMaterial ( lineWidth: ' + this.lineWidth + ', color: ' + this.color + ' )';
    }
}