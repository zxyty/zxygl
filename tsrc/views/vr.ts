import Camera from "../cameras/Camera";
import Scene from "../scenes/Scene";
import Mesh from "../objects/Mesh";
import Plane from "../objects/primitives/Plane";
import CanvasRenderer from "../renderers/CanvasRenderer";
import BitmapUVMappingMaterial from "../materials/BitmapUVMappingMaterial";
import ColorFillMaterial from "../materials/ColorFillMaterial";
import ColorStrokeMaterial from "../materials/ColorStrokeMaterial";

var SCREEN_WIDTH = window.innerWidth,
  SCREEN_HEIGHT = window.innerHeight;

var camera: Camera, scene: Scene, renderer;

var texture_placeholder, wireframe: ColorStrokeMaterial,
onPointerDownPointerX,
onPointerDownPointerY,
onPointerDownLon,
  onPointerDownLat,
  isUserInteracting = false,
  onMouseDownMouseX = 0,
  onMouseDownMouseY = 0,
  lon = 90,
  onMouseDownLon = 0,
  lat = 0,
  onMouseDownLat = 0,
  phi = 0,
  theta = 0;

init();

function init() {
  var container, mesh;

  container = document.getElementById("container");

  camera = new Camera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 0.0001, 1000);

  scene = new Scene();

  texture_placeholder = document.createElement('canvas');
  texture_placeholder.width = 128;
  texture_placeholder.height = 128;

  wireframe = new ColorStrokeMaterial(1, 0xffffff, 0);

  var context = texture_placeholder.getContext('2d');
  context.fillStyle = 'rgba(200, 200, 200, 1)';
  context.fillRect(0, 0, texture_placeholder.width, texture_placeholder.height);

  mesh = new Mesh(new Plane(1000, 1000, 5, 5), loadTexture('textures/skymap_front1024.jpg'));
  mesh.position.z = -500;
  mesh.overdraw = true;
  scene.add(mesh);

  mesh = new Mesh(new Plane(1000, 1000, 5, 5), loadTexture('textures/skymap_back1024.jpg'));
  mesh.position.z = 500;
  mesh.rotation.y = 180 * Math.PI / 180;
  mesh.overdraw = true;
  scene.add(mesh);

  mesh = new Mesh(new Plane(1000, 1000, 5, 5), loadTexture('textures/skymap_left1024.jpg'));
  mesh.position.x = -500;
  mesh.rotation.y = 90 * Math.PI / 180;
  mesh.overdraw = true;
  scene.add(mesh);

  mesh = new Mesh(new Plane(1000, 1000, 5, 5), loadTexture('textures/skymap_right1024.jpg'));
  mesh.position.x = 500;
  mesh.rotation.y = -90 * Math.PI / 180;
  mesh.overdraw = true;
  scene.add(mesh);

  mesh = new Mesh(new Plane(1000, 1000, 5, 5), loadTexture('textures/skymap_top1024.jpg'));
  mesh.position.y = 500;
  mesh.rotation.x = 90 * Math.PI / 180;
  mesh.overdraw = true;
  scene.add(mesh);

  mesh = new Mesh(new Plane(1000, 1000, 5, 5), loadTexture('textures/skymap_bottom1024.jpg'));
  mesh.position.y = -500;
  mesh.rotation.x = -90 * Math.PI / 180;
  mesh.overdraw = true;
  scene.add(mesh);

  renderer = new CanvasRenderer();
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

  container.appendChild(renderer.domElement);

  document.addEventListener("mousedown", onDocumentMouseDown, false);
  document.addEventListener("mousemove", onDocumentMouseMove, false);
  document.addEventListener("mouseup", onDocumentMouseUp, false);

  document.addEventListener("touchstart", onDocumentTouchStart, false);
  document.addEventListener("touchmove", onDocumentTouchMove, false);
}

function loadTexture(path: string) {
  var material = new BitmapUVMappingMaterial(texture_placeholder);

  var texture = new Image();

  texture.onload = function() {
    material.bitmap = this;
    render();
  };

  texture.src = path;

  // return [ material, new THREE.ColorStrokeMaterial(1, Math.random() * 0xffffff, 0.2) ];
  return [material, wireframe];
}

function onDocumentMouseDown(event) {
  event.preventDefault();

  isUserInteracting = true;

  wireframe.color.setRGBA(255,255,255,0.2);

  onPointerDownPointerX = event.clientX;
  onPointerDownPointerY = event.clientY;

  onPointerDownLon = lon;
  onPointerDownLat = lat;
}

function onDocumentMouseMove(event) {
  if (isUserInteracting) {
    lon = (onPointerDownPointerX - event.clientX) * 0.1 + onPointerDownLon;
    lat = (event.clientY - onPointerDownPointerY) * 0.1 + onPointerDownLat;

    render();
  }
}

function onDocumentMouseUp(event) {
  isUserInteracting = false;

  wireframe.color.setRGBA(255,255,255,0);

  render();

}

function onDocumentTouchStart(event) {
  if (event.touches.length == 1) {
    event.preventDefault();

    onPointerDownPointerX = event.touches[0].pageX;
    onPointerDownPointerY = event.touches[0].pageY;

    onPointerDownLon = lon;
    onPointerDownLat = lat;
  }
}

function onDocumentTouchMove(event) {
  if (event.touches.length == 1) {
    event.preventDefault();

    lon =
      (onPointerDownPointerX - event.touches[0].pageX) * 0.1 + onPointerDownLon;
    lat =
      (event.touches[0].pageY - onPointerDownPointerY) * 0.1 + onPointerDownLat;

    render();
  }
}

function render() {
  lat = Math.max(-85, Math.min(85, lat));
  phi = ((90 - lat) * Math.PI) / 180;
  theta = ((lon + 180) * Math.PI) / 180;

  camera.target.position.x = 500 * Math.sin(phi) * Math.cos(theta);
  camera.target.position.y = 500 * Math.cos(phi);
  camera.target.position.z = 500 * Math.sin(phi) * Math.sin(theta);

  renderer.render(scene, camera);
}

// setInterval(() => {
//     render();
//     camera.position.z -= 4;
// }, 100);

// alert(1);