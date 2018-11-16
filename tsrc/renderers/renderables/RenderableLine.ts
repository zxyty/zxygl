import Vector2 from "../../core/Vector2";
import Color from "../../core/Color";
import { tMaterial } from "../../type";

export default class RenderableLine {
    v1: Vector2;
    v2: Vector2;

    z: number;

    color: Color;
    material: Array<tMaterial>;

    constructor() {
        this.v1;
        this.v2;

        this.z = null;

        this.color = null;
        this.material = null;
    }
}