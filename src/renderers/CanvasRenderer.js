import Renderer from "./Renderer";
import Particle from "../objects/Particle";
import Face3 from "../core/Face3";
import Face4 from "../core/Face4";
import ColorMaterial from "../materials/ColorMaterial";

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
  }

  render(scene, camera) {
    super.render(scene, camera);

    let element,
      pi2 = Math.PI * 2;

    this.context.clearRect(0, 0, this.width, this.height);

    this.renderList.map(element => {
      if (element.material instanceof ColorMaterial) {
        this.context.fillStyle = element.material.colorString;
      }

      if (element instanceof Face3) {
        this.context.beginPath();
        this.context.moveTo(
          element.a.screen.x + this.widthHalf,
          element.a.screen.y + this.heightHalf
        );
        this.context.lineTo(
          element.b.screen.x + this.widthHalf,
          element.b.screen.y + this.heightHalf
        );
        this.context.lineTo(
          element.c.screen.x + this.widthHalf,
          element.c.screen.y + this.heightHalf
        );
        this.context.fill();
        this.context.closePath();
      } else if (element instanceof Face4) {
        this.context.beginPath();
        this.context.moveTo(
          element.a.screen.x + this.widthHalf,
          element.a.screen.y + this.heightHalf
        );
        this.context.lineTo(
          element.b.screen.x + this.widthHalf,
          element.b.screen.y + this.heightHalf
        );
        this.context.lineTo(
          element.c.screen.x + this.widthHalf,
          element.c.screen.y + this.heightHalf
        );
        this.context.lineTo(
          element.d.screen.x + this.widthHalf,
          element.d.screen.y + this.heightHalf
        );
        this.context.fill();
        this.context.closePath();
      } else if (element instanceof Particle) {
        this.context.beginPath();
        this.context.arc(
          element.screen.x + this.widthHalf,
          element.screen.y + this.heightHalf,
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
