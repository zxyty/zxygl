import Color from "../core/Color";

export default class ParticleCircleMaterial {
    color: Color;
    
    constructor(hex: number, opacity: number) {

        this.color = new Color((opacity >=0 ? (opacity * 0xff) << 24 : 0xff000000) | hex);
    }

    toString() {
        return 'ParticleCircleMaterial ( color: ' + this.color + ' )';
    }
}