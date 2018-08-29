import Renderer from "./Renderer";
import Face3 from "../core/Face3";
import Face4 from "../core/Face4";

export default class SVGRenderer extends Renderer {
  constructor() {
    super();

    this.defs = null;

    this.svgImagePool = null;
    this.svgPatternPool = null;
    this.svgPathPool = null;

    this.viewport = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    this.viewport.style.position = "absolute";

    this.svgPathPool = new Array();
    this.svgImagePool = new Array();

    this.defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

    var texture = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "pattern"
    );
    texture.setAttribute("id", "texture");
    texture.setAttribute("patternUnits", "userSpaceOnUse");
    texture.setAttribute("width", 552);
    texture.setAttribute("height", 552);

    var bitmap = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "image"
    );
    bitmap.setAttribute("width", 552);
    bitmap.setAttribute("height", 552);
    bitmap.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "href",
      "assets/uvmap.jpg"
    );
    texture.appendChild(bitmap);

    this.svgImagePool.push(texture);
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

    this.viewport.appendChild(this.defs);
    this.defs.appendChild(this.svgImagePool[0]);

    this.renderList.map(element => {
      if (this.svgPathPool[j] == null) {
        this.svgPathPool[j] = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        this.svgPathPool[j].setAttribute("shape-rendering", "crispEdges"); //optimizeSpeed
      }

      // this.svgPathPool[j].setAttribute('style', 'fill:url(#texture)');

      this.svgPathPool[j].setAttribute(
        "style",
        "fill: rgb(" +
          element.color[0] +
          ", " +
          element.color[1] +
          ", " +
          element.color[2] +
          ")"
      ); //fill-opacity:' + 0.5); // + ';stroke:' + element.color + ';stroke-width:10;stroke-opacity:0.5;'); //stroke-miterlimit:40;stroke-dasharray:5');

      if (element instanceof Face3) {
        this.svgPathPool[j].setAttribute(
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
        this.svgPathPool[j].setAttribute(
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
      }

      this.viewport.appendChild(this.svgPathPool[j]);
    });
  }
}
