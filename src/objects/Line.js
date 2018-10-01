import Object3D from "./Object3D";
import Geometry from "../core/Geometry";
import ColorFillMaterial from "../materials/ColorFillMaterial";
import ColorStrokeMaterial from "../materials/ColorStrokeMaterial";
import FaceColorFillMaterial from "../materials/FaceColorFillMaterial";
import FaceColorStrokeMaterial from "../materials/FaceColorStrokeMaterial";

type MaterialType = ColorFillMaterial | ColorStrokeMaterial | FaceColorFillMaterial | FaceColorStrokeMaterial;

export default class Line extends Object3D {
    constructor(geometry: Geometry, material: MaterialType) {
        super(material);
        
        this.geometry = geometry;
    }
}