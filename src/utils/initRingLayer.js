// Have tried to implement Threejs and GSAP but couldn't fully figure it out since I'm new to it.

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  10
);
camera.position.z = 1;
camera.rotation.z = 1;

const scene = new THREE.Scene();
const light = new THREE.AmbientLight(0xffffff, 2);
scene.add(light);
const loader = new GLTFLoader();
loader.load("/models/circle/scene.gltf", (gltf) => {
  let model = gltf.scene;
  model.scale.set(0.25, 0.25, 0.25);
  gsap.to(camera.position, {
    z: 1,
    duration: 2,
    ease: "back.out(1.7)",
  });
  gsap.to(camera.rotation, {
    z: 0,
    duration: 2,
  });
  gsap.to(model.rotation, {
    x: 1,
    duration: 1,
    delay: 1,
  });
  gsap.to(model.rotation, {
    y: Math.PI * 1.75,
    duration: 2,
    delay: 1,
  });
  gsap.to(model.scale, {
    delay: 1,
    duration: 1,
    x: 0.25,
    y: 0.25,
    z: 0.25,
  });
  scene.add(model);
});

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

function animation() {
  renderer.render(scene, camera);
}
