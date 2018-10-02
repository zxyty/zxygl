import Vector2 from "../../core/Vector2";
import Color from "../../core/Color";
import { tMaterial } from "../../type";

export default class RenderableFace4 {
    // color: Color
    // material: tMaterial
    // screenZ: number
    color;
    material;
    screenZ;

    constructor() {
        this.v1 = new Vector2;
        this.v2 = new Vector2;
        this.v3 = new Vector2;
        this.v4 = new Vector2;
        
        this.screenZ;
        
        this.color;
        this.material;
    }
}