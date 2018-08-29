import Geometry from '../../core/Geometry';
import Vertex from '../../core/Vertex';
export default class Plane extends Geometry {
    constructor(width, height) {
        super();

        let widthHalf = width / 2;
        let heightHalf = height / 2;

        this.vertices.push( new Vertex(-widthHalf,  heightHalf, 0) );
		this.vertices.push( new Vertex( widthHalf,  heightHalf, 0) );
		this.vertices.push( new Vertex( widthHalf, -heightHalf, 0) );
		this.vertices.push( new Vertex(-widthHalf, -heightHalf, 0) );
		
		this.faces.push( new Face4( this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3] ) );
    }
}