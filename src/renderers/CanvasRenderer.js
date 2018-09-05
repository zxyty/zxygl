import Renderer from "./Renderer";
import Particle from "../objects/Particle";
import Face3 from "../core/Face3";
import Face4 from "../core/Face4";
import ColorMaterial from "../materials/ColorMaterial";
import FaceColorMaterial from "../materials/FaceColorMaterial";

export default class CanvasRenderer extends Renderer {
  constructor() {
    super();
    this.context = null;

    this.viewport = document.createElement("canvas");
    this.viewport.style.position = "absolute";

    this.context = this.viewport.getContext("2d");
  }

  setSize(width, height) {
    super.setSize(width, height);

    this.viewport.width = this.width;
    this.viewport.height = this.height;

    this.context.setTransform(1, 0, 0, 1, this.widthHalf, this.heightHalf);
  }

  render(scene, camera) {
    super.render(scene, camera);

    let element,
      pi2 = Math.PI * 2;

    this.context.clearRect(-this.widthHalf, -this.heightHalf, this.width, this.height);

    this.renderList.map(element => {
      if (element.material instanceof ColorMaterial) {
        this.context.fillStyle = element.material.color.styleString;
      } else if (element.material instanceof FaceColorMaterial) {
        this.context.fillStyle = element.color.styleString;
      }

      if (element instanceof Face3) {
        this.context.beginPath();
        this.context.moveTo(
          element.a.screen.x,
          element.a.screen.y
        );
        this.context.lineTo(
          element.b.screen.x,
          element.b.screen.y
        );
        this.context.lineTo(
          element.c.screen.x,
          element.c.screen.y
        );
        this.context.fill();
        this.context.closePath();
      } else if (element instanceof Face4) {
        this.context.beginPath();
        this.context.moveTo(
          element.a.screen.x,
          element.a.screen.y
        );
        this.context.lineTo(
          element.b.screen.x,
          element.b.screen.y
        );
        this.context.lineTo(
          element.c.screen.x,
          element.c.screen.y
        );
        this.context.lineTo(
          element.d.screen.x,
          element.d.screen.y
        );
        this.context.fill();
        this.context.closePath();
      } else if (element instanceof Particle) {
        this.context.beginPath();
        this.context.arc(
          element.screen.x,
          element.screen.y,
          element.size * element.screen.z,
          0,
          pi2,
          true
        );
        this.context.fill();
        this.context.closePath();
      }
    });
  }
}
