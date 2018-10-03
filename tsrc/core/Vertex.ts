import Vector3 from './Vector3';

export default class Vertex {
    visible: Boolean;
    position: Vector3;
    normal: Vector3;
    screen: Vector3;
    
    constructor(position: Vector3, normal: Vector3) {
        this.position = position || new Vector3(0, 0, 0);
        this.normal = normal || new Vector3(0, 0, 0);
        this.screen = new Vector3(0, 0, 0);
        
        this.visible = true; // internal
    }

    toString() {
        return 'Vertex ( position: ' + this.position + ', normal: ' + this.normal + ' )';
    }
}