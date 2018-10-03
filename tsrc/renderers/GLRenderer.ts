import Renderer from "./Renderer";
import Matrix4 from "../core/Matrix4";
import Scene from "../scenes/Scene";
import Camera from "../cameras/Camera";
import Mesh from "../objects/Mesh";

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

export default class GLRenderer extends Renderer {
    viewport: HTMLCanvasElement;

    gl: WebGLRenderingContext;
    program: WebGLProgram;
    particleProgram: WebGLProgram;

    programParmas: ProgramParams;
    particleProgramParams: ParticleProgramParams;


    constructor() {
        super();

        this.programParmas = new Object();
        this.particleProgramParams = new Object();

        this.viewport = document.createElement('canvas');
        this.viewport.style.position = "absolute";

        try {
            this.gl = this.viewport.getContext("experimental-webgl");
        } catch(e) {

        }

        if(!this.gl) {
            this.gl = this.viewport.getContext("webgl");
        }
        
        if(!this.gl) {
            alert("WebGL not supported");
            throw new Error("cannot create webgl context");
        }

        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(1.0);

        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(this.gl.LESS);

        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

        this.gl.clearColor(0, 0, 0, 0);
        this.createProgram();
        this.initParticles(32);
    }

    setSize(width: number, height: number) {
        this.viewport.width = width;
        this.viewport.height = height;

        this.gl.viewport(0, 0, width, height);
    }

    createProgram(): any {
        let vtxShader = `
            attribute vec3 position;
            attribute vec4 color;
            uniform mat4 mvMatrix;
            uniform mat4 pMatrix;
            varying vec4 vcolor;
            void main() {
                vcolor = color;
                gl_Position = pMatrix * mvMatrix * vec4(position, 1.0);
            }
        `;

        let frgShader = `
            varying vec4 color;
            void main() {
                gl_FragColor = color;
            }
        `;

        let vertexShader = this.gl.createShader(this.gl.VERTEX_SHADER);
        let fragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);

        this.gl.shaderSource(vertexShader, vtxShader);
        this.gl.compileShader(vertexShader);

        this.gl.shaderSource(fragmentShader, frgShader);
        this.gl.compileShader(fragmentShader);

        this.program = this.gl.createProgram();
        this.gl.attachShader(this.program, vertexShader);
        this.gl.attachShader(this.program, fragmentShader);
        this.gl.linkProgram(this.program);
        
        this.programParmas.mvMatrix = this.gl.getUniformLocation(this.program, "mvMatrix");
        this.programParmas.pMatrix = this.gl.getUniformLocation(this.program, "pMatrix");
        this.programParmas.color = this.gl.getAttribLocation(this.program, "color");
        this.programParmas.position = this.gl.getAttribLocation(this.program, "position");

        this.programParmas.mvMatrixArray = new Float32Array(16);
        this.programParmas.pMatrixArray = new Float32Array(16);
    }

    initParticles(segments: number): any {
        let x, y;
        let vertexArray = [0, 0, 0];
        let faceArray = [];
        let piStep = 6.282 / segments;
        
        for(let i = 0; i < segments; i++) {
            x = Math.sin(piStep * i);
            y = Math.cos(piStep * i);

            vertexArray.push(x, y, 0);
            if(i > 0) {
                faceArray.push(0, i, i + 1);
            }
        }
        faceArray.push(0, segments, 1);

        let vtxShader = `
            attribute vec3 position;
            uniform vec3 location;
            uniform mat4 cameraMatrix;
            uniform mat4 pMatrix;
            uniform float size;
            void main() {
                vec4 pos = cameraMatrix * vec4(location, 1.0);
                pos = vec4(position * vec3(size), 0.0) + pos;
                gl_Position = pMatrix * pos;
            }
        `;

        let frgShader = `
            uniform vec4 color;
            void main() {
                gl_FragColor = color;
            }
        `;

        let vertexShader = this.gl.createShader(this.gl.VERTEX_SHADER);
        let fragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);

        this.gl.shaderSource(vertexShader, vtxShader);
        this.gl.compileShader(vertexShader);

        this.gl.shaderSource(fragmentShader, frgShader);
        this.gl.compileShader(fragmentShader);

        this.particleProgram = this.gl.createProgram();
        this.gl.attachShader(this.particleProgram, vertexShader);
        this.gl.attachShader(this.particleProgram, fragmentShader);

        this.gl.linkProgram(this.particleProgram);

        this.particleProgramParams.cameraMatrix = this.gl.getUniformLocation(this.particleProgram, "cameraMatrix");
        this.particleProgramParams.pMatrix = this.gl.getUniformLocation(this.particleProgram, "pMatrix");
        this.particleProgramParams.color = this.gl.getUniformLocation(this.particleProgram, "color");
        this.particleProgramParams.size = this.gl.getUniformLocation(this.particleProgram, "size");
        this.particleProgramParams.location = this.gl.getUniformLocation(this.particleProgram, "location");
        this.particleProgramParams.position = this.gl.getAttribLocation(this.particleProgram, "position");

        this.particleProgramParams.mvMatrixArray = new Float32Array(16);
        this.particleProgramParams.cameraMatrixArray = new Float32Array(16);
        this.particleProgramParams.pMatrixArray = new Float32Array(16);

        this.particleProgramParams.webGlVertexBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.particleProgramParams.webGlVertexBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertexArray), this.gl.STATIC_DRAW);

        this.particleProgramParams.webGLFaceBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.particleProgramParams.webGLFaceBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(faceArray), this.gl.STATIC_DRAW);

        this.particleProgramParams.faceNum = faceArray.length;
    }

    matrix2Array( matrix: Matrix4, array: Float32Array ){
		array[0]=matrix.n11;
		array[1]=matrix.n12;
		array[2]=matrix.n13;
		array[3]=matrix.n14;
		array[4]=matrix.n21;
		array[5]=matrix.n22;
		array[6]=matrix.n23;
		array[7]=matrix.n24;
		array[8]=matrix.n31;
		array[9]=matrix.n32;
		array[10]=matrix.n33;
		array[11]=matrix.n34;
		array[12]=matrix.n41;
		array[13]=matrix.n42;
		array[14]=matrix.n43;
		array[15]=matrix.n44;
    }
    // render
}