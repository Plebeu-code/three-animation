import { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

export default function Axie({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./../../models/axie/axie.gltf')
  return (
    <group ref={group} {...props} dispose={null} position={[0.5, 0.8, -1]}  scale={10}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 4.76, 1.94]} rotation={[Math.PI / 2, 0, 0]} scale={[6.25, 9.82, 8.33]}>
            <mesh geometry={nodes._pPlane1__aiStandardSurface3_0.geometry} material={materials.aiStandardSurface3} />
          </group>
          <group position={[-3.09, 3.4, 1.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.1, 0.05, 0.1]}>
            <mesh geometry={nodes._pSphere1__aiStandardSurface1_0.geometry} material={materials.aiStandardSurface1} />
          </group>
          <group position={[3.14, 3.4, 1.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.1, 0.05, 0.1]}>
            <mesh geometry={nodes._pSphere2__aiStandardSurface1_0.geometry} material={materials.aiStandardSurface1} />
          </group>
          <group position={[-2.39, 8.22, 1.97]} rotation={[Math.PI / 2, 0, 0]} scale={[0.77, 0.04, 0.77]}>
            <mesh geometry={nodes._pCylinder1_axie001_lowaiStandardSurface4_0.geometry} material={materials.axie001_lowaiStandardSurface4} />
          </group>
          <group position={[0, 8.22, 1.98]} rotation={[Math.PI / 2, 0, 0.09]} scale={[5.59, 1, 0.91]}>
            <mesh geometry={nodes._pPlane2__aiStandardSurface1_0.geometry} material={materials.aiStandardSurface1} />
          </group>
          <group position={[-2.38, 8.22, 2.02]} rotation={[Math.PI / 2, 0, 0]} scale={0.65}>
            <mesh geometry={nodes._pSphere3__aiStandardSurface2_0.geometry} material={materials.aiStandardSurface2} />
          </group>
          <group position={[0, 0.15, 2]} scale={[1, 1, 1.43]}>
            <mesh geometry={nodes._polySurface1_axie001_lowface_0.geometry} material={materials.axie001_lowface} />
          </group>
          <group position={[-2.4, 8.24, 2.08]} rotation={[Math.PI / 2, 0, 0]} scale={1.24}>
            <mesh geometry={nodes._moon1__moon_0.geometry} material={materials.moon} />
          </group>
          <group position={[-2.69, 1.93, 1.85]} rotation={[Math.PI / 2, 0, 0]} scale={[0.47, 0.11, 0.47]}>
            <mesh geometry={nodes._pCylinder2_axie001_lowface_0.geometry} material={materials.axie001_lowface} />
          </group>
          <group position={[0, 0.15, 1.91]}>
            <mesh geometry={nodes._polySurface6_axie001_lowface_0.geometry} material={materials.axie001_lowface} />
          </group>
          <group position={[-2.49, 6.67, 1.93]} rotation={[Math.PI / 2, 0, 0]} scale={0.76}>
            <mesh geometry={nodes._pDisc1_axie001_lowface_0.geometry} material={materials.axie001_lowface} />
          </group>
          <group position={[-2.49, 5.28, 1.93]} rotation={[Math.PI / 2, 0, 0]} scale={0.76}>
            <mesh geometry={nodes._pDisc2_axie001_lowface_0.geometry} material={materials.axie001_lowface} />
          </group>
          <group position={[-2.46, 5.31, 2.03]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[0.5, 0.71, 0.5]}>
            <mesh geometry={nodes._pDisc3_axie001_lowaiStandardSurface6_0.geometry} material={materials.axie001_lowaiStandardSurface6} />
          </group>
          <group position={[-2.4, -1.55, 1.91]} rotation={[0, 0, -0.64]}>
            <mesh geometry={nodes._polySurface9_axie001_lowaiStandardSurface7_0.geometry} material={materials.axie001_lowaiStandardSurface7} />
          </group>
          <group position={[-2.84, 6.48, 2.09]} scale={[1, 1, 0.02]}>
            <mesh geometry={nodes._typeMesh1__typeBlinn_0.geometry} material={materials.typeBlinn} />
          </group>
          <group position={[-2.67, 5.11, 2.07]} scale={[1, 1, 0.03]}>
            <mesh geometry={nodes._typeMesh2__typeBlinn1_0.geometry} material={materials.typeBlinn1} />
          </group>
          <group position={[0.32, 0.14, 0.43]} rotation={[0, -0.27, 0]}>
            <Float
              speed={2.5}
              rotationIntensity={0.1}
              floatIntensity={2.4}
              floatingRange={[0.2, 0, 0.1]}
            >
              <mesh geometry={nodes.axie001_lowaxie001_lowpolySurface3_axie001_lowaiStandardSurface3_0.geometry} material={materials.axie001_lowaiStandardSurface3} />
            </Float>
            <mesh geometry={nodes.axie001_lowaxie001_lowpolySurface3_axie001_lowaiStandardSurface2_0.geometry} material={materials.axie001_lowaiStandardSurface2} />
            <mesh geometry={nodes.axie001_lowaxie001_lowpolySurface3_axie001_lowaiStandardSurface2_0_1.geometry} material={materials.axie001_lowaiStandardSurface2} />
            <mesh geometry={nodes.axie001_lowaxie001_lowpolySurface3_axie001_lowaiStandardSurface2_0_2.geometry} material={materials.axie001_lowaiStandardSurface2} />
          </group>
          <group position={[0, 0.15, 2]} scale={[1, 1, 1.43]}>
            <mesh geometry={nodes._polySurface2_axie001_lowface_0.geometry} material={materials.axie001_lowface} />
          </group>
          <group position={[-0.93, 8.05, 2.28]} scale={[0.25, 0.25, 0.03]}>
            <mesh geometry={nodes.typeMesh1_aiStandardSurface1_0.geometry} material={materials.aiStandardSurface1_12} />
          </group>
          <group position={[-0.69, 3.91, 1.97]} rotation={[Math.PI / 2, -Math.PI / 4, 0]} scale={[0.51, 0.73, 0.73]}>
            <mesh geometry={nodes.pPlane2_aiStandardSurface2_0.geometry} material={materials.aiStandardSurface2_13} />
          </group>
          <group position={[-4.66, 3.91, 1.97]} rotation={[Math.PI / 2, Math.PI / 4, 0]} scale={[0.51, 0.73, 0.73]}>
            <mesh geometry={nodes.pPlane3_aiStandardSurface2_0.geometry} material={materials.aiStandardSurface2_13} />
          </group>
          <group position={[-1.02, 1.81, 1.79]} scale={[0.28, 0.28, 0.03]}>
            <mesh geometry={nodes.typeMesh2_aiStandardSurface1_0.geometry} material={materials.aiStandardSurface1_12} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/axie.gltf')
