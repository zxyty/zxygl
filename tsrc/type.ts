import ColorFillMaterial from "./materials/ColorFillMaterial";
import ColorStrokeMaterial from "./materials/ColorStrokeMaterial";
import FaceColorFillMaterial from "./materials/FaceColorFillMaterial";
import FaceColorStrokeMaterial from "./materials/FaceColorStrokeMaterial";
import RenderableFace3 from "./renderers/renderables/RenderableFace3";
import RenderableFace4 from "./renderers/renderables/RenderableFace4";
import RenderableParticle from "./renderers/renderables/RenderableParticle";
import RenderableLine from "./renderers/renderables/RenderableLine";
import BitmapUVMappingMaterial from "./materials/BitmapUVMappingMaterial";

export type tMaterial = ColorFillMaterial | ColorStrokeMaterial | FaceColorFillMaterial | FaceColorStrokeMaterial | BitmapUVMappingMaterial;

export type tRenderable = RenderableFace3 | RenderableFace4 | RenderableParticle | RenderableLine;