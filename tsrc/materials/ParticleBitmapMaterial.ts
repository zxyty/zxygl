
export default class ParticleBitmapMaterial {
    bitmap: HTMLCanvasElement

    constructor(bitmap?: HTMLCanvasElement) {

        this.bitmap = bitmap;
    }

    toString() {
        return 'ParticleBitmapMaterial ( bitmap: ' + this.bitmap + ' )';
    }
}