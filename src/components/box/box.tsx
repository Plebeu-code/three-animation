import React from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texturebadaz from "../../images/map.jpg";

export default function Box(){
  // const colorMap = useLoader(TextureLoader, texturebadaz);
  
  return (
    <mesh rotation={[90, 0, 10]} scale={0.4} position={[0, 2, 0]}> 
      <boxBufferGeometry attach="geometry" args={[4, 4, 4]} />
      {/* <meshStandardMaterial attach="material" map={colorMap} /> */}
      <meshNormalMaterial attach="material"  />
    </mesh>
  )
}