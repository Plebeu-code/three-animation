import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Lofi(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./../../models/lofi/lafi2.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["mixamo.com"].play();
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}  scale={0.1} position={[0.5, 0.64, -0.2]}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={133.75}
        >
          <group
            name="Bellydancingfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="dance2">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.ModelEarrings_Material004mat}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_27"
                    geometry={nodes.Object_27.geometry}
                    material={materials.ModelEyelashes_Material020mat}
                    skeleton={nodes.Object_27.skeleton}
                  />
                  <skinnedMesh
                    name="Object_30"
                    geometry={nodes.Object_30.geometry}
                    material={materials.ModelHair1_Material022mat}
                    skeleton={nodes.Object_30.skeleton}
                  />
                  <skinnedMesh
                    name="Object_32"
                    geometry={nodes.Object_32.geometry}
                    material={materials.ModelHair2_Material023mat}
                    skeleton={nodes.Object_32.skeleton}
                  />
                  <skinnedMesh
                    name="Object_36"
                    geometry={nodes.Object_36.geometry}
                    material={materials.ModelEyesCornea1_Material025mat}
                    skeleton={nodes.Object_36.skeleton}
                  />
                  <skinnedMesh
                    name="Object_38"
                    geometry={nodes.Object_38.geometry}
                    material={materials.ModelEyesCornea2_Material026mat}
                    skeleton={nodes.Object_38.skeleton}
                  />
                  <skinnedMesh
                    name="Object_29"
                    geometry={nodes.Object_29.geometry}
                    material={materials.ModelEyes_Material021mat}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials.ModelUndies_Material012mat}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <skinnedMesh
                    name="Object_18"
                    geometry={nodes.Object_18.geometry}
                    material={materials.ModelBodyFeets_Material013mat}
                    skeleton={nodes.Object_18.skeleton}
                  />
                  <skinnedMesh
                    name="Object_20"
                    geometry={nodes.Object_20.geometry}
                    material={materials.ModelBodyArms_Material014mat}
                    skeleton={nodes.Object_20.skeleton}
                  />
                  <skinnedMesh
                    name="Object_22"
                    geometry={nodes.Object_22.geometry}
                    material={materials.ModelBodyLegs_Material015mat}
                    skeleton={nodes.Object_22.skeleton}
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials.ModelBody_Material019mat}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials.ModelTopUnder_Material017mat}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.ModelHead_Material001mat}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.ModelBoots_Material003mat}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_34"
                    geometry={nodes.Object_34.geometry}
                    material={materials.ModelMaterials_Material024mat}
                    skeleton={nodes.Object_34.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.ModelGloves2_Material005mat}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.Modelloves1_Material006mat}
                    skeleton={nodes.Object_15.skeleton}
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

useGLTF.preload("/lafi2.glb");