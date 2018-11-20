import Renderer from "./Renderer";
import Matrix4 from "../core/Matrix4";
import Scene from "../scenes/Scene";
import Camera from "../cameras/Camera";
import Mesh from "../objects/Mesh";
import Face3 from "../core/Face3";
import Face4 from "../core/Face4";
import ColorFillMaterial from "../materials/ColorFillMaterial";
import FaceColorFillMaterial from "../materials/FaceColorFillMaterial";

interface ProgramParams {
    mvMatrix?: WebGLUniformLocation;
    pMatrix?: WebGLUniformLocation;
    position?: number;
    color?: number;

    mvMatrixArray?: Float32Array;
    pMatrixArray?: Float32Array;
}

interface ParticleProgramParams {
    cameraMatrix?: WebGLUniformLocation;
    pMatrix?: WebGLUniformLocation;
    color?: WebGLUniformLocation;
    size?: WebGLUniformLocation;
    location?: WebGLUniformLocation;

    position?: number;

    webGlVertexBuffer?: WebGLBuffer;
    webGLFaceBuffer?: WebGLBuffer;


    faceNum?: number;

    mvMatrixArray?: Float32Array;
    cameraMatrixArray?: Float32Array;
    pMatrixArray?: Float32Array;

}

interface NewWebGLProgram extends WebGLProgram {
    viewMatrix?: any;
    projectionMatrix?: any;
    viewMatrixArray?: any;
    projectionMatrixArray?: any;
    position?: any;
    color?: any;
}

export default class WebGLRenderer {

    canvas: HTMLCanvasElement;
    gl: WebGLRenderingContext;
    program: NewWebGLProgram;
    
    viewMatrix: Matrix4;

    domElement: HTMLCanvasElement;

    autoClear: Boolean;

    constructor() {
        this.canvas = document.createElement('canvas');

        this.gl = null;
        this.program = null;

        this.domElement = this.canvas;
        this.autoClear = true;

        this.initGL();
        this.initProgram();
    }

    setSize(width: number, height: number) {
        this.canvas.width = width;
        this.canvas.height = height;

        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }

    clear() {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    }

    render(scene: Scene, camera: Camera) {

        let face, faceColor, object, material,
        vertexArray: Array<number>, faceArray: Array<number>, colorArray: Array<number>, vertexIndex,
        o, ol, f, fl, m, ml, i, v1, v2, v3, v4;

        if (this.autoClear) {
            this.clear();
        }

        for( o = 0, ol = scene.objects.length; o < ol; o++ ) {

            object = scene.objects[o];

            if(object instanceof Mesh) {
                
                if(!object.__webGLVertexBuffer) {

                    vertexArray = [];
                    faceArray = [];
                    colorArray = [];
                    vertexIndex = 0;

                    for(f = 0, fl = object.geometry.faces.length; f < fl; f++) {

                        face = object.geometry.faces[f];
                        faceColor = face.color;

                        if (face instanceof Face3) {
                            
                            v1 = object.geometry.vertices[face.a].position;
                            v2 = object.geometry.vertices[face.b].position;
                            v3 = object.geometry.vertices[face.c].position;

                            vertexArray.push(v1.x, v1.y, v1.z);
                            vertexArray.push(v2.x, v2.y, v2.z);
                            vertexArray.push(v3.x, v3.y, v3.z);

                            vertexArray.push( v1.x, v1.y, v1.z );
							vertexArray.push( v2.x, v2.y, v2.z );
							vertexArray.push( v3.x, v3.y, v3.z );

							colorArray.push( faceColor.r, faceColor.g, faceColor.b, faceColor.a );
							colorArray.push( faceColor.r, faceColor.g, faceColor.b, faceColor.a );
							colorArray.push( faceColor.r, faceColor.g, faceColor.b, faceColor.a );

							faceArray.push( vertexIndex, vertexIndex + 1, vertexIndex + 2 );

                            vertexIndex += 3;
                            
                        } else if (face instanceof Face4) {

                            v1 = object.geometry.vertices[ face.a ].position;
							v2 = object.geometry.vertices[ face.b ].position;
							v3 = object.geometry.vertices[ face.c ].position;
							v4 = object.geometry.vertices[ face.d ].position;

							vertexArray.push( v1.x, v1.y, v1.z );
							vertexArray.push( v2.x, v2.y, v2.z );
							vertexArray.push( v3.x, v3.y, v3.z );
							vertexArray.push( v4.x, v4.y, v4.z );

							colorArray.push( faceColor.r, faceColor.g, faceColor.b, faceColor.a );
							colorArray.push( faceColor.r, faceColor.g, faceColor.b, faceColor.a );
							colorArray.push( faceColor.r, faceColor.g, faceColor.b, faceColor.a );
							colorArray.push( faceColor.r, faceColor.g, faceColor.b, faceColor.a );

							faceArray.push( vertexIndex, vertexIndex + 1, vertexIndex + 2 );
							faceArray.push( vertexIndex, vertexIndex + 2, vertexIndex + 3 );

							vertexIndex += 4;

                        }

                    }
                
                }

                if (!vertexArray.length) {
                    continue;
                }

                object.__webGLVertexBuffer = this.gl.createBuffer();
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, object.__webGLVertexBuffer);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertexArray), this.gl.STATIC_DRAW);

                object.__webGLColorBuffer = this.gl.createBuffer();
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, object.__webGLColorBuffer);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(colorArray), this.gl.STATIC_DRAW);

                object.__webGLFaceBuffer = this.gl.createBuffer();
                this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, object.__webGLFaceBuffer);
                this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(faceArray), this.gl.STATIC_DRAW);

                object.__webGLFaceCount = faceArray.length;
            }

            // 计算vm
            this.viewMatrix.multiply(camera.matrix, object.matrix);

            this.program.viewMatrixArray = this.viewMatrix.toArray();
            this.program.projectionMatrixArray = camera.projectionMatrix.toArray();

            this.gl.uniformMatrix4fv(this.program.viewMatrixArray, false, this.program.viewMatrix);
            this.gl.uniformMatrix4fv(this.program.projectionMatrixArray, false, this.program.projectionMatrix);

            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, object.__webGLVertexBuffer);
            this.gl.vertexAttribPointer(this.program.position, 3, this.gl.FLOAT, false, 0, 0);

            for(m = 0, ml = object.material.length; m < ml; m++) {

                material = object.material[m];

                if (material instanceof ColorFillMaterial) {

                    if(!material.__webGLColorBuffer) {

                        colorArray = [];

                        for (let i = 0; i < object.__webGLFaceCount; i++) {
                            
                            colorArray.push(material.color.r, material.color.g, material.color.b, material.color.a);
                            
                        }

                        material.__webGLColorBuffer = this.gl.createBuffer();
                        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, material.__webGLColorBuffer);
                        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(colorArray), this.gl.STATIC_DRAW);
                    }

                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, material.__webGLColorBuffer);
                    this.gl.vertexAttribPointer(this.program.color, 4, this.gl.FLOAT, false, 0, 0);

                } else if (material instanceof FaceColorFillMaterial) {

                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, object.__webGLColorBuffer);
                    this.gl.vertexAttribPointer(this.program.color, 4, this.gl.FLOAT, false, 0, 0);
                }

            }

            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, object.__webGLFaceBuffer);
            this.gl.drawElements(this.gl.TRIANGLES, object.__webGLFaceCount, this.gl.UNSIGNED_SHORT, 0);
        }


    }

    initGL() {
        try {
            this.gl = this.canvas.getContext('webgl');
        } catch (error) {
            
        }

        if (!this.gl) {
            try {
                this.gl = this.canvas.getContext('experimental-webgl');
            } catch (error) {
                
            }
        }

        if(!this.gl) {
            throw "cannot create webgl context";
        }

        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clearDepth(1);

        // 启用深度测试
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(this.gl.LEQUAL);

        // 启用混合
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

        this.gl.clearColor(0, 0, 0, 0);
    }

    initProgram() {

        this.program = this.gl.createProgram();

        this.gl.attachShader(this.program, this.getShader("fragment", `
            varing vec4 vcolor;
            void main() {
                gl_FragColor = vcolor;
            }
        `));

        this.gl.attachShader(this.program, this.getShader("vertex", `
            attribute vec3 position;
            attribute vec4 color;

            uniform mat4 viewMatrix;
            uniform mat4 projectionMatrix;
            varying vec4 vcolor;

            void main() {
                vcolor = color;
                gl_Position = projectionMatrix * viewMatrix * vec4(position, 1);
            }
        
        `));

        this.gl.linkProgram(this.program);

        if(!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {

            alert("Could not initialise shaders");

        }

        this.gl.useProgram(this.program);

        this.program.viewMatrix = this.gl.getUniformLocation(this.program, "viewMatrix");
        this.program.projectionMatrix = this.gl.getUniformLocation(this.program, "projectionMatrix");
        this.program.color = this.gl.getAttribLocation(this.program, "color");
        this.program.position = this.gl.getAttribLocation(this.program, "position");

        this.gl.enableVertexAttribArray(this.program.color);
        this.gl.enableVertexAttribArray(this.program.position);

        // this.program.viewMatrixArray = new Float32Array(16);
        // this.program.projectionMatrixArray = new Float32Array(16);

    }

    getShader(type: String, code: string) {

        let shader: WebGLShader | null;

        if (type == "fragment") {

            shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        } else if (type == 'vertex') {

            shader = this.gl.createShader(this.gl.VERTEX_SHADER);
        }

        this.gl.shaderSource(shader, code);
        this.gl.compileShader(shader);

        if(!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {

            alert(this.gl.getShaderInfoLog(shader));

            return null;
        }

        return shader;
    }

}