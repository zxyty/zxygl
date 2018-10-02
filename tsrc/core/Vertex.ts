import Vector3 from './Vector3';

export default class Vertex {
    // visible: Boolean;
    visible;
    
    // constructor(position: Vector3, normal: Vector3) {
    constructor(position, normal) {
        this.position = position || new Vector3();
        this.normal = normal || new Vector3();
        this.screen = new Vector3();
        
        this.visible = true; // internal
    }

    toString() {
        return 'Vertex ( position: ' + this.position + ', normal: ' + this.normal + ' )';
    }
}