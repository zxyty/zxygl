import Color from "../core/Color";

export default class ColorStrokeMaterial {
    lineWidth: number;
    color: Color;

    constructor(hex, opacity, lineWidth) {
        this.lineWidth = lineWidth || 1;
        this.color = new Color((opacity ? (opacity * 0xff) << 24 : 0xff000000) | hex);
    }

    toString() {
        return 'ColorStrokeMaterial ( lineWidth: ' + this.lineWidth + ', color: ' + this.color + ' )';
    }
}