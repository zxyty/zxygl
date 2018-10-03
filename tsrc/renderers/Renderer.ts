import Matrix4 from "../core/Matrix4";
import Mesh from "../objects/Mesh";
import Particle from "../objects/Particle";
import Face3 from "../core/Face3";
import Face4 from "../core/Face4";
import Vertex from "../core/Vertex";
import Object3D from "../objects/Object3D";
import Camera from "../cameras/Camera";
import Scene from "../scenes/Scene";
import RenderableFace3 from "./renderables/RenderableFace3";
import RenderableFace4 from "./renderables/RenderableFace4";
import RenderableParticle from "./renderables/RenderableParticle";
import { tRenderable } from "../type";
import RenderableLine from "./renderables/RenderableLine";
import Line from "../objects/Line";

export default class Renderer {
  renderList: tRenderable[];
  face3Pool: RenderableFace3[];
  face4Pool: RenderableFace4[];
  particlePool: RenderableParticle[];
  linePool: RenderableLine[]
  matrix: Matrix4;

  constructor() {
    this.matrix = new Matrix4();

    this.renderList = null;

    this.face3Pool = new Array();
    this.face4Pool = new Array();
    this.linePool = new Array();

  }

  sort(a: tRenderable, b: tRenderable) {
    return a.screenZ - b.screenZ;
  }

  project(scene: Scene, camera: Camera) {
    let i, j, vertex, vertex2, face, object, v1, v2, v3, v4;
    let face3count = 0, face4count = 0, lineCount = 0, particleCount = 0;
    let camerafocus = camera.focus, focuszoom = camera.focus * camera.zoom;
    let verticesLength = 0, faceLength = 0;

    this.renderList = [];

    if(camera.autoUpdateMatrix) {
      
      camera.updateMatrix();

    }

    for(i = 0; i < scene.objects.length; i++) {
      object = scene.objects[i];

      if(object.autoUpdateMatrix) {
        object.updateMatrix();
      }

      if(object instanceof Mesh) {

        // gl_Position = uProjectionMatrix * uCameraViewMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);

        this.matrix.multiply(camera.matrix, object.matrix); // 得到 VM 视图模型矩阵（uCameraViewMatrix * uModelViewMatrix）

        // vertices
        verticesLength = object.geometry.vertices.length;
        for(j = 0; j < verticesLength; j++) {
          vertex = object.geometry.vertices[j];

          vertex.screen.copy(vertex.position);
          this.matrix.transform(vertex.screen);            // 得到 uCameraViewMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);

          vertex.screen.z = focuszoom / (camerafocus + vertex.screen.z);
          vertex.visible = vertex.screen.z > 0;

          vertex.screen.x *= vertex.screen.z;
					vertex.screen.y *= vertex.screen.z; 
        }

        // faces
        faceLength = object.geometry.faces.length;
        for(j = 0; j < faceLength; j++) {
          face = object.geometry.faces[j];

          // TODO: Use normals for culling
          if(face instanceof Face3) {
            v1 = object.geometry.vertices[face.a];
            v2 = object.geometry.vertices[face.b];
            v3 = object.geometry.vertices[face.c];
            
            if(v1.visible && v2.visible && v3.visible && (object.doubleSided || 
              (v3.screen.x - v1.screen.x) * (v2.screen.y - v1.screen.y) -
              (v3.screen.y - v1.screen.y) * (v2.screen.x - v1.screen.x) > 0)) {

                face.screen.z = (v1.screen.z + v2.screen.z + v3.screen.z) * 0.3;  // 这里*0.33 会更精确点
                
                if(!this.face3Pool[face3count]) {
                  this.face3Pool[face3count] = new RenderableFace3();
                  
                }

                this.face3Pool[face3count].v1.x = v1.screen.x;
                this.face3Pool[face3count].v1.y = v1.screen.y;
                this.face3Pool[face3count].v2.x = v2.screen.x;
                this.face3Pool[face3count].v2.y = v2.screen.y;
                this.face3Pool[face3count].v3.x = v3.screen.x;
                this.face3Pool[face3count].v3.y = v3.screen.y;
                
                this.face3Pool[face3count].screenZ = face.screen.z;
                this.face3Pool[face3count].color = face.color;
                this.face3Pool[face3count].material = object.material;

                this.renderList.push(this.face3Pool[face3count]);
                face3count++;

              }

          } else if(face instanceof Face4) {
            v1 = object.geometry.vertices[face.a];
            v2 = object.geometry.vertices[face.b];
            v3 = object.geometry.vertices[face.c];
            v4 = object.geometry.vertices[face.d];

            if (v1.visible && v2.visible && v3.visible && v4.visible && (object.doubleSided ||
              ((v4.screen.x - v1.screen.x) * (v2.screen.y - v1.screen.y) -
              (v4.screen.y - v1.screen.y) * (v2.screen.x - v1.screen.x) > 0 ||
              (v2.screen.x - v3.screen.x) * (v4.screen.y - v3.screen.y) -
              (v2.screen.y - v3.screen.y) * (v4.screen.x - v3.screen.x) > 0)) ) {
                face.screen.z = (v1.screen.z + v2.screen.z + v3.screen.z + v4.screen.z) * 0.25;

                if(!this.face4Pool[face4count]) {
                  this.face4Pool[face4count] = new RenderableFace4();
                }

                this.face4Pool[face4count].v1.x = v1.screen.x;
                this.face4Pool[face4count].v1.y = v1.screen.y;
                this.face4Pool[face4count].v2.x = v2.screen.x;
                this.face4Pool[face4count].v2.y = v2.screen.y;
                this.face4Pool[face4count].v3.x = v3.screen.x;
                this.face4Pool[face4count].v3.y = v3.screen.y;
                this.face4Pool[face4count].v4.x = v4.screen.x;
                this.face4Pool[face4count].v4.y = v4.screen.y;

                this.face4Pool[face4count].screenZ = face.screen.z;
                this.face4Pool[face4count].color = face.color;
                this.face4Pool[face4count].material = object.material;

                this.renderList.push(this.face4Pool[face4count]);
                face4count++;
            }

          }

        }

      } else if(object instanceof Line) {
        this.matrix.multiply(camera.matrix, object.matrix);
        
        verticesLength = object.geometry.vertices.length;
        for(j = 0; j< verticesLength; j++) {
          vertex = object.geometry.vertices[j];

          vertex.screen.copy(vertex.position);
          this.matrix.transform(vertex.screen);

          vertex.screen.z = focuszoom / (camerafocus + vertex.screen.z);
          vertex.visible = vertex.screen.z > 0;

          vertex.screen.x *= vertex.screen.z;
          vertex.screen.y *= vertex.screen.z;

          if(j > 0) {
            vertex2 = object.geometry.vertices[j - 1];

            if(!vertex.visible || !vertex2.visible) {
              continue;
            }

            if(!this.linePool[lineCount]) {
              this.linePool[lineCount] = new RenderableLine();
            }

            this.linePool[lineCount].v1.x = vertex.screen.x;
            this.linePool[lineCount].v1.y = vertex.screen.y;
            this.linePool[lineCount].v2.x = vertex2.screen.x;
            this.linePool[lineCount].v2.x = vertex2.screen.x;
            this.linePool[lineCount].screenZ = (vertex.screen.z + vertex2.screen.z) * 0.5;
            this.linePool[lineCount].material = object.material;

            this.renderList.push(this.linePool[lineCount]);
            lineCount++;
          }
        }

      } else if(object instanceof Particle) {
        object.screen.copy(object.position);

        // uCameraViewMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
        camera.matrix.transform(object.screen);       // 粒子不需要模型矩阵 默认则是单位矩阵 所以没有乘以object.matrix

        object.screen.z = focuszoom / (camerafocus + object.screen.z);
        if(object.screen.z < 0) {
          continue;
        }

        object.screen.x *= object.screen.z;
        object.screen.y *= object.screen.z;
        
        if (!this.particlePool[particleCount]) {
          this.particlePool[particleCount] = new RenderableParticle();
        }
          
        this.particlePool[particleCount].x = object.screen.x;
        this.particlePool[particleCount].y = object.screen.y;
        this.particlePool[particleCount].screenZ = object.screen.z;
        this.particlePool[particleCount].size = object.size;				
        this.particlePool[particleCount].material = object.material;
        // this.particlePool[particleCount].color = object.color;

        this.renderList.push( this.particlePool[particleCount] );
        particleCount++;
      }

    }

    this.renderList.sort(this.sort); 
  }
}
