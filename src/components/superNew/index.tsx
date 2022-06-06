
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Space(props) {
  const group = useRef();
  //@ts-ignore
  const { nodes, materials } = useGLTF("./../../models/space/space.gltf");
  console.log(materials);
  
  return (
    <group ref={group} {...props} dispose={null} position={[-1.5, -0.4, 2]} scale={2}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
          userData={{ name: "Sketchfab_model" }}
        >
          <group name="Geode" userData={{ name: "Geode" }}>
            <points
              name="Object_2"
              geometry={nodes.Object_2.geometry}
              material={nodes.Object_2.material}
              userData={{ name: "Object_2" }}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/space.gltf");