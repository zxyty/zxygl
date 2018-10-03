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
import Rectangle from "../core/Rectangle";
import RenderableLine from "./renderables/RenderableLine";

export default class CanvasRenderer extends Renderer {
  domElement: HTMLCanvasElement;
  viewport: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  
  clipRect: Rectangle;
  clearRect: Rectangle;
  bboxRect: Rectangle;

  constructor() {
    super();

    this.domElement = document.createElement("canvas");
    this.viewport = this.domElement;
    this.context = this.viewport.getContext("2d");

    this.clearRect = new Rectangle();
    this.clipRect = new Rectangle();
    this.bboxRect = new Rectangle();

  }

  setSize(width: number, height: number) {
    // super.setSize(width, height);

    this.viewport.width = width;
    this.viewport.height = height;

    this.context.setTransform(1, 0, 0, 1, width / 2, height / 2);

    this.clipRect.set(-width / 2, -height / 2, width / 2, height / 2);
  }

  render(scene: Scene, camera: Camera) {
    // super.render(scene, camera);

    let i, j, element, pi2 = 2 * Math.PI;
    let elementsLength, material, materialsLength;
    let v1x, v1y, v2x, v2y, v3x, v3y, v4x, v4y;
    let size;

    this.clearRect.inflate(1);
    this.clearRect.minSelf(this.clipRect);
    
    this.context.clearRect(this.clearRect.getX(), this.clearRect.getY(), this.clearRect.getWidth(), this.clearRect.getHeight());

    this.clearRect.empty();

    this.project(scene, camera);
    elementsLength = this.renderList.length;

    for(i = 0; i < elementsLength; i++) {
      element = this.renderList[i];
      materialsLength = element.material.length;

      for(j = 0; j < materialsLength; j++) {
        material = element.material[j];

        this.context.beginPath();
        this.bboxRect.empty();

        if(element instanceof RenderableFace3) {
          v1x = element.v1.x;
          v2y = element.v1.y;

          v2x = element.v2.x;
          v2y = element.v2.y;

          v3x = element.v3.x;
          v3y = element.v3.y;

          this.bboxRect.addPoint(v1x, v1y);
          this.bboxRect.addPoint(v2x, v2y);
          this.bboxRect.addPoint(v3x, v3y);

          if(!this.clipRect.instersects(this.bboxRect)) {
            continue;
          }

          this.clearRect.addRectangle(this.bboxRect);

          this.context.moveTo(v1x, v1y);
          this.context.lineTo(v2x, v2y);
          this.context.lineTo(v3x, v3y);
          this.context.lineTo(v1x, v1y);

        } else if(element instanceof RenderableFace4) {
          v1x = element.v1.x; v1y = element.v1.y;
          v2x = element.v2.x; v2y = element.v2.y;
          v3x = element.v3.x; v3y = element.v3.y;
          v4x = element.v4.x; v4y = element.v4.y;

          this.bboxRect.addPoint(v1x, v1y);
          this.bboxRect.addPoint(v2x, v2y);
          this.bboxRect.addPoint(v3x, v3y);
          this.bboxRect.addPoint(v4x, v4y);

          if(!this.clipRect.instersects(this.bboxRect)) {
            
            continue;

          }

          this.clearRect.addRectangle(this.bboxRect);

          this.context.moveTo(v1x, v1y);
					this.context.lineTo(v2x, v2y);
					this.context.lineTo(v3x, v3y);
					this.context.lineTo(v4x, v4y);
          this.context.lineTo(v1x, v1y);
          
        } else if(element instanceof RenderableLine) {
          v1x = element.v1.x; v1y = element.v1.y;
          v2x = element.v2.x; v2y = element.v2.y;
          
          this.bboxRect.addPoint(v1x, v1y);
          this.bboxRect.addPoint(v2x, v2y);

          if(!this.clipRect.instersects(this.bboxRect)) {
            continue;
          }

          this.context.moveTo(v1x, v1y);
          this.context.lineTo(v2x, v2y);

        } else if(element instanceof RenderableParticle) {
          size = element.size * element.screenZ;

          this.bboxRect.set(element.x - size, element.y - size, element.x + size, element.y + size);

          if(!this.clipRect.instersects(this.bboxRect)) {
            
            continue;

          }

          this.clearRect.addRectangle(this.bboxRect);
          this.context.arc(element.x, element.y, size, 0, pi2, true);
        }

        if (material instanceof ColorFillMaterial) {
          this.context.fillStyle = material.color.styleString;
          this.context.fill();

          this.clearRect.addRectangle(this.bboxRect);

        } else if(material instanceof FaceColorFillMaterial) {
          this.context.fillStyle = element.color.styleString;
          this.context.fill();
          
          this.clearRect.addRectangle(this.bboxRect);

        } else if(material instanceof ColorStrokeMaterial) {
          this.context.lineWidth = material.lineWidth;
          this.context.lineJoin = "round";
          this.context.lineCap = "round";

          this.context.strokeStyle = material.color.styleString;
          this.context.stroke();

          this.bboxRect.inflate(material.lineWidth);
          this.clearRect.addRectangle(this.bboxRect);

        } else if(material instanceof FaceColorStrokeMaterial) {
          this.context.lineWidth = material.lineWidth;
          this.context.lineJoin = "round";
          this.context.lineCap = "round";

          this.context.strokeStyle = element.color.styleString;
          this.context.stroke();

          this.bboxRect.inflate(material.lineWidth);
          this.clearRect.addRectangle(this.bboxRect);
        }

        this.context.closePath();
      }
    }

  }
}
