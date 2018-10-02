import Renderer from "./Renderer";
import Particle from "../objects/Particle";
import Face3 from "../core/Face3";
import Face4 from "../core/Face4";
import Scene from "../scenes/Scene";
import Camera from "../cameras/Camera";
import RenderableFace3 from "./renderables/RenderableFace3";
import RenderableFace4 from "./renderables/RenderableFace4";
import RenderableParticle from "./renderables/RenderableParticle";
import ColorFillMaterial from "../materials/ColorFillMaterial";
import FaceColorFillMaterial from "../materials/FaceColorFillMaterial";
import ColorStrokeMaterial from "../materials/ColorStrokeMaterial";
import FaceColorStrokeMaterial from "../materials/FaceColorStrokeMaterial";

export default class CanvasRenderer extends Renderer {
  domElement: any;
  viewport: any;
  context: CanvasRenderingContext2D;

  constructor() {
    super();

    this.domElement = document.createElement("canvas");
    this.viewport = this.domElement;
    this.context = this.viewport.getContext("2d");
  }

  setSize(width: number, height: number) {
    // super.setSize(width, height);

    this.viewport.width = width;
    this.viewport.height = height;

    this.context.setTransform(1, 0, 0, 1, width / 2, height / 2);
  }

  render(scene: Scene, camera: Camera) {
    // super.render(scene, camera);
    
    let i, j, element, pi2 = 2 * Math.PI;
    let elementsLength, material, materialsLength;

    this.context.clearRect(-this.viewport.width / 2, -this.viewport.height / 2, this.viewport.width, this.viewport.height);
    this.project(scene, camera);

    elementsLength = this.renderList.length;
    for(i = 0; i < elementsLength; i++) {
      element = this.renderList[i];
      
      materialsLength = element.material.length;
      for(j = 0; j < materialsLength; j++) {
        material = element.material[j];
        
        this.context.beginPath();
        if(element instanceof RenderableFace3) {
          this.context.moveTo(element.v1.x, element.v1.y);
          this.context.lineTo(element.v2.x, element.v2.y);
          this.context.lineTo(element.v3.x, element.v3.y);
          this.context.lineTo(element.v1.x, element.v1.y);
        } else if(element instanceof RenderableFace4) {
          this.context.moveTo(element.v1.x, element.v1.y);
          this.context.lineTo(element.v2.x, element.v2.y);
          this.context.lineTo(element.v3.x, element.v3.y);
          this.context.lineTo(element.v4.x, element.v4.y);
          this.context.lineTo(element.v1.x, element.v1.y);
        } else if(element instanceof RenderableParticle) {
          this.context.arc(element.x, element.y, element.size * element.screenZ, 0, pi2, true);
        }

        if(material instanceof ColorFillMaterial) {
          this.context.fillStyle = material.color.styleString;
          this.context.fill();
        } else if(material instanceof FaceColorFillMaterial) {
          this.context.fillStyle = element.color.styleString;
					this.context.fill();
        } else if(material instanceof ColorStrokeMaterial) {
          this.context.lineWidth = material.lineWidth;
          this.context.lineJoin = "round";
          this.context.lineCap = "round";

          this.context.strokeStyle = material.color.styleString;
          this.context.stroke();
        } else if(material instanceof FaceColorStrokeMaterial) {
          this.context.lineWidth = material.lineWidth;
          this.context.lineCap = "round";
          this.context.lineJoin = "round";

          this.context.strokeStyle = element.color.styleString;
          this.context.stroke();

        }

        this.context.closePath();

      }

    }

  }
}
