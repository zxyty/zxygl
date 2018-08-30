import Matrix4 from "../core/Matrix4";
import Mesh from "../objects/Mesh";
import Particle from "../objects/Particle";
import Face3 from "../core/Face3";
import Face4 from "../core/Face4";
import Vertex from "../core/Vertex";

export default class Renderer {
  constructor() {
    this.matrix = new Matrix4();

    this.viewport = null;
    this.renderList = null;

    this.face3Pool = new Array();
    this.face4Pool = new Array();

    this.width = null;
    this.height = null;

    this.widthHalf = null;
    this.heightHalf = null;
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;

    this.widthHalf = this.width / 2;
    this.heightHalf = this.height / 2;
  }

  sort(a, b) {
    return a.screen.z - b.screen.z;
  }

  render(scene, camera) {
    let vertex, face, object;
    let face3count = 0,
      face4count = 0;

    let focuszoom = camera.focus * camera.zoom;

    this.renderList = new Array();

    scene.objects.map((object, i) => {
      if (object instanceof Mesh) {
        this.matrix.multiply(camera.matrix, object.matrix);

        // vertices

        object.geometry.vertices.map((vertex, j) => {
          vertex.screen.copy(vertex);
          this.matrix.transform(vertex.screen);

          vertex.screen.z = focuszoom / (camera.focus + vertex.screen.z);

          vertex.visible = vertex.screen.z > 0;

          vertex.screen.x *= vertex.screen.z;
          vertex.screen.y *= vertex.screen.z;
        });

        object.geometry.faces.map(face => {
          // TODO: use normals for culling

          if (face instanceof Face3) {
            if (
              face.a.visible &&
              face.b.visible &&
              face.c.visible &&
              (object.doubleSided ||
                (face.c.screen.x - face.a.screen.x) *
                  (face.b.screen.y - face.a.screen.y) -
                  (face.c.screen.y - face.a.screen.y) *
                    (face.b.screen.x - face.a.screen.x) >
                  0)
            ) {
              face.screen.z = (face.a.scene.z + face.b.scene.z + face.c.scene.z) * 0.3;

              if (this.face3Pool[face3count] == null)
                this.face3Pool[face3count] = new Face3(
                  new Vertex(),
                  new Vertex(),
                  new Vertex()
                );

              this.face3Pool[face3count].a.screen.copy(face.a.screen);
              this.face3Pool[face3count].b.screen.copy(face.b.screen);
              this.face3Pool[face3count].c.screen.copy(face.c.screen);
              this.face3Pool[face3count].screen.z = face.screen.z;
              this.face3Pool[face3count].color = face.color;
              this.face3Pool[face3count].material = object.material;

              this.renderList.push(this.face3Pool[face3count]);

              face3count++;
            }
          } else if (face instanceof Face4) {
            if (
              face.a.visible &&
              face.b.visible &&
              face.c.visible &&
              (object.doubleSided ||
                ((face.d.screen.x - face.a.screen.x) *
                  (face.b.screen.y - face.a.screen.y) -
                  (face.d.screen.y - face.a.screen.y) *
                    (face.b.screen.x - face.a.screen.x) >
                  0 ||
                  (face.b.screen.x - face.c.screen.x) *
                    (face.d.screen.y - face.c.screen.y) -
                    (face.b.screen.y - face.c.screen.y) *
                      (face.d.screen.x - face.c.screen.x) >
                    0))
            ) {
              face.screen.z = (face.a.screen.z + face.b.screen.z + face.c.screen.z + face.d.screen.z) * 0.25;

              if (this.face4Pool[face4count] == null)
                this.face4Pool[face4count] = new Face4(
                  new Vertex(),
                  new Vertex(),
                  new Vertex(),
                  new Vertex()
                );

              this.face4Pool[face4count].a.screen.copy(face.a.screen);
              this.face4Pool[face4count].b.screen.copy(face.b.screen);
              this.face4Pool[face4count].c.screen.copy(face.c.screen);
              this.face4Pool[face4count].d.screen.copy(face.d.screen);
              this.face4Pool[face4count].screen.z = face.screen.z;
              this.face4Pool[face4count].color = face.color;
              this.face4Pool[face4count].material = object.material;

              this.renderList.push(this.face4Pool[face4count]);

              face4count++;
            }
          }
        });
      } else if(object instanceof Particle) {
        object.screen.copy(object.position);

        camera.matrix.transform( object.screen );

        object.screen.z = focuszoom / (camera.focus + object.screen.z);

        if (object.screen.z < 0)
            // continue;	
            return;				

        object.screen.x *= object.screen.z;
        object.screen.y *= object.screen.z;

        this.renderList.push( object );
      }
    });

    this.renderList.sort(this.sort);
  }
}
