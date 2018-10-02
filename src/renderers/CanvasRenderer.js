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
class CanvasRenderer extends Renderer_1.default {
    constructor() {
        super();
        this.domElement = document.createElement("canvas");
        this.viewport = this.domElement;
        this.context = this.viewport.getContext("2d");
    }
    setSize(width, height) {
        // super.setSize(width, height);
        this.viewport.width = this.width;
        this.viewport.height = this.height;
        this.context.setTransform(1, 0, 0, 1, width / 2, height / 2);
    }
    // render(scene: Scene, camera: Camera) {
    render(scene, camera) {
        // super.render(scene, camera);
        let i, j, element, pi2 = 2 * Math.PI;
        let elementsLength, material, materialsLength;
        this.context.clearRect(-this.viewport.width / 2, -this.viewport.height / 2, this.viewport.width, this.viewport.height);
        this.project(scene, camera);
        elementsLength = this.renderList.length;
        for (i = 0; i < elementsLength; i++) {
            element = this.renderList[i];
            materialsLength = element.material.length;
            for (j = 0; j < materialsLength; j++) {
                material = element.material[j];
                this.context.beginPath();
                if (element instanceof RenderableFace3_1.default) {
                    this.context.moveTo(element.v1.x, element.v1.y);
                    this.context.lineTo(element.v2.x, element.v2.y);
                    this.context.lineTo(element.v3.x, element.v3.y);
                    this.context.lineTo(element.v1.x, element.v1.y);
                }
                else if (element instanceof RenderableFace4_1.default) {
                    this.context.moveTo(element.v1.x, element.v1.y);
                    this.context.lineTo(element.v2.x, element.v2.y);
                    this.context.lineTo(element.v3.x, element.v3.y);
                    this.context.lineTo(element.v4.x, element.v4.y);
                    this.context.lineTo(element.v1.x, element.v1.y);
                }
                else if (element instanceof RenderableParticle_1.default) {
                    this.context.arc(element.x, element.y, element.size * element.screenZ, 0, pi2, true);
                }
                if (material instanceof ColorFillMaterial_1.default) {
                    this.context.fillStyle = material.color.styleString;
                    this.context.fill();
                }
                else if (material instanceof FaceColorFillMaterial_1.default) {
                    context.fillStyle = element.color.styleString;
                    context.fill();
                }
                else if (material instanceof ColorStrokeMaterial_1.default) {
                    this.context.lineWidth = material.lineWidth;
                    this.context.lineJoin = "round";
                    this.context.lineCap = "round";
                    this.context.strokeStyle = material.color.styleString;
                    this.context.stroke();
                }
                else if (material instanceof FaceColorStrokeMaterial_1.default) {
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
exports.default = CanvasRenderer;
//# sourceMappingURL=CanvasRenderer.js.map