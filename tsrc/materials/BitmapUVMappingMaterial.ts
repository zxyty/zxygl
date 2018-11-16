export default class BitmapUVMappingMaterial{
    bitmap: CanvasImageSource;
    
    constructor(bitmap?: CanvasImageSource) {
        this.bitmap = bitmap;
    }

    toString() {
        return 'BitmapUVMappingMaterial ( bitmap: ' + this.bitmap + ' )';
    }
}