export default class BitmapUVMappingMaterial{
    bitmap: HTMLCanvasElement;
    
    constructor(bitmap?: HTMLCanvasElement) {
        this.bitmap = bitmap;
    }

    toString() {
        return 'BitmapUVMappingMaterial ( bitmap: ' + this.bitmap + ' )';
    }
}