import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Overlay from "../../components/overlay";
import ScrollEffect from "../../components/scrollEffect";
import './05.css'

export default function Page05() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  return (
    <div className="page05">
      <Canvas
        shadows
        onCreated={(state) => state.events.connect(overlay.current)}
        //@ts-ignore
        raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <ScrollEffect scroll={scroll} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      {/*@ts-ignore*/}
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </div>
  )
}