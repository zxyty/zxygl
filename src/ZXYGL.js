"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// core
const Face3_1 = require("./core/Face3");
const Face4_1 = require("./core/Face4");
const Geometry_1 = require("./core/Geometry");
const Matrix3_1 = require("./core/Matrix3");
const Matrix4_1 = require("./core/Matrix4");
const Vector2_1 = require("./core/Vector2");
const Vector3_1 = require("./core/Vector3");
const Vector4_1 = require("./core/Vector4");
const Vertex_1 = require("./core/Vertex");
const Color_1 = require("./core/Color");
// scenes
const Scene_1 = require("./scenes/Scene");
// renderers
const Renderer_1 = require("./renderers/Renderer");
const CanvasRenderer_1 = require("./renderers/CanvasRenderer");
// renderer able
const RenderableFace3_1 = require("./renderers/renderables/RenderableFace3");
const RenderableFace4_1 = require("./renderers/renderables/RenderableFace4");
const RenderableParticle_1 = require("./renderers/renderables/RenderableParticle");
// cameras
const Camera_1 = require("./cameras/Camera");
// materials
const ColorFillMaterial_1 = require("./materials/ColorFillMaterial");
const ColorStrokeMaterial_1 = require("./materials/ColorStrokeMaterial");
const FaceColorFillMaterial_1 = require("./materials/FaceColorFillMaterial");
const FaceColorStrokeMaterial_1 = require("./materials/FaceColorStrokeMaterial");
// objects
const Object3D_1 = require("./objects/Object3D");
const Mesh_1 = require("./objects/Mesh");
const Particle_1 = require("./objects/Particle");
const Line_1 = require("./objects/Line");
// objects primitives
const Plane_1 = require("./objects/primitives/Plane");
const Cube_1 = require("./objects/primitives/Cube");
const Cylinder_1 = require("./objects/primitives/Cylinder");
const ZXYGL = {
    // core
    Color: Color_1.default,
    Face3: Face3_1.default,
    Face4: Face4_1.default,
    Geometry: Geometry_1.default,
    Matrix3: Matrix3_1.default,
    Matrix4: Matrix4_1.default,
    Vector2: Vector2_1.default,
    Vector3: Vector3_1.default,
    Vector4: Vector4_1.default,
    Vertex: Vertex_1.default,
    // scenes
    Scene: Scene_1.default,
    // renderer
    Renderer: Renderer_1.default,
    CanvasRenderer: CanvasRenderer_1.default,
    // renderer able
    RenderableFace3: RenderableFace3_1.default,
    RenderableFace4: RenderableFace4_1.default,
    RenderableParticle: RenderableParticle_1.default,
    // cameras
    Camera: Camera_1.default,
    // materials
    ColorFillMaterial: ColorFillMaterial_1.default,
    ColorStrokeMaterial: ColorStrokeMaterial_1.default,
    FaceColorFillMaterial: FaceColorFillMaterial_1.default,
    FaceColorStrokeMaterial: FaceColorStrokeMaterial_1.default,
    // objects
    Object3D: Object3D_1.default,
    Mesh: Mesh_1.default,
    Particle: Particle_1.default,
    Line: Line_1.default,
    // objects primitives
    Plane: Plane_1.default,
    Cube: Cube_1.default,
    Cylinder: Cylinder_1.default
};
if (__ENV__ == 'dist') {
    window.ZXYGL = ZXYGL;
}
// else if(__ENV__ == 'production') {
//   export default Zxygl;
// } else if(__ENV__ == 'development') {
//   export default Zxygl;
// }
exports.default = ZXYGL;
//# sourceMappingURL=ZXYGL.js.map