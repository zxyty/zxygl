import Vector2 from "../../core/Vector2";
import Color from "../../core/Color";
import { tMaterial } from "../../type";

export default class RenderableLine {
    v1: Vector2;
    v2: Vector2;

    screenZ: number;

    color: Color;
    material: Array<tMaterial>;

    constructor() {
        this.v1;
        this.v2;

        this.screenZ = null;

        this.color = null;
        this.material = null;
    }
}