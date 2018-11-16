import Vector2 from "../../core/Vector2";
import Color from "../../core/Color";
import { tMaterial } from "../../type";

export default class RenderableParticle {
    x: number;
    y: number;
    /**
     * 粒子大小
     */
    size: number;   
    color: Color;
    material: Array<tMaterial>;
    z: number;

    constructor() {
        this.x = null;
        this.y = null;
        this.z = null;
        
        this.size;
        this.color = null;
        this.material = null;
    }
}