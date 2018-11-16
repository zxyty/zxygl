import Vector2 from "../../core/Vector2";
import Color from "../../core/Color";
import { tMaterial } from "../../type";

export default class RenderableFace3 {
    v1: Vector2;
    v2: Vector2;
    v3: Vector2;
    v4: Vector2;

    color: Color;
    material: Array<tMaterial>;
    z: number;

    uvs: Array<any>;

    overdraw: boolean;

    constructor() {
        this.v1 = new Vector2(0, 0);
        this.v2 = new Vector2(0, 0);
        this.v3 = new Vector2(0, 0);
        
        this.z = null;
        
        this.color = null;
        this.material = null;

        this.uvs;

        this.overdraw;
    }
}