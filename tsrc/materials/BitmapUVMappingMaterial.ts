export default class BitmapUVMappingMaterial{
    bitmap: HTMLElement;
    
    constructor(bitmap?: HTMLElement) {
        this.bitmap = bitmap;
    }

    toString() {
        return 'BitmapUVMappingMaterial ( bitmap: ' + this.bitmap + ' )';
    }
}