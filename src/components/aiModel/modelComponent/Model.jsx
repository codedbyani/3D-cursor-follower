import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useEffect, useRef, useState } from "react";
import { MeshNormalMaterial } from "three";

export function Model({ coordinates }) {
  const [rotationX, setRotationX] = useState(null);
  const [rotationY, setRotationY] = useState(null);

  const mesh = useRef();
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "model/scene.gltf"
  );
  const material = new MeshNormalMaterial();
  useEffect(() => {
    gltf.scene.scale.set(2, 2, 2);
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.material = material;
      }
    });
  }, [gltf]);

  window.addEventListener("mousemove", (e) => {
    setRotationX((e.pageY - coordinates.y - 150) / 800);
    setRotationY((e.pageX - coordinates.x - 200) / 800);
  });

  return (
    <primitive
      ref={mesh}
      object={gltf.scene}
      rotation-y={rotationY}
      rotation-x={rotationX}
    />
  );
}

export default Model;
