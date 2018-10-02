import Vector2 from "../../core/Vector2";
import Color from "../../core/Color";
import { tMaterial } from "../../type";

export default class RenderableParticle {
    x: number;
    y: number;
    size: number;
    color: Color;
    material: Array<tMaterial>;
    screenZ: number;

    constructor() {
        this.x;
        this.y;
        this.screenZ;
        
        this.size;
        this.color;
        this.material;
    }
}