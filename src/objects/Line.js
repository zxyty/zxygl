import Object3D from "./Object3D";
import Geometry from "../core/Geometry";

export default class Line extends Object3D {
    // constructor(geometry: Geometry, material: MaterialType) {
    constructor(geometry, material) {
        super(material);

        this.geometry = geometry;
    }
}