import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Naruto({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/naruto.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={2}>
      <group rotation={[-Math.PI / 2, 0, 0]}  >
        <mesh geometry={nodes.Object_2.geometry} material={materials['nr2_eye.png']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['nr2_tex01.png']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['nr2_tex02.png']} />
      </group>
    </group>
  )
}

useGLTF.preload('/naruto.gltf')