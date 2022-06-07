import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Sword(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./../../models/sword/sword.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Take 001"].play();
  })

  return (
    <group ref={group} {...props} dispose={null} scale={0.2}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, -1.5]}>
          <group
            name="cb87240bfbb943eea0a4580a88a5dd66fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material_192}
                    skeleton={nodes.Object_7.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./../../models/sword/sword.gltf");