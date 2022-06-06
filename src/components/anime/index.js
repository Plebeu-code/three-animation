import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Dance(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./../../models/dance/dance.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["mixamo.com"].play()
  },[actions])

  return (
    <group ref={group} {...props} dispose={null} position={[0.16, 0.14, 0.47]} scale={0.2}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.51}
        >
          <group
            name="6725bfc3aca94fdd8e39b435cc10dfb8fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material_32}
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

useGLTF.preload("./../../models/dance/dance.gltf");
