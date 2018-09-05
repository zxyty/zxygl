/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ZXYGL.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ZXYGL.js":
/*!**********************!*\
  !*** ./src/ZXYGL.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Face3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Face3 */ \"./src/core/Face3.js\");\n/* harmony import */ var _core_Face4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Face4 */ \"./src/core/Face4.js\");\n/* harmony import */ var _core_Geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Geometry */ \"./src/core/Geometry.js\");\n/* harmony import */ var _core_Matrix3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Matrix3 */ \"./src/core/Matrix3.js\");\n/* harmony import */ var _core_Matrix4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/Matrix4 */ \"./src/core/Matrix4.js\");\n/* harmony import */ var _core_Vector2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/Vector2 */ \"./src/core/Vector2.js\");\n/* harmony import */ var _core_Vector3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/Vector3 */ \"./src/core/Vector3.js\");\n/* harmony import */ var _core_Vertex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/Vertex */ \"./src/core/Vertex.js\");\n/* harmony import */ var _core_Color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/Color */ \"./src/core/Color.js\");\n/* harmony import */ var _scenes_Scene__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scenes/Scene */ \"./src/scenes/Scene.js\");\n/* harmony import */ var _renderers_Renderer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./renderers/Renderer */ \"./src/renderers/Renderer.js\");\n/* harmony import */ var _renderers_CanvasRenderer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./renderers/CanvasRenderer */ \"./src/renderers/CanvasRenderer.js\");\n/* harmony import */ var _renderers_SvgRenderer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./renderers/SvgRenderer */ \"./src/renderers/SvgRenderer.js\");\n/* harmony import */ var _cameras_Camera__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cameras/Camera */ \"./src/cameras/Camera.js\");\n/* harmony import */ var _materials_ColorMaterial__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./materials/ColorMaterial */ \"./src/materials/ColorMaterial.js\");\n/* harmony import */ var _materials_FaceColorMaterial__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./materials/FaceColorMaterial */ \"./src/materials/FaceColorMaterial.js\");\n/* harmony import */ var _objects_Object3D__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./objects/Object3D */ \"./src/objects/Object3D.js\");\n/* harmony import */ var _objects_Mesh__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./objects/Mesh */ \"./src/objects/Mesh.js\");\n/* harmony import */ var _objects_Particle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./objects/Particle */ \"./src/objects/Particle.js\");\n/* harmony import */ var _objects_primitives_Plane__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./objects/primitives/Plane */ \"./src/objects/primitives/Plane.js\");\n/* harmony import */ var _objects_primitives_Cube__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./objects/primitives/Cube */ \"./src/objects/primitives/Cube.js\");\n// core\n\n\n\n\n\n\n\n\n // scenes\n\n // renderers\n\n\n\n // cameras\n\n // materials\n\n\n // objects\n\n\n\n\n\n\nwindow.ZXYGL = {\n  // core\n  Face3: _core_Face3__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Face4: _core_Face4__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  Geometry: _core_Geometry__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  Matrix3: _core_Matrix3__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  Matrix4: _core_Matrix4__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  Vector2: _core_Vector2__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  Vector3: _core_Vector3__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  Vertex: _core_Vertex__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  Color: _core_Color__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  // scenes\n  Scene: _scenes_Scene__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  Renderer: _renderers_Renderer__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  CanvasRenderer: _renderers_CanvasRenderer__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  SvgRenderer: _renderers_SvgRenderer__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  // cameras\n  Camera: _cameras_Camera__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  // materials\n  ColorMaterial: _materials_ColorMaterial__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  FaceColorMaterial: _materials_FaceColorMaterial__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  // objects\n  Object3D: _objects_Object3D__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  Mesh: _objects_Mesh__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  Particle: _objects_Particle__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n  Plane: _objects_primitives_Plane__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n  Cube: _objects_primitives_Cube__WEBPACK_IMPORTED_MODULE_20__[\"default\"]\n};\n\n//# sourceURL=webpack:///./src/ZXYGL.js?");

/***/ }),

/***/ "./src/cameras/Camera.js":
/*!*******************************!*\
  !*** ./src/cameras/Camera.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Camera; });\n/* harmony import */ var _core_Vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Vector3 */ \"./src/core/Vector3.js\");\n/* harmony import */ var _core_Matrix4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Matrix4 */ \"./src/core/Matrix4.js\");\n\n\nclass Camera extends _core_Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, z) {\n    super(x, y, z);\n    this.up = new _core_Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 1, 0);\n    this.target = new _core_Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0); //lookAt center\n\n    this.zoom = 3;\n    this.focus = 500;\n    this.roll = 0;\n    this.matrix = new _core_Matrix4__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.updateMatrix();\n  }\n\n  updateMatrix() {\n    this.matrix.lookAt(this, this.target, this.up);\n  }\n\n  toString() {\n    return \"Camera ( \" + this.x + \", \" + this.y + \", \" + this.z + \" )\";\n  }\n\n}\n\n//# sourceURL=webpack:///./src/cameras/Camera.js?");

/***/ }),

/***/ "./src/core/Color.js":
/*!***************************!*\
  !*** ./src/core/Color.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Color; });\nclass Color {\n  constructor(hex) {\n    this.r = null;\n    this.g = null;\n    this.b = null;\n    this.a = null;\n    this.hex = null;\n    this.styleString = null;\n    this.setHex(hex ? hex : 0xff000000);\n  }\n\n  setHex(hex) {\n    this.hex = hex;\n    this.updateRGBA();\n    this.updateStyleString();\n  }\n\n  setRGBA(r, g, b, a) {\n    this.r = r;\n    this.g = g;\n    this.b = b;\n    this.a = a;\n    this.updateHex();\n    this.updateStyleString();\n  }\n\n  updateRGBA() {\n    this.r = this.hex >> 16 & 0xff;\n    this.g = this.hex >> 8 & 0xff;\n    this.b = this.hex & 0xff;\n    this.a = this.hex >> 24 & 0xff;\n  }\n\n  updateHex() {\n    this.hex = this.a << 24 | this.r << 16 | this.g << 8 | this.b;\n  }\n\n  updateStyleString() {\n    this.styleString = \"rgba(\" + this.r + \",\" + this.g + \",\" + this.b + \",\" + this.a / 255 + \")\";\n  }\n\n  toString() {\n    return \"Color ( r: \" + this.r + \", g: \" + this.g + \", b: \" + this.b + \", a: \" + this.a + \", hex: \" + this.hex + \", style: \" + this.styleString + \" )\";\n  }\n\n}\n\n//# sourceURL=webpack:///./src/core/Color.js?");

/***/ }),

/***/ "./src/core/Face3.js":
/*!***************************!*\
  !*** ./src/core/Face3.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Face3; });\n/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector3 */ \"./src/core/Vector3.js\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color */ \"./src/core/Color.js\");\n\n\nclass Face3 extends _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(a, b, c, uv, normal, color) {\n    super((a.x + b.x + c.x) / 3, (a.y + b.y + c.y) / 3, (a.z + b.z + c.z) / 3);\n    this.a = a;\n    this.b = b;\n    this.c = c;\n    this.screen = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.uv = uv ? uv : [[0, 0], [0, 0], [0, 0]];\n    this.normal = normal ? normal : new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.color = color ? color : new _Color__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  toString() {\n    return 'Face3 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' )';\n  }\n\n}\n\n//# sourceURL=webpack:///./src/core/Face3.js?");

/***/ }),

/***/ "./src/core/Face4.js":
/*!***************************!*\
  !*** ./src/core/Face4.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Face4; });\n/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector3 */ \"./src/core/Vector3.js\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color */ \"./src/core/Color.js\");\n\n\nclass Face4 extends _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(a, b, c, d, uv, normal, color) {\n    super((a.x + b.x + c.x + d.x) / 4, (a.y + b.y + c.y + d.y) / 4, (a.z + b.z + c.z + d.z) / 4);\n    this.a = a;\n    this.b = b;\n    this.c = c;\n    this.d = d;\n    this.screen = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.color = color ? color : new _Color__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  toString() {\n    return 'Face4 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' )';\n  }\n\n}\n\n//# sourceURL=webpack:///./src/core/Face4.js?");

/***/ }),

/***/ "./src/core/Geometry.js":
/*!******************************!*\
  !*** ./src/core/Geometry.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Geometry; });\nclass Geometry {\n  constructor() {\n    this.vertices = new Array();\n    this.faces = new Array();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/core/Geometry.js?");

/***/ }),

/***/ "./src/core/Matrix3.js":
/*!*****************************!*\
  !*** ./src/core/Matrix3.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Matrix3; });\nclass Matrix3 {\n  constructor() {\n    this.identity();\n  }\n\n  identity() {\n    this.n11 = 1;\n    this.n12 = 0;\n    this.n13 = 0;\n    this.n21 = 0;\n    this.n22 = 1;\n    this.n23 = 0;\n    this.n31 = 0;\n    this.n32 = 0;\n    this.n33 = 1;\n  }\n\n  assign(m) {\n    this.n11 = m.n11;\n    this.n12 = m.n12;\n    this.n13 = m.n13;\n    this.n21 = m.n21;\n    this.n22 = m.n22;\n    this.n23 = m.n23;\n    this.n31 = m.n31;\n    this.n32 = m.n32;\n    this.n33 = m.n33;\n  }\n\n  multiplySelf(m) {\n    let n11 = this.n11,\n        n12 = this.n12,\n        n13 = this.n13,\n        n14 = this.n14;\n    let n21 = this.n21,\n        n22 = this.n22,\n        n23 = this.n23,\n        n24 = this.n24;\n    let n31 = this.n31,\n        n32 = this.n32,\n        n33 = this.n33,\n        n34 = this.n34;\n    this.n11 = n11 * m.n11 + n12 * m.n21 + n13 * m.n31;\n    this.n12 = n11 * m.n12 + n12 * m.n22 + n13 * m.n32;\n    this.n13 = n11 * m.n13 + n12 * m.n23 + n13 * m.n33;\n    this.n21 = n21 * m.n11 + n22 * m.n21 + n23 * m.n31;\n    this.n22 = n21 * m.n12 + n22 * m.n22 + n23 * m.n32;\n    this.n23 = n21 * m.n13 + n22 * m.n23 + n23 * m.n33;\n    this.n31 = n31 * m.n11 + n32 * m.n21 + n33 * m.n31;\n    this.n32 = n31 * m.n12 + n32 * m.n22 + n33 * m.n32;\n    this.n33 = n31 * m.n13 + n32 * m.n23 + n33 * m.n33;\n  }\n\n  inverse() {\n    let n11 = this.n11,\n        n12 = this.n12,\n        n13 = this.n13,\n        n14 = this.n14;\n    let n21 = this.n21,\n        n22 = this.n22,\n        n23 = this.n23,\n        n24 = this.n24;\n    let n31 = this.n31,\n        n32 = this.n32,\n        n33 = this.n33,\n        n34 = this.n34;\n    this.n11 = n11;\n    this.n12 = n21;\n    this.n13 = n31;\n    this.n21 = n12;\n    this.n22 = n22;\n    this.n23 = n32;\n    this.n31 = n13;\n    this.n32 = n23;\n    this.n33 = n33;\n  }\n\n  clone() {\n    let m = new Matrix3();\n    m.n11 = this.n11;\n    m.n12 = this.n12;\n    m.n13 = this.n13;\n    m.n21 = this.n21;\n    m.n22 = this.n22;\n    m.n23 = this.n23;\n    m.n31 = this.n31;\n    m.n32 = this.n32;\n    m.n33 = this.n33;\n    return m;\n  }\n\n  toString() {\n    return \"| \" + this.n11 + \" \" + this.n12 + \" \" + this.n13 + \" |\\n\" + \"| \" + this.n21 + \" \" + this.n22 + \" \" + this.n23 + \" |\\n\" + \"| \" + this.n31 + \" \" + this.n32 + \" \" + this.n33 + \" |\";\n  }\n\n}\n\n//# sourceURL=webpack:///./src/core/Matrix3.js?");

/***/ }),

/***/ "./src/core/Matrix4.js":
/*!*****************************!*\
  !*** ./src/core/Matrix4.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Matrix4; });\n/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector3 */ \"./src/core/Vector3.js\");\n\nclass Matrix4 {\n  constructor() {\n    this.identity();\n  }\n\n  static translationMatrix(x, y, z) {\n    let m = new Matrix4();\n    m.n14 = x;\n    m.n24 = y;\n    m.n34 = z;\n    return m;\n  }\n\n  static scaleMatrix(x, y, z) {\n    let m = new Matrix4();\n    m.n11 = x;\n    m.n22 = y;\n    m.n33 = z;\n    return m;\n  }\n\n  static rotationXMatrix(theta) {\n    let rot = new Matrix4();\n    rot.n22 = rot.n33 = Math.cos(theta);\n    rot.n32 = Math.sin(theta);\n    rot.n23 = -rot.n32;\n    return rot;\n  }\n\n  static rotationYMatrix(theta) {\n    let rot = new Matrix4();\n    rot.n11 = rot.n33 = Math.cos(theta);\n    rot.n13 = Math.sin(theta);\n    rot.n31 = -rot.n13;\n    return rot;\n  }\n\n  static rotationZMatrix(theta) {\n    let rot = new Matrix4();\n    rot.n11 = rot.n22 = Math.cos(theta);\n    rot.n21 = Math.sin(theta);\n    rot.n12 = -rot.n21;\n    return rot;\n  }\n\n  identity() {\n    this.n11 = 1;\n    this.n12 = 0;\n    this.n13 = 0;\n    this.n14 = 0;\n    this.n21 = 0;\n    this.n22 = 1;\n    this.n23 = 0;\n    this.n24 = 0;\n    this.n31 = 0;\n    this.n32 = 0;\n    this.n33 = 1;\n    this.n34 = 0;\n    this.x = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0);\n    this.y = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0);\n    this.z = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0);\n  }\n\n  lookAt(eye, center, up) {\n    this.z.sub(center, eye);\n    this.z.normalize();\n    this.x.copy(this.z);\n    this.x.cross(up);\n    this.x.normalize();\n    this.y.copy(this.x);\n    this.y.cross(this.z);\n    this.y.normalize();\n    this.y.negate(); //\n\n    this.n11 = this.x.x;\n    this.n12 = this.x.y;\n    this.n13 = this.x.z;\n    this.n14 = -this.x.dot(eye);\n    this.n21 = this.y.x;\n    this.n22 = this.y.y;\n    this.n23 = this.y.z;\n    this.n24 = -this.y.dot(eye);\n    this.n31 = this.z.x;\n    this.n32 = this.z.y;\n    this.n33 = this.z.z;\n    this.n34 = -this.z.dot(eye);\n  }\n\n  transform(v) {\n    let vx = v.x,\n        vy = v.y,\n        vz = v.z;\n    v.x = this.n11 * vx + this.n12 * vy + this.n13 * vz + this.n14;\n    v.y = this.n21 * vx + this.n22 * vy + this.n23 * vz + this.n24;\n    v.z = this.n31 * vx + this.n32 * vy + this.n33 * vz + this.n34;\n  }\n\n  multiply(a, b) {\n    this.n11 = a.n11 * b.n11 + a.n12 * b.n21 + a.n13 * b.n31;\n    this.n12 = a.n11 * b.n12 + a.n12 * b.n22 + a.n13 * b.n32;\n    this.n13 = a.n11 * b.n13 + a.n12 * b.n23 + a.n13 * b.n33;\n    this.n14 = a.n11 * b.n14 + a.n12 * b.n24 + a.n13 * b.n34 + a.n14;\n    this.n21 = a.n21 * b.n11 + a.n22 * b.n21 + a.n23 * b.n31;\n    this.n22 = a.n21 * b.n12 + a.n22 * b.n22 + a.n23 * b.n32;\n    this.n23 = a.n21 * b.n13 + a.n22 * b.n23 + a.n23 * b.n33;\n    this.n24 = a.n21 * b.n14 + a.n22 * b.n24 + a.n23 * b.n34 + a.n24;\n    this.n31 = a.n31 * b.n11 + a.n32 * b.n21 + a.n33 * b.n31;\n    this.n32 = a.n31 * b.n12 + a.n32 * b.n22 + a.n33 * b.n32;\n    this.n33 = a.n31 * b.n13 + a.n32 * b.n23 + a.n33 * b.n33;\n    this.n34 = a.n31 * b.n14 + a.n32 * b.n24 + a.n33 * b.n34 + a.n34;\n  }\n\n  multiplySelf(m) {\n    let n11 = this.n11,\n        n12 = this.n12,\n        n13 = this.n13,\n        n14 = this.n14;\n    let n21 = this.n21,\n        n22 = this.n22,\n        n23 = this.n23,\n        n24 = this.n24;\n    let n31 = this.n31,\n        n32 = this.n32,\n        n33 = this.n33,\n        n34 = this.n34;\n    this.n11 = n11 * m.n11 + n12 * m.n21 + n13 * m.n31;\n    this.n12 = n11 * m.n12 + n12 * m.n22 + n13 * m.n32;\n    this.n13 = n11 * m.n13 + n12 * m.n23 + n13 * m.n33;\n    this.n14 = n11 * m.n14 + n12 * m.n24 + n13 * m.n34 + n14;\n    this.n21 = n21 * m.n11 + n22 * m.n21 + n23 * m.n31;\n    this.n22 = n21 * m.n12 + n22 * m.n22 + n23 * m.n32;\n    this.n23 = n21 * m.n13 + n22 * m.n23 + n23 * m.n33;\n    this.n24 = n21 * m.n14 + n22 * m.n24 + n23 * m.n34 + n24;\n    this.n31 = n31 * m.n11 + n32 * m.n21 + n33 * m.n31;\n    this.n32 = n31 * m.n12 + n32 * m.n22 + n33 * m.n32;\n    this.n33 = n31 * m.n13 + n32 * m.n23 + n33 * m.n33;\n    this.n34 = n31 * m.n14 + n32 * m.n24 + n33 * m.n34 + n34;\n  }\n\n  clone() {\n    let m = new Matrix4();\n    m.n11 = this.n11;\n    m.n12 = this.n12;\n    m.n13 = this.n13;\n    m.n14 = this.n14;\n    m.n21 = this.n21;\n    m.n22 = this.n22;\n    m.n23 = this.n23;\n    m.n24 = this.n24;\n    m.n31 = this.n31;\n    m.n32 = this.n32;\n    m.n33 = this.n33;\n    m.n34 = this.n34;\n    return m;\n  }\n\n  toString() {\n    return \"| \" + this.n11 + \" \" + this.n12 + \" \" + this.n13 + \" \" + this.n14 + \" |\\n\" + \"| \" + this.n21 + \" \" + this.n22 + \" \" + this.n23 + \" \" + this.n24 + \" |\\n\" + \"| \" + this.n31 + \" \" + this.n32 + \" \" + this.n33 + \" \" + this.n34 + \" |\";\n  }\n\n}\n\n//# sourceURL=webpack:///./src/core/Matrix4.js?");

/***/ }),

/***/ "./src/core/Vector2.js":
/*!*****************************!*\
  !*** ./src/core/Vector2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector2; });\nclass Vector2 {\n  constructor(x, y) {\n    this.x = x ? x : 0;\n    this.y = y ? y : 0;\n  }\n\n  static add(a, b) {\n    return new Vector2(a.x + b.x, a.y + b.y);\n  }\n\n  static sub(a, b) {\n    return new Vector2(a.x - b.x, a.y - b.y);\n  }\n\n  static multiply(a, s) {\n    return new Vector2(a.x * s, a.y * s);\n  }\n\n  copy(v) {\n    this.x = v.x;\n    this.y = v.y;\n  }\n\n  addSelf(v) {\n    this.x += v.x;\n    this.y += v.y;\n  }\n\n  add(v1, v2) {\n    this.x = v1.x + v2.x;\n    this.y = v1.y + v2.y;\n  }\n\n  subSelf(v) {\n    this.x -= v.x;\n    this.y -= v.y;\n  }\n\n  sub(v1, v2) {\n    this.x = v1.x - v2.x;\n    this.y = v1.y - v2.y;\n  }\n\n  multiply(s) {\n    this.x *= s;\n    this.y *= s;\n  }\n\n  unit() {\n    this.multiply(1 / this.length());\n  }\n\n  expand(v1, v2) {\n    // 暂时有问题\n    this.unit(this.sub(v1, v2));\n    v2.addSelf(this);\n  }\n\n  length() {\n    return Math.sqrt(this.x * this.x + this.y * this.y);\n  }\n\n  lengthSq() {\n    return this.x * this.x + this.y * this.y;\n  }\n\n  clone() {\n    return new Vector2(this.x, this.y);\n  }\n\n  toString() {\n    return \"Vector2 (\" + this.x + \", \" + this.y + \")\";\n  }\n\n}\n\n//# sourceURL=webpack:///./src/core/Vector2.js?");

/***/ }),

/***/ "./src/core/Vector3.js":
/*!*****************************!*\
  !*** ./src/core/Vector3.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector3; });\nclass Vector3 {\n  constructor(x, y, z) {\n    this.x = x ? x : 0;\n    this.y = y ? y : 0;\n    this.z = z ? z : 0;\n    this.dx = null;\n    this.dy = null;\n    this.dz = null;\n    this.tx = null;\n    this.ty = null;\n    this.tz = null;\n    this.ool = null;\n  }\n\n  static add(a, b) {\n    return new Vector3(a.x + b.x, a.y + b.y, a.z + b.z);\n  }\n\n  static sub(a, b) {\n    return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);\n  }\n\n  static multiply(a, s) {\n    return new Vector3(a.x * s, a.y * s, a.z * s);\n  }\n\n  static cross(a, b) {\n    return new Vector3(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);\n  }\n\n  static dot(a, b) {\n    return a.x * b.x + a.y * b.y + a.z * b.z;\n  }\n\n  copy(v) {\n    this.x = v.x;\n    this.y = v.y;\n    this.z = v.z;\n  }\n\n  addSelf(v) {\n    this.x += v.x;\n    this.y += v.y;\n    this.z += v.z;\n  }\n\n  add(v1, v2) {\n    this.x = v1.x + v2.x;\n    this.y = v1.y + v2.y;\n    this.z = v1.z + v2.z;\n  }\n\n  subSelf(v) {\n    this.x -= v.x;\n    this.y -= v.y;\n    this.z -= v.z;\n  }\n\n  sub(v1, v2) {\n    this.x = v1.x - v2.x;\n    this.y = v1.y - v2.y;\n    this.z = v1.z - v2.z;\n  }\n\n  cross(v) {\n    this.tx = this.x;\n    this.ty = this.y;\n    this.tz = this.z;\n    this.x = this.ty * v.z - this.tz * v.y;\n    this.y = this.tz * v.x - this.tx * v.z;\n    this.z = this.tx * v.y - this.ty * v.x;\n  }\n\n  multiply(s) {\n    this.x *= s;\n    this.y *= s;\n    this.z *= s;\n  }\n\n  distanceTo(v) {\n    this.dx = this.x - v.x;\n    this.dy = this.y - v.y;\n    this.dz = this.z - v.z;\n    return Math.sqrt(this.dx * this.dx + this.dy * this.dy + this.dz * this.dz);\n  }\n\n  distanceToSquared(v) {\n    this.dx = this.x - v.x;\n    this.dy = this.y - v.y;\n    this.dz = this.z - v.z;\n    return this.dx * this.dx + this.dy * this.dy + this.dz * this.dz;\n  }\n\n  length() {\n    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);\n  }\n\n  lengthSq() {\n    return this.x * this.x + this.y * this.y + this.z * this.z;\n  }\n\n  negate() {\n    this.x = -this.x;\n    this.y = -this.y;\n    this.z = -this.z;\n  }\n\n  normalize() {\n    if (this.length() > 0) {\n      this.ool = 1.0 / this.length();\n    } else {\n      this.ool = 0;\n    }\n\n    this.x *= this.ool;\n    this.y *= this.ool;\n    this.z *= this.ool;\n    return this;\n  }\n\n  dot(v) {\n    return this.x * v.x + this.y * v.y + this.z * v.z;\n  }\n\n  clone() {\n    return new Vector3(this.x, this.y, this.z);\n  }\n\n  toString() {\n    return \"Vector3 (\" + this.x + \", \" + this.y + \", \" + this.z + \")\";\n  }\n\n}\n\n//# sourceURL=webpack:///./src/core/Vector3.js?");

/***/ }),

/***/ "./src/core/Vertex.js":
/*!****************************!*\
  !*** ./src/core/Vertex.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vertex; });\n/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector3 */ \"./src/core/Vector3.js\");\n\nclass Vertex extends _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, z) {\n    super(x, y, z);\n    this.u = null;\n    this.v = null;\n    this.screen = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.normal = null;\n    this.visible = null;\n  }\n\n  toString() {\n    return 'Vertex ( ' + this.x + ', ' + this.y + ', ' + this.z + ' )';\n  }\n\n}\n\n//# sourceURL=webpack:///./src/core/Vertex.js?");

/***/ }),

/***/ "./src/materials/ColorMaterial.js":
/*!****************************************!*\
  !*** ./src/materials/ColorMaterial.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ColorMaterial; });\n/* harmony import */ var _core_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Color */ \"./src/core/Color.js\");\n\nclass ColorMaterial {\n  constructor(hex, opacity) {\n    this.color = new _core_Color__WEBPACK_IMPORTED_MODULE_0__[\"default\"]((opacity ? opacity * 0xff << 24 : 0xff000000) | hex);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/materials/ColorMaterial.js?");

/***/ }),

/***/ "./src/materials/FaceColorMaterial.js":
/*!********************************************!*\
  !*** ./src/materials/FaceColorMaterial.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FaceColorMaterial; });\nclass FaceColorMaterial {\n  constructor() {}\n\n}\n\n//# sourceURL=webpack:///./src/materials/FaceColorMaterial.js?");

/***/ }),

/***/ "./src/objects/Mesh.js":
/*!*****************************!*\
  !*** ./src/objects/Mesh.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mesh; });\n/* harmony import */ var _Object3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object3D */ \"./src/objects/Object3D.js\");\n\nclass Mesh extends _Object3D__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(geometry, material) {\n    super();\n    this.geometry = geometry;\n    this.material = material;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/objects/Mesh.js?");

/***/ }),

/***/ "./src/objects/Object3D.js":
/*!*********************************!*\
  !*** ./src/objects/Object3D.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Object3D; });\n/* harmony import */ var _core_Vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Vector3 */ \"./src/core/Vector3.js\");\n/* harmony import */ var _core_Matrix4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Matrix4 */ \"./src/core/Matrix4.js\");\n\n\nclass Object3D {\n  constructor() {\n    this.position = new _core_Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0);\n    this.rotation = new _core_Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0);\n    this.scale = new _core_Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, 1, 1);\n    this.matrix = new _core_Matrix4__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); // 模型矩阵\n\n    this.screen = new _core_Vector3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0);\n  }\n\n  updateMatrix() {\n    this.matrix.identity();\n    this.matrix.multiplySelf(_core_Matrix4__WEBPACK_IMPORTED_MODULE_1__[\"default\"].translationMatrix(this.position.x, this.position.y, this.position.z)); // this.matrix.multiplySelf(\n    //   Matrix4.rotationMatrix(this.rotation.x, this.rotation.y, this.rotation.z)\n    // );\n\n    this.matrix.multiplySelf(_core_Matrix4__WEBPACK_IMPORTED_MODULE_1__[\"default\"].rotationXMatrix(this.rotation.x));\n    this.matrix.multiplySelf(_core_Matrix4__WEBPACK_IMPORTED_MODULE_1__[\"default\"].rotationYMatrix(this.rotation.y));\n    this.matrix.multiplySelf(_core_Matrix4__WEBPACK_IMPORTED_MODULE_1__[\"default\"].rotationZMatrix(this.rotation.z));\n    this.matrix.multiplySelf(_core_Matrix4__WEBPACK_IMPORTED_MODULE_1__[\"default\"].scaleMatrix(this.scale.x, this.scale.y, this.scale.z));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/objects/Object3D.js?");

/***/ }),

/***/ "./src/objects/Particle.js":
/*!*********************************!*\
  !*** ./src/objects/Particle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Particle; });\n/* harmony import */ var _Object3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object3D */ \"./src/objects/Object3D.js\");\n\nclass Particle extends _Object3D__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(material) {\n    super();\n    this.size = 1;\n    this.material = material;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/objects/Particle.js?");

/***/ }),

/***/ "./src/objects/primitives/Cube.js":
/*!****************************************!*\
  !*** ./src/objects/primitives/Cube.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cube; });\n/* harmony import */ var _core_Geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Geometry */ \"./src/core/Geometry.js\");\n/* harmony import */ var _core_Vertex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Vertex */ \"./src/core/Vertex.js\");\n/* harmony import */ var _core_Face4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Face4 */ \"./src/core/Face4.js\");\n\n\n\nclass Cube extends _core_Geometry__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(width, height, depth) {\n    super();\n    let widthHalf = width / 2;\n    let heightHalf = height / 2;\n    let depthHalf = depth / 2;\n    this.v(widthHalf, heightHalf, -depthHalf);\n    this.v(widthHalf, -heightHalf, -depthHalf);\n    this.v(-widthHalf, -heightHalf, -depthHalf);\n    this.v(-widthHalf, heightHalf, -depthHalf);\n    this.v(widthHalf, heightHalf, depthHalf);\n    this.v(widthHalf, -heightHalf, depthHalf);\n    this.v(-widthHalf, -heightHalf, depthHalf);\n    this.v(-widthHalf, heightHalf, depthHalf);\n    this.f4(0, 1, 2, 3);\n    this.f4(4, 7, 6, 5);\n    this.f4(0, 4, 5, 1);\n    this.f4(1, 5, 6, 2);\n    this.f4(2, 6, 7, 3);\n    this.f4(4, 0, 3, 7);\n  }\n\n  v(x, y, z) {\n    this.vertices.push(new _core_Vertex__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y, z));\n  }\n\n  f4(a, b, c, d) {\n    this.faces.push(new _core_Face4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.vertices[a], this.vertices[b], this.vertices[c], this.vertices[d]));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/objects/primitives/Cube.js?");

/***/ }),

/***/ "./src/objects/primitives/Plane.js":
/*!*****************************************!*\
  !*** ./src/objects/primitives/Plane.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Plane; });\n/* harmony import */ var _core_Geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Geometry */ \"./src/core/Geometry.js\");\n/* harmony import */ var _core_Vertex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Vertex */ \"./src/core/Vertex.js\");\n/* harmony import */ var _core_Face4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Face4 */ \"./src/core/Face4.js\");\n\n\n\nclass Plane extends _core_Geometry__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(width, height) {\n    super();\n    let widthHalf = width / 2;\n    let heightHalf = height / 2;\n    this.v(-widthHalf, heightHalf, 0);\n    this.v(widthHalf, heightHalf, 0);\n    this.v(widthHalf, -heightHalf, 0);\n    this.v(-widthHalf, -heightHalf, 0);\n    this.f4(0, 1, 2, 3);\n  }\n\n  v(x, y, z) {\n    this.vertices.push(new _core_Vertex__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y, z));\n  }\n\n  f4(a, b, c, d) {\n    this.faces.push(new _core_Face4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.vertices[a], this.vertices[b], this.vertices[c], this.vertices[d]));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/objects/primitives/Plane.js?");

/***/ }),

/***/ "./src/renderers/CanvasRenderer.js":
/*!*****************************************!*\
  !*** ./src/renderers/CanvasRenderer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CanvasRenderer; });\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderer */ \"./src/renderers/Renderer.js\");\n/* harmony import */ var _objects_Particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/Particle */ \"./src/objects/Particle.js\");\n/* harmony import */ var _core_Face3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Face3 */ \"./src/core/Face3.js\");\n/* harmony import */ var _core_Face4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Face4 */ \"./src/core/Face4.js\");\n/* harmony import */ var _materials_ColorMaterial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../materials/ColorMaterial */ \"./src/materials/ColorMaterial.js\");\n/* harmony import */ var _materials_FaceColorMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../materials/FaceColorMaterial */ \"./src/materials/FaceColorMaterial.js\");\n\n\n\n\n\n\nclass CanvasRenderer extends _Renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.context = null;\n    this.viewport = document.createElement(\"canvas\");\n    this.viewport.style.position = \"absolute\";\n    this.context = this.viewport.getContext(\"2d\");\n  }\n\n  setSize(width, height) {\n    super.setSize(width, height);\n    this.viewport.width = this.width;\n    this.viewport.height = this.height;\n    this.context.setTransform(1, 0, 0, 1, this.widthHalf, this.heightHalf);\n  }\n\n  render(scene, camera) {\n    super.render(scene, camera);\n    let element,\n        pi2 = Math.PI * 2;\n    this.context.clearRect(-this.widthHalf, -this.heightHalf, this.width, this.height);\n    this.renderList.map(element => {\n      if (element.material instanceof _materials_ColorMaterial__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) {\n        this.context.fillStyle = element.material.color.styleString;\n      } else if (element.material instanceof _materials_FaceColorMaterial__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) {\n        this.context.fillStyle = element.color.styleString;\n      }\n\n      if (element instanceof _core_Face3__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n        this.context.beginPath();\n        this.context.moveTo(element.a.screen.x, element.a.screen.y);\n        this.context.lineTo(element.b.screen.x, element.b.screen.y);\n        this.context.lineTo(element.c.screen.x, element.c.screen.y);\n        this.context.fill();\n        this.context.closePath();\n      } else if (element instanceof _core_Face4__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n        this.context.beginPath();\n        this.context.moveTo(element.a.screen.x, element.a.screen.y);\n        this.context.lineTo(element.b.screen.x, element.b.screen.y);\n        this.context.lineTo(element.c.screen.x, element.c.screen.y);\n        this.context.lineTo(element.d.screen.x, element.d.screen.y);\n        this.context.fill();\n        this.context.closePath();\n      } else if (element instanceof _objects_Particle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        this.context.beginPath();\n        this.context.arc(element.screen.x, element.screen.y, element.size * element.screen.z, 0, pi2, true);\n        this.context.fill();\n        this.context.closePath();\n      }\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/renderers/CanvasRenderer.js?");

/***/ }),

/***/ "./src/renderers/Renderer.js":
/*!***********************************!*\
  !*** ./src/renderers/Renderer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Renderer; });\n/* harmony import */ var _core_Matrix4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Matrix4 */ \"./src/core/Matrix4.js\");\n/* harmony import */ var _objects_Mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/Mesh */ \"./src/objects/Mesh.js\");\n/* harmony import */ var _objects_Particle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/Particle */ \"./src/objects/Particle.js\");\n/* harmony import */ var _core_Face3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Face3 */ \"./src/core/Face3.js\");\n/* harmony import */ var _core_Face4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Face4 */ \"./src/core/Face4.js\");\n/* harmony import */ var _core_Vertex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Vertex */ \"./src/core/Vertex.js\");\n\n\n\n\n\n\nclass Renderer {\n  constructor() {\n    this.matrix = new _core_Matrix4__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.viewport = null;\n    this.renderList = null;\n    this.face3Pool = new Array();\n    this.face4Pool = new Array();\n    this.width = null;\n    this.height = null;\n    this.widthHalf = null;\n    this.heightHalf = null;\n  }\n\n  setSize(width, height) {\n    this.width = width;\n    this.height = height;\n    this.widthHalf = this.width / 2;\n    this.heightHalf = this.height / 2;\n  }\n\n  sort(a, b) {\n    return a.screen.z - b.screen.z;\n  }\n\n  render(scene, camera) {\n    let vertex, face, object;\n    let face3count = 0,\n        face4count = 0;\n    let focuszoom = camera.focus * camera.zoom;\n    this.renderList = new Array();\n    scene.objects.map((object, i) => {\n      if (object instanceof _objects_Mesh__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        this.matrix.multiply(camera.matrix, object.matrix); // vertices\n\n        object.geometry.vertices.map((vertex, j) => {\n          vertex.screen.copy(vertex);\n          this.matrix.transform(vertex.screen);\n          vertex.screen.z = focuszoom / (camera.focus + vertex.screen.z);\n          vertex.visible = vertex.screen.z > 0;\n          vertex.screen.x *= vertex.screen.z;\n          vertex.screen.y *= vertex.screen.z;\n        });\n        object.geometry.faces.map(face => {\n          // TODO: use normals for culling\n          if (face instanceof _core_Face3__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n            if (face.a.visible && face.b.visible && face.c.visible && (object.doubleSided || (face.c.screen.x - face.a.screen.x) * (face.b.screen.y - face.a.screen.y) - (face.c.screen.y - face.a.screen.y) * (face.b.screen.x - face.a.screen.x) > 0)) {\n              face.screen.z = (face.a.scene.z + face.b.scene.z + face.c.scene.z) * 0.3;\n              if (this.face3Pool[face3count] == null) this.face3Pool[face3count] = new _core_Face3__WEBPACK_IMPORTED_MODULE_3__[\"default\"](new _core_Vertex__WEBPACK_IMPORTED_MODULE_5__[\"default\"](), new _core_Vertex__WEBPACK_IMPORTED_MODULE_5__[\"default\"](), new _core_Vertex__WEBPACK_IMPORTED_MODULE_5__[\"default\"]());\n              this.face3Pool[face3count].a.screen.copy(face.a.screen);\n              this.face3Pool[face3count].b.screen.copy(face.b.screen);\n              this.face3Pool[face3count].c.screen.copy(face.c.screen);\n              this.face3Pool[face3count].screen.z = face.screen.z;\n              this.face3Pool[face3count].color = face.color;\n              this.face3Pool[face3count].material = object.material;\n              this.renderList.push(this.face3Pool[face3count]);\n              face3count++;\n            }\n          } else if (face instanceof _core_Face4__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) {\n            if (face.a.visible && face.b.visible && face.c.visible && (object.doubleSided || (face.d.screen.x - face.a.screen.x) * (face.b.screen.y - face.a.screen.y) - (face.d.screen.y - face.a.screen.y) * (face.b.screen.x - face.a.screen.x) > 0 || (face.b.screen.x - face.c.screen.x) * (face.d.screen.y - face.c.screen.y) - (face.b.screen.y - face.c.screen.y) * (face.d.screen.x - face.c.screen.x) > 0)) {\n              face.screen.z = (face.a.screen.z + face.b.screen.z + face.c.screen.z + face.d.screen.z) * 0.25;\n              if (this.face4Pool[face4count] == null) this.face4Pool[face4count] = new _core_Face4__WEBPACK_IMPORTED_MODULE_4__[\"default\"](new _core_Vertex__WEBPACK_IMPORTED_MODULE_5__[\"default\"](), new _core_Vertex__WEBPACK_IMPORTED_MODULE_5__[\"default\"](), new _core_Vertex__WEBPACK_IMPORTED_MODULE_5__[\"default\"](), new _core_Vertex__WEBPACK_IMPORTED_MODULE_5__[\"default\"]());\n              this.face4Pool[face4count].a.screen.copy(face.a.screen);\n              this.face4Pool[face4count].b.screen.copy(face.b.screen);\n              this.face4Pool[face4count].c.screen.copy(face.c.screen);\n              this.face4Pool[face4count].d.screen.copy(face.d.screen);\n              this.face4Pool[face4count].screen.z = face.screen.z;\n              this.face4Pool[face4count].color = face.color;\n              this.face4Pool[face4count].material = object.material;\n              this.renderList.push(this.face4Pool[face4count]);\n              face4count++;\n            }\n          }\n        });\n      } else if (object instanceof _objects_Particle__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n        object.screen.copy(object.position);\n        camera.matrix.transform(object.screen);\n        object.screen.z = focuszoom / (camera.focus + object.screen.z);\n        if (object.screen.z < 0) // continue;\t\n          return;\n        object.screen.x *= object.screen.z;\n        object.screen.y *= object.screen.z;\n        this.renderList.push(object);\n      }\n    });\n    this.renderList.sort(this.sort);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/renderers/Renderer.js?");

/***/ }),

/***/ "./src/renderers/SvgRenderer.js":
/*!**************************************!*\
  !*** ./src/renderers/SvgRenderer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SVGRenderer; });\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderer */ \"./src/renderers/Renderer.js\");\n/* harmony import */ var _core_Face3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Face3 */ \"./src/core/Face3.js\");\n/* harmony import */ var _core_Face4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Face4 */ \"./src/core/Face4.js\");\n\n\n\nclass SVGRenderer extends _Renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.svgPathPool = null;\n    this.svgCirclePool = null;\n    this.viewport = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n    this.viewport.style.position = \"absolute\";\n    this.svgPathPool = new Array();\n    this.svgCirclePool = new Array();\n  }\n\n  setSize(width, height) {\n    this.viewport.setAttribute(\"viewBox\", -width / 2 + \" \" + -height / 2 + \" \" + width + \" \" + height);\n    this.viewport.setAttribute(\"width\", width);\n    this.viewport.setAttribute(\"height\", height);\n  }\n\n  render(scene, camera) {\n    super.render(scene, camera);\n\n    while (this.viewport.childNodes.length > 0) {\n      this.viewport.removeChild(this.viewport.childNodes[0]);\n    }\n\n    let pathCount = 0,\n        circleCount = 0,\n        svgNode;\n    this.renderList.map((element, j) => {\n      if (element instanceof _core_Face3__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        svgNode = this.getPathNode(pathCount++);\n        svgNode.setAttribute(\"d\", \"M \" + element.a.screen.x + \" \" + element.a.screen.y + \" L \" + element.b.screen.x + \" \" + element.b.screen.y + \" L \" + element.c.screen.x + \",\" + element.c.screen.y + \"z\");\n      } else if (element instanceof _core_Face4__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n        svgNode = this.getPathNode(pathCount++);\n        svgNode.setAttribute(\"d\", \"M \" + element.a.screen.x + \" \" + element.a.screen.y + \" L \" + element.b.screen.x + \" \" + element.b.screen.y + \" L \" + element.c.screen.x + \",\" + element.c.screen.y + \" L \" + element.d.screen.x + \",\" + element.d.screen.y + \"z\");\n      } else if (element instanceof Particle) {\n        svgNode = this.getCircleNode(circleCount++);\n        svgNode.setAttribute(\"cx\", element.screen.x);\n        svgNode.setAttribute(\"cy\", element.screen.y);\n        svgNode.setAttribute(\"r\", element.size * element.screen.z);\n      }\n\n      if (element.material instanceof ColorMaterial) {\n        svgNode.setAttribute(\"style\", \"fill: rgb(\" + element.material.color.r + \",\" + element.material.color.g + \",\" + element.material.color.b + \")\");\n      } else if (element.material instanceof FaceColorMaterial) {\n        svgNode.setAttribute(\"style\", \"fill: rgb(\" + element.color.r + \",\" + element.color.g + \",\" + element.color.b + \")\");\n      }\n\n      this.viewport.appendChild(svgNode);\n    });\n  }\n\n  getPathNode(id) {\n    if (this.svgPathPool[id] == null) {\n      this.svgPathPool[id] = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\n      return this.svgPathPool[id];\n    }\n\n    return this.svgPathPool[id];\n  }\n\n  getCircleNode(id) {\n    if (this.svgCirclePool[id] == null) {\n      this.svgCirclePool[id] = document.createElementNS(\"http://www.w3.org/2000/svg\", \"circle\");\n      this.svgCirclePool[id].setAttribute(\"fill\", \"red\");\n      return this.svgCirclePool[id];\n    }\n\n    return this.svgCirclePool[id];\n  }\n\n}\n\n//# sourceURL=webpack:///./src/renderers/SvgRenderer.js?");

/***/ }),

/***/ "./src/scenes/Scene.js":
/*!*****************************!*\
  !*** ./src/scenes/Scene.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\nclass Scene {\n  constructor() {\n    this.objects = new Array();\n  }\n\n  add(object) {\n    this.objects.push(object);\n  }\n\n  remove(object) {\n    for (let i = 0; i < this.objects.length; i++) {\n      const element = this.objects[i];\n\n      if (object == element) {\n        alert(\"scene-remove\");\n      }\n    }\n  }\n\n  toString() {\n    return \"Scene ( \" + this.objects + \" )\";\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scenes/Scene.js?");

/***/ })

/******/ });