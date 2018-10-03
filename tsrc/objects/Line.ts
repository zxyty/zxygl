import Object3D from "./Object3D";
import Geometry from "../core/Geometry";
import { tMaterial } from "../type";

export default class Line extends Object3D {
    geometry: Geometry;

    constructor(geometry: Geometry, material: Array<tMaterial>) {
        super(material);

        this.geometry = geometry;
    }
}