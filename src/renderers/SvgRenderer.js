import Renderer from "./Renderer";
import Face3 from "../core/Face3";
import Face4 from "../core/Face4";

export default class SVGRenderer extends Renderer {
  constructor() {
    super();

    this.svgPathPool = null;
    this.svgCirclePool = null;

    this.viewport = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    this.viewport.style.position = "absolute";

    this.svgPathPool = new Array();
    this.svgCirclePool = new Array();
  }

  setSize(width, height) {
    this.viewport.setAttribute(
      "viewBox",
      -width / 2 + " " + -height / 2 + " " + width + " " + height
    );
    this.viewport.setAttribute("width", width);
    this.viewport.setAttribute("height", height);
  }

  render(scene, camera) {
    super.render(scene, camera);

    while (this.viewport.childNodes.length > 0) {
      this.viewport.removeChild(this.viewport.childNodes[0]);
    }

    let pathCount = 0,
      circleCount = 0,
      svgNode;

    this.renderList.map((element, j) => {
      if (element instanceof Face3) {
        svgNode = this.getPathNode(pathCount++);
        svgNode.setAttribute(
          "d",
          "M " +
            element.a.screen.x +
            " " +
            element.a.screen.y +
            " L " +
            element.b.screen.x +
            " " +
            element.b.screen.y +
            " L " +
            element.c.screen.x +
            "," +
            element.c.screen.y +
            "z"
        );
      } else if (element instanceof Face4) {
        svgNode = this.getPathNode(pathCount++);
        svgNode.setAttribute(
          "d",
          "M " +
            element.a.screen.x +
            " " +
            element.a.screen.y +
            " L " +
            element.b.screen.x +
            " " +
            element.b.screen.y +
            " L " +
            element.c.screen.x +
            "," +
            element.c.screen.y +
            " L " +
            element.d.screen.x +
            "," +
            element.d.screen.y +
            "z"
        );
      } else if (element instanceof Particle) {
        svgNode = this.getCircleNode(circleCount++);
        svgNode.setAttribute("cx", element.screen.x);
        svgNode.setAttribute("cy", element.screen.y);
        svgNode.setAttribute("r", element.size * element.screen.z);
      }

      if (element.material instanceof ColorMaterial) {
        svgNode.setAttribute(
          "style",
          "fill: rgb(" +
            element.material.color.r +
            "," +
            element.material.color.g +
            "," +
            element.material.color.b +
            ")"
        );
      } else if (element.material instanceof FaceColorMaterial) {
        svgNode.setAttribute(
          "style",
          "fill: rgb(" +
            element.color.r +
            "," +
            element.color.g +
            "," +
            element.color.b +
            ")"
        );
      }
      this.viewport.appendChild(svgNode);
    });
  }

  getPathNode(id) {
    if (this.svgPathPool[id] == null) {
      this.svgPathPool[id] = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      return this.svgPathPool[id];
    }

    return this.svgPathPool[id];
  }

  getCircleNode(id) {
    if (this.svgCirclePool[id] == null) {
      this.svgCirclePool[id] = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      this.svgCirclePool[id].setAttribute("fill", "red");
      return this.svgCirclePool[id];
    }
    return this.svgCirclePool[id];
  }
}
