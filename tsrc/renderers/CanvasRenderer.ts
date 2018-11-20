import Renderer from "./Renderer";
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
import Vector2 from "../core/Vector2";
import Vertex from "../core/Vertex";
import BitmapUVMappingMaterial from "../materials/BitmapUVMappingMaterial";

export default class CanvasRenderer extends Renderer {
  domElement: HTMLCanvasElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  
  clipRect: Rectangle;
  clearRect: Rectangle;
  bboxRect: Rectangle;

  vector2: Vector2;

  autoClear: boolean;

  width: number;
  height: number;
  widthHalf: number;
  heightHalf: number;


  constructor() {
    super();

    this.domElement = document.createElement("canvas");
    this.canvas = this.domElement;
    this.context = this.canvas.getContext("2d");

    this.clearRect = new Rectangle(0, 0, 0, 0);
    this.clipRect = new Rectangle();
    this.bboxRect = new Rectangle();

    this.vector2 = new Vector2();

    this.autoClear = true;
  }

  setSize(width: number, height: number) {
    // super.setSize(width, height);

    this.width = width;
    this.height = height;
    this.widthHalf = width / 2;
    this.heightHalf = height / 2;

    this.canvas.width = width;
    this.canvas.height = height;

    this.context.setTransform(1, 0, 0, -1, this.widthHalf, this.heightHalf);

    this.clipRect.set(-this.widthHalf, -this.heightHalf, this.widthHalf, this.heightHalf);
  }

  clear() {
      this.clearRect.inflate(1);
      this.clearRect.minSelf(this.clipRect);
      this.context.clearRect(this.clearRect.getX(), this.clearRect.getY(), this.clearRect.getWidth(), this.clearRect.getHeight());
      this.clearRect.empty();
  }

  render(scene: Scene, camera: Camera) {
    // super.render(scene, camera);
    let e, el, m, ml, element, material, pi2 = Math.PI * 2;
    let v1x, v1y, v2x, v2y, v3x, v3y, v4x, v4y;

    let uv1 = new Vector2(), uv2 = new Vector2(), uv3 = new Vector2();
    let suv1 = new Vector2(), suv2 = new Vector2(), suv3 = new Vector2();
    let suv1x, suv1y, suv2x, suv2y, suv3x, suv3y, denom, m11, m12, m21, m22, dx, dy;

    let bitmap, bitmap_width, bitmap_height;
    let size;

    if (this.autoClear) {
      this.clear();
    }

    this.project(scene, camera);

    for(e = 0, el = this.renderList.length; e < el; e++) {
      
      element = this.renderList[e];

      this.bboxRect.empty();

      this.context.beginPath();

      // 绘制路径
      if (element instanceof RenderableParticle) {
        
        v1x = element.x * this.widthHalf;
        v1y = element.y * this.heightHalf;
        size = element.size * this.widthHalf;

        this.bboxRect.set(v1x - size, v1y - size, v1x + size, v1y + size);
        
        // 判断是否在绘制剪裁区域
        if (!this.clipRect.instersects(this.bboxRect)) {
          continue;  
        }

        this.context.arc(element.x, element.y, size, 0, pi2, true);

      } else if (element instanceof RenderableLine) {

        v1x = element.v1.x * this.widthHalf; v1y = element.v1.y * this.heightHalf;
        v2x = element.v2.x * this.widthHalf; v2y = element.v2.y * this.heightHalf;

        this.bboxRect.addPoint(v1x, v1y);
        this.bboxRect.addPoint(v2x, v2y);

        if (!this.clipRect.instersects(this.bboxRect)) {
          continue;
        }

        this.context.moveTo(v1x, v1y);
        this.context.lineTo(v2x, v2y);

      } else if (element instanceof RenderableFace3) {

        element.v1.x *= this.widthHalf; element.v1.y *= this.heightHalf;
        element.v2.x *= this.widthHalf; element.v2.y *= this.heightHalf;
        element.v3.x *= this.widthHalf; element.v3.y *= this.heightHalf;

        if(element.overdraw) {
          
          this.expand(element.v1, element.v2);
          this.expand(element.v2, element.v3);
          this.expand(element.v3, element.v1);

        }

        v1x = element.v1.x; v1y = element.v1.y;
        v2x = element.v2.x; v2y = element.v2.y;
        v3x = element.v3.x; v3y = element.v3.y;

        this.bboxRect.addPoint(v1x, v1y);
        this.bboxRect.addPoint(v2x, v2y);
        this.bboxRect.addPoint(v3x, v3y);

        if(!this.clipRect.instersects(this.bboxRect)) {
          continue;
        }

        this.context.moveTo(v1x, v1y);
        this.context.lineTo(v2x, v2y);
        this.context.lineTo(v3x, v3y);
        this.context.lineTo(v1x, v1y);

      } else if (element instanceof RenderableFace4) {

        element.v1.x *= this.widthHalf; element.v1.y *= this.heightHalf;
        element.v2.x *= this.widthHalf; element.v2.y *= this.heightHalf;
        element.v3.x *= this.widthHalf; element.v3.y *= this.heightHalf;
        element.v4.x *= this.widthHalf; element.v4.y *= this.heightHalf;

        if(element.overdraw) {
          
          this.expand(element.v1, element.v2);
          this.expand(element.v2, element.v3);
          this.expand(element.v3, element.v4);
          this.expand(element.v4, element.v1);

        }

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

        this.context.moveTo(v1x, v1y);
        this.context.lineTo(v2x, v2y);
        this.context.lineTo(v3x, v3y);
        this.context.lineTo(v4x, v4y);
        this.context.lineTo(v1x, v1y);

      }

      this.context.closePath();

      for(m = 0, ml = element.material.length; m < ml; m++) {
        
        material = element.material[m];

        // 绘制材质
        if (material instanceof ColorFillMaterial) {

          this.context.fillStyle = material.color.styleString;
          this.context.fill();

        } else if (material instanceof FaceColorFillMaterial) {

          this.context.fillStyle = element.color.styleString;
          this.context.fill();

        } else if (material instanceof ColorStrokeMaterial) {

          this.context.lineWidth = material.lineWidth;
          this.context.lineJoin = "round";
          this.context.lineCap = "round";

          this.context.strokeStyle = material.color.styleString;
          this.context.stroke();

          this.bboxRect.inflate(material.lineWidth);

        } else if (material instanceof FaceColorStrokeMaterial) {

          this.context.lineWidth = material.lineWidth;
          this.context.lineJoin = "round";
          this.context.lineCap = "round";

          this.context.strokeStyle = element.color.styleString;
          this.context.stroke();

          this.bboxRect.inflate(material.lineWidth);

        } else if (material instanceof BitmapUVMappingMaterial && (element instanceof RenderableFace3 || element instanceof RenderableFace4)) {

          bitmap = material.bitmap;
          bitmap_width = bitmap.width;
          bitmap_height = bitmap.height;

          uv1.copy(element.uvs[0]);
          uv2.copy(element.uvs[1]);
          uv3.copy(element.uvs[2]);

          suv1.copy(uv1);
          suv2.copy(uv2);
          suv3.copy(uv3);

          suv1.x *= bitmap_width; suv1.y *= bitmap_height;
					suv2.x *= bitmap_width; suv2.y *= bitmap_height;
					suv3.x *= bitmap_width; suv3.y *= bitmap_height;

					this.expand( suv1, suv2 );
					this.expand( suv2, suv3 );
					this.expand( suv3, suv1 );

					suv1x = ( uv1.x === 0 ) ? 1 : ( uv1.x === 1 ) ? suv1.x - 1 : suv1.x;
					suv1y = ( uv1.y === 0 ) ? 1 : ( uv1.y === 1 ) ? suv1.y - 1 : suv1.y;

					suv2x = ( uv2.x === 0 ) ? 1 : ( uv2.x === 1 ) ? suv2.x - 1 : suv2.x;
					suv2y = ( uv2.y === 0 ) ? 1 : ( uv2.y === 1 ) ? suv2.y - 1 : suv2.y;

					suv3x = ( uv3.x === 0 ) ? 1 : ( uv3.x === 1 ) ? suv3.x - 1 : suv3.x;
          suv3y = ( uv3.y === 0 ) ? 1 : ( uv3.y === 1 ) ? suv3.y - 1 : suv3.y;
          
          // Textured triangle drawing by Thatcher Ulrich.
					// http://tulrich.com/geekstuff/canvas/jsgl.js

					this.context.save();
					this.context.clip();

					denom = suv1x * ( suv3y - suv2y ) - suv2x * suv3y + suv3x * suv2y + ( suv2x - suv3x ) * suv1y;

					m11 = - ( suv1y * (v3x - v2x ) - suv2y * v3x + suv3y * v2x + ( suv2y - suv3y ) * v1x ) / denom;
					m12 = ( suv2y * v3y + suv1y * ( v2y - v3y ) - suv3y * v2y + ( suv3y - suv2y) * v1y ) / denom;
					m21 = ( suv1x * ( v3x - v2x ) - suv2x * v3x + suv3x * v2x + ( suv2x - suv3x ) * v1x ) / denom;
					m22 = - ( suv2x * v3y + suv1x * ( v2y - v3y ) - suv3x * v2y + ( suv3x - suv2x ) * v1y ) / denom;
					dx = ( suv1x * ( suv3y * v2x - suv2y * v3x ) + suv1y * ( suv2x * v3x - suv3x * v2x ) + ( suv3x * suv2y - suv2x * suv3y ) * v1x ) / denom;
					dy = ( suv1x * ( suv3y * v2y - suv2y * v3y ) + suv1y * ( suv2x * v3y - suv3x * v2y ) + ( suv3x * suv2y - suv2x * suv3y ) * v1y ) / denom;

					this.context.transform( m11, m12, m21, m22, dx, dy );

					this.context.drawImage( bitmap, 0, 0 );
					this.context.restore();

        }

        this.clearRect.addRectangle(this.bboxRect);
      }
      
    }

  }

  expand(a: Vector2, b: Vector2) {
    this.vector2.sub(b, a);
    this.vector2.unit();

    b.addSelf(this.vector2);
    a.subSelf(this.vector2);
  }
}
