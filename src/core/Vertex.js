import Vector3 from './Vector3';

export default class Vertex extends Vector3 {
    constructor(x, y, z) {
        super(x, y, z);

        this.u = null;
        this.v = null;

        this.screen = new Vector3();

        this.normal = null;
        this.visible = null;
    }

    toString() {
        return 'Vertex ( ' + this.x + ', ' + this.y + ', ' + this.z + ' )';
    }
}