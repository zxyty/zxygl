// core
import Face3 from "./core/Face3";
import Face4 from "./core/Face4";
import Geometry from "./core/Geometry";
import Matrix3 from "./core/Matrix3";
import Matrix4 from "./core/Matrix4";
import Vector2 from "./core/Vector2";
import Vector3 from "./core/Vector3";
import Vector4 from "./core/Vector4";
import Vertex from "./core/Vertex";
import Color from "./core/Color";

// scenes
import Scene from "./scenes/Scene";

// renderers
import Renderer from "./renderers/Renderer";
import CanvasRenderer from "./renderers/CanvasRenderer";

// renderer able
import RenderableFace3 from "./renderers/renderables/RenderableFace3";
import RenderableFace4 from "./renderers/renderables/RenderableFace4";
import RenderableParticle from "./renderers/renderables/RenderableParticle";

// cameras
import Camera from "./cameras/Camera";

// materials
import ColorFillMaterial from "./materials/ColorFillMaterial";
import ColorStrokeMaterial from "./materials/ColorStrokeMaterial";
import FaceColorFillMaterial from "./materials/FaceColorFillMaterial";
import FaceColorStrokeMaterial from "./materials/FaceColorStrokeMaterial";

// objects
import Object3D from "./objects/Object3D";
import Mesh from "./objects/Mesh";
import Particle from "./objects/Particle";
import Line from "./objects/Line";

// objects primitives
import Plane from "./objects/primitives/Plane";
import Cube from "./objects/primitives/Cube";
import Cylinder from "./objects/primitives/Cylinder";

const ZXYGL = {
  // core
  Color: Color,
  Face3: Face3,
  Face4: Face4,
  Geometry: Geometry,
  Matrix3: Matrix3,
  Matrix4: Matrix4,
  Vector2: Vector2,
  Vector3: Vector3,
  Vector4: Vector4,
  Vertex: Vertex,

  // scenes
  Scene: Scene,

  // renderer
  Renderer: Renderer,
  CanvasRenderer: CanvasRenderer,

  // renderer able
  RenderableFace3: RenderableFace3,
  RenderableFace4: RenderableFace4,
  RenderableParticle: RenderableParticle,

  // cameras
  Camera: Camera,

  // materials
  ColorFillMaterial: ColorFillMaterial,
  ColorStrokeMaterial: ColorStrokeMaterial,
  FaceColorFillMaterial: FaceColorFillMaterial,
  FaceColorStrokeMaterial: FaceColorStrokeMaterial,

  // objects
  Object3D: Object3D,
  Mesh: Mesh,
  Particle: Particle,
  Line: Line,

  // objects primitives
  Plane: Plane,
  Cube: Cube,
  Cylinder: Cylinder
};

// @ts-ignore
if(__ENV__ == 'dist') {
// @ts-ignore
  window.ZXYGL = ZXYGL;
} 

// else if(__ENV__ == 'production') {
//   export default Zxygl;
// } else if(__ENV__ == 'development') {
//   export default Zxygl;
// }

export default ZXYGL;
