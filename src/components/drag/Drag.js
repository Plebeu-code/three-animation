

import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Dragon({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./../../models/dragon/drag.gltf')
  const { actions } = useAnimations(animations, group)
  
  useEffect(() => {
    actions["Take 001"].play()
  })

  return (
    <group ref={group} {...props} dispose={null} position={[30.56, 1.2, 0.47]} scale={1}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="shimaoge_donghuaFBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['17_-_Defaultddg']} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['17_-_Defaultddg']} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials['17_-_Defaultddg']} skeleton={nodes.Object_11.skeleton} />
                  <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials['17_-_Default']} skeleton={nodes.Object_13.skeleton} />
                  <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials['17_-_Ddgdgefaultddg']} skeleton={nodes.Object_15.skeleton} />
                  <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials['17_-_Defaultddg']} skeleton={nodes.Object_17.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/drag.gltf')
