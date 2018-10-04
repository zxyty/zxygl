import Geometry from "../../core/Geometry";
import Vertex from "../../core/Vertex";
import Face4 from "../../core/Face4";
import Vector3 from "../../core/Vector3";
import Face3 from "../../core/Face3";
import Vector2 from "../../core/Vector2";
export default class Plane extends Geometry {

  width_half: number;
  height_half: number;

  segment_width: number;
  segment_height: number;

  gridX: number;
  gridY: number;

  gridX1: number;
  gridY1: number;

  constructor(width: number, height: number, segments_width: number, segments_height: number) {
    super();

    this.width_half = width / 2,
    this.height_half = height / 2,
    this.gridX = segments_width || 1,
    this.gridY = segments_height || 1,
    this.gridX1 = this.gridX + 1,
    this.gridY1 = this.gridY + 1,
    this.segment_width = width / this.gridX,
    this.segment_height = height / this.gridY;

    for(var iy = 0; iy < this.gridY1; iy++) {

      for( var ix = 0; ix < this.gridX1; ix++ ) {
  
        var x = ix * this.segment_width - this.width_half;
        var y = iy * this.segment_height - this.height_half;
  
        this.vertices.push( new Vertex( new Vector3( x, -y, 0 ) ) );
  
      }
  
    }
  
    for(  iy = 0; iy < this.gridY; iy++ ) {
  
      for( ix = 0; ix < this.gridX; ix++ ) {
  
        var a = ix + this.gridX1 * iy;
        var b = ix + this.gridX1 * ( iy + 1 );
        var c = ( ix + 1 ) + this.gridX1 * iy;
  
        this.faces.push( new Face3( a, b, c ) );
        this.uvs.push( [
              new Vector2( ix / this.gridX, iy / this.gridY ),
              new Vector2( ix / this.gridX, ( iy + 1 ) / this.gridY ),
              new Vector2( ( ix + 1 ) / this.gridX, iy / this.gridY )
            ] );
  
        a = ( ix + 1 ) + this.gridX1 * ( iy + 1 );
        b = ( ix + 1 ) + this.gridX1 * iy;
        c = ix + this.gridX1 * ( iy + 1 );
  
        this.faces.push( new Face3( a, b, c ) );
        this.uvs.push( [
              new Vector2( ( ix + 1 ) / this.gridX, ( iy + 1 ) / this.gridY ),
              new Vector2( ( ix + 1 ) / this.gridX, iy / this.gridY ),
              new Vector2( ix / this.gridX, ( iy + 1 ) / this.gridY )
            ] );
  
      }
      
    }
  }

  // v(x, y, z) {
  //   this.vertices.push(new Vertex(x, y, z));
  // }

  // f4(a, b, c, d) {
  //   this.faces.push(
  //     new Face4(
  //       this.vertices[a],
  //       this.vertices[b],
  //       this.vertices[c],
  //       this.vertices[d]
  //     )
  //   );
  // }
}
