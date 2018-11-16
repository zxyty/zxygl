"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Renderer_1 = require("./Renderer");
const RenderableFace3_1 = require("./renderables/RenderableFace3");
const RenderableFace4_1 = require("./renderables/RenderableFace4");
const RenderableParticle_1 = require("./renderables/RenderableParticle");
const ColorFillMaterial_1 = require("../materials/ColorFillMaterial");
const FaceColorFillMaterial_1 = require("../materials/FaceColorFillMaterial");
const ColorStrokeMaterial_1 = require("../materials/ColorStrokeMaterial");
const FaceColorStrokeMaterial_1 = require("../materials/FaceColorStrokeMaterial");
const Rectangle_1 = require("../core/Rectangle");
const RenderableLine_1 = require("./renderables/RenderableLine");
const Vector2_1 = require("../core/Vector2");
const BitmapUVMappingMaterial_1 = require("../materials/BitmapUVMappingMaterial");
class CanvasRenderer extends Renderer_1.default {
    constructor() {
        super();
        this.domElement = document.createElement("canvas");
        this.viewport = this.domElement;
        this.context = this.viewport.getContext("2d");
        this.clearRect = new Rectangle_1.default(0, 0, 0, 0);
        this.clipRect = new Rectangle_1.default();
        this.bboxRect = new Rectangle_1.default();
        this.vector2 = new Vector2_1.default();
        this.autoClear = true;
    }
    setSize(width, height) {
        // super.setSize(width, height);
        this.viewport.width = width;
        this.viewport.height = height;
        this.context.setTransform(1, 0, 0, 1, width / 2, height / 2);
        this.clipRect.set(-width / 2, -height / 2, width / 2, height / 2);
    }
    clear() {
        this.clearRect.inflate(1);
        this.clearRect.minSelf(this.clipRect);
        this.context.clearRect(this.clearRect.getX(), this.clearRect.getY(), this.clearRect.getWidth(), this.clearRect.getHeight());
        this.clearRect.empty();
    }
    render(scene, camera) {
        // super.render(scene, camera);
        let i, j, element, pi2 = 2 * Math.PI;
        let elementsLength, material, materialsLength;
        let v1x, v1y, v2x, v2y, v3x, v3y, v4x, v4y;
        let uv1 = new Vector2_1.default(), uv2 = new Vector2_1.default(), uv3 = new Vector2_1.default();
        let suv1 = new Vector2_1.default(), suv2 = new Vector2_1.default(), suv3 = new Vector2_1.default();
        let suv1x, suv1y, suv2x, suv2y, suv3x, suv3y, denom, m11, m12, m21, m22, dx, dy;
        let bitmap, bitmap_width, bitmap_height;
        let size, overdraw;
        if (this.autoClear) {
            this.clear();
        }
        this.project(scene, camera);
        elementsLength = this.renderList.length;
        for (i = 0; i < elementsLength; i++) {
            element = this.renderList[i];
            materialsLength = element.material.length;
            for (j = 0; j < materialsLength; j++) {
                material = element.material[j];
                overdraw = material instanceof ColorFillMaterial_1.default || material instanceof FaceColorFillMaterial_1.default || material instanceof BitmapUVMappingMaterial_1.default;
                this.bboxRect.empty();
                this.context.beginPath();
                // 绘制路径
                if (element instanceof RenderableParticle_1.default) {
                    size = element.size * element.screenZ;
                    this.bboxRect.set(element.x - size, element.y - size, element.x + size, element.y + size);
                    // 判断是否在绘制剪裁区域
                    if (!this.clipRect.instersects(this.bboxRect)) {
                        continue;
                    }
                    this.context.arc(element.x, element.y, size, 0, pi2, true);
                }
                else if (element instanceof RenderableLine_1.default) {
                    v1x = element.v1.x;
                    v1y = element.v1.y;
                    v2x = element.v2.x;
                    v2y = element.v2.y;
                    this.bboxRect.addPoint(v1x, v1y);
                    this.bboxRect.addPoint(v2x, v2y);
                    if (!this.clipRect.instersects(this.bboxRect)) {
                        continue;
                    }
                    this.context.moveTo(v1x, v1y);
                    this.context.lineTo(v2x, v2y);
                }
                else if (element instanceof RenderableFace3_1.default) {
                    if (overdraw) {
                        this.expand(element.v1, element.v2);
                        this.expand(element.v2, element.v3);
                        this.expand(element.v3, element.v1);
                    }
                    v1x = element.v1.x;
                    v1y = element.v1.y;
                    v2x = element.v2.x;
                    v2y = element.v2.y;
                    v3x = element.v3.x;
                    v3y = element.v3.y;
                    this.bboxRect.addPoint(v1x, v1y);
                    this.bboxRect.addPoint(v2x, v2y);
                    this.bboxRect.addPoint(v3x, v3y);
                    if (!this.clipRect.instersects(this.bboxRect)) {
                        continue;
                    }
                    this.context.moveTo(v1x, v1y);
                    this.context.lineTo(v2x, v2y);
                    this.context.lineTo(v3x, v3y);
                    this.context.lineTo(v1x, v1y);
                }
                else if (element instanceof RenderableFace4_1.default) {
                    if (overdraw) {
                        this.expand(element.v1, element.v2);
                        this.expand(element.v2, element.v3);
                        this.expand(element.v3, element.v4);
                        this.expand(element.v4, element.v1);
                    }
                    v1x = element.v1.x;
                    v1y = element.v1.y;
                    v2x = element.v2.x;
                    v2y = element.v2.y;
                    v3x = element.v3.x;
                    v3y = element.v3.y;
                    v4x = element.v4.x;
                    v4y = element.v4.y;
                    this.bboxRect.addPoint(v1x, v1y);
                    this.bboxRect.addPoint(v2x, v2y);
                    this.bboxRect.addPoint(v3x, v3y);
                    this.bboxRect.addPoint(v4x, v4y);
                    if (!this.clipRect.instersects(this.bboxRect)) {
                        continue;
                    }
                    this.context.moveTo(v1x, v1y);
                    this.context.lineTo(v2x, v2y);
                    this.context.lineTo(v3x, v3y);
                    this.context.lineTo(v4x, v4y);
                    this.context.lineTo(v1x, v1y);
                }
                this.context.closePath();
                // 绘制材质
                if (material instanceof ColorFillMaterial_1.default) {
                    this.context.fillStyle = material.color.styleString;
                    this.context.fill();
                }
                else if (material instanceof FaceColorFillMaterial_1.default) {
                    this.context.fillStyle = element.color.styleString;
                    this.context.fill();
                }
                else if (material instanceof ColorStrokeMaterial_1.default) {
                    this.context.lineWidth = material.lineWidth;
                    this.context.lineJoin = "round";
                    this.context.lineCap = "round";
                    this.context.strokeStyle = material.color.styleString;
                    this.context.stroke();
                    this.bboxRect.inflate(material.lineWidth);
                }
                else if (material instanceof FaceColorStrokeMaterial_1.default) {
                    this.context.lineWidth = material.lineWidth;
                    this.context.lineJoin = "round";
                    this.context.lineCap = "round";
                    this.context.strokeStyle = element.color.styleString;
                    this.context.stroke();
                    this.bboxRect.inflate(material.lineWidth);
                }
                else if (material instanceof BitmapUVMappingMaterial_1.default && (element instanceof RenderableFace3_1.default || element instanceof RenderableFace4_1.default)) {
                    bitmap = material.bitmap;
                    bitmap_width = bitmap.width;
                    bitmap_height = bitmap.height;
                    uv1.copy(element.uvs[0]);
                    uv2.copy(element.uvs[1]);
                    uv3.copy(element.uvs[2]);
                    suv1.copy(uv1);
                    suv2.copy(uv2);
                    suv3.copy(uv3);
                    suv1.x *= bitmap_width;
                    suv1.y *= bitmap_height;
                    suv2.x *= bitmap_width;
                    suv2.y *= bitmap_height;
                    suv3.x *= bitmap_width;
                    suv3.y *= bitmap_height;
                    this.expand(suv1, suv2);
                    this.expand(suv2, suv3);
                    this.expand(suv3, suv1);
                    suv1x = (uv1.x === 0) ? 1 : (uv1.x === 1) ? suv1.x - 1 : suv1.x;
                    suv1y = (uv1.y === 0) ? 1 : (uv1.y === 1) ? suv1.y - 1 : suv1.y;
                    suv2x = (uv2.x === 0) ? 1 : (uv2.x === 1) ? suv2.x - 1 : suv2.x;
                    suv2y = (uv2.y === 0) ? 1 : (uv2.y === 1) ? suv2.y - 1 : suv2.y;
                    suv3x = (uv3.x === 0) ? 1 : (uv3.x === 1) ? suv3.x - 1 : suv3.x;
                    suv3y = (uv3.y === 0) ? 1 : (uv3.y === 1) ? suv3.y - 1 : suv3.y;
                    // Textured triangle drawing by Thatcher Ulrich.
                    // http://tulrich.com/geekstuff/canvas/jsgl.js
                    this.context.save();
                    this.context.clip();
                    denom = suv1x * (suv3y - suv2y) - suv2x * suv3y + suv3x * suv2y + (suv2x - suv3x) * suv1y;
                    m11 = -(suv1y * (v3x - v2x) - suv2y * v3x + suv3y * v2x + (suv2y - suv3y) * v1x) / denom;
                    m12 = (suv2y * v3y + suv1y * (v2y - v3y) - suv3y * v2y + (suv3y - suv2y) * v1y) / denom;
                    m21 = (suv1x * (v3x - v2x) - suv2x * v3x + suv3x * v2x + (suv2x - suv3x) * v1x) / denom;
                    m22 = -(suv2x * v3y + suv1x * (v2y - v3y) - suv3x * v2y + (suv3x - suv2x) * v1y) / denom;
                    dx = (suv1x * (suv3y * v2x - suv2y * v3x) + suv1y * (suv2x * v3x - suv3x * v2x) + (suv3x * suv2y - suv2x * suv3y) * v1x) / denom;
                    dy = (suv1x * (suv3y * v2y - suv2y * v3y) + suv1y * (suv2x * v3y - suv3x * v2y) + (suv3x * suv2y - suv2x * suv3y) * v1y) / denom;
                    this.context.transform(m11, m12, m21, m22, dx, dy);
                    this.context.drawImage(bitmap, 0, 0);
                    this.context.restore();
                }
                this.clearRect.addRectangle(this.bboxRect);
            }
        }
    }
    expand(a, b) {
        this.vector2.sub(b, a);
        this.vector2.unit();
        b.addSelf(this.vector2);
        a.subSelf(this.vector2);
    }
}
exports.default = CanvasRenderer;
//# sourceMappingURL=CanvasRenderer.js.map