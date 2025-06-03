import React from "react";
import { PerspectiveCamera } from "@react-three/drei";
import Model from "./modelComponent/Model";

export function AiModel({ coordinates }) {
  return (
    <>
      <PerspectiveCamera makeDefault fov={50} position={[1, 0, 5]} />
      <color args={[256, 0, 0]} />

      <Model coordinates={coordinates} />
    </>
  );
}
