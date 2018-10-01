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
import SvgRenderer from "./renderers/SvgRenderer";

// cameras
import Camera from "./cameras/Camera";

// materials
import ColorFillMaterial from "./materials/ColorFillMaterial";
import FaceColorMaterial from "./materials/FaceColorMaterial";

// objects
import Object3D from "./objects/Object3D";
import Mesh from "./objects/Mesh";
import Particle from "./objects/Particle";

// objects primitives
import Plane from "./objects/primitives/Plane";
import Cube from "./objects/primitives/Cube";
import Cylinder from "./objects/primitives/Cylinder";


window.ZXYGL = {
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
  Renderer: Renderer,
  CanvasRenderer: CanvasRenderer,
  SvgRenderer: SvgRenderer,
  
  // cameras
  Camera: Camera,

  // materials
  ColorFillMaterial: ColorFillMaterial,
  FaceColorMaterial: FaceColorMaterial,


  // objects
  Object3D: Object3D,
  Mesh: Mesh,
  Particle: Particle,

  // objects primitives
  Plane: Plane,
  Cube: Cube,
  Cylinder: Cylinder
};
