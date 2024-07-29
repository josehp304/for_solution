import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // intialisation
    const canvas = document.querySelector(".c");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(80, 21 / 16, 0.1, 1000);
    //camera
    camera.position.set(0, 0, 4);
    camera.lookAt(0, 0, 0);

    //renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas,
      alpha: true,
    });
    renderer.setSize(1200, 800);

    //cube and sphere
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshStandardMaterial({ color: 0x44aa88 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, 12);
    // scene.add(cube);

    const geometry2 = new THREE.SphereGeometry(2, 20, 20);
    const material2 = new THREE.MeshStandardMaterial({ color: 0xe06666 });
    const sphere = new THREE.Mesh(geometry2, material2);
    sphere.position.set(0, 0, 10);
    // scene.add(sphere);

    //orbital control
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true; // Enable damping for smoother control
    controls.dampingFactor = 0.25;
    controls.target.set(0, 0, 0);
    controls.enableZoom = false;

    //light
    const directionalLighting = new THREE.DirectionalLight(0xffffff, 1);
    directionalLighting.position.set(0, 10, 15);
    directionalLighting.target.position.set(0, 0, 0);
    scene.add(directionalLighting);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    let startTime = null;
    let deltaa = null;

    // gltf file import
    const gltfloader = new GLTFLoader();
    const url = "jet/scene.gltf";
    const url2 = "eye2.glb";
    gltfloader.load(url, (gltf) => {
      const root = gltf.scene;
      root.position.set(0, 0, 0);
      // scene.add(root);
    });

    let model = null;
    gltfloader.load(url2, (gltf) => {
      model = gltf.scene;
      model.position.set(0, 0, 0);
      scene.add(model);
    });
    //axis helper
    const axisHelper = new THREE.AxesHelper(5);
    // scene.add(axisHelper);

    //animate and drawing

    const animate = (time) => {
      if (!startTime) {
        startTime = time;
      } else {
        deltaa = time - startTime;
        startTime = time;
        if (model) {
          model.rotation.y += deltaa * 0.0001;
        }
        cube.rotation.x += deltaa * 0.001;
        cube.rotation.y += deltaa * 0.001;
      }

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);
  return (
    <>
      <canvas className="c" ref={mountRef}></canvas>
    </>
  );
};
export default ThreeScene;
