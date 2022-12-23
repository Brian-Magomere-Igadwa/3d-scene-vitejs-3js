import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);

document.body.appendChild(renderer.domElement);

console.log(scene);
console.log(camera);
console.log(renderer);

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(boxGeometry, material);
scene.add(mesh);

camera.position.z = 5;
renderer.render(scene, camera);
