export default class FaceColorStrokeMaterial {
    lineWidth: number;


    constructor(lineWidth: number) {
        this.lineWidth = lineWidth || 1;
    }

    toString() {
        return 'FaceColorStrokeMaterial ( lineWidth: ' + this.lineWidth + ' )';
    }
}