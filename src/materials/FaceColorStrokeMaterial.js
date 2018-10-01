export default class FaceColorStrokeMaterial {
    constructor(lineWidth) {
        this.lineWidth = lineWidth || 1;
    }

    toString() {
        return 'FaceColorStrokeMaterial ( lineWidth: ' + this.lineWidth + ' )';
    }
}