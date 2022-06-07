import { useLoader } from "@react-three/fiber"
import { usePlane } from "@react-three/cannon"
import { TextureLoader } from "three/src/loaders/TextureLoader";
import grass from "./grounded.png"

export const Ground = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  const texture = useLoader(TextureLoader, grass)
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial map={texture} attach="material"  map-repeat={[240, 240]} />
    </mesh>
  )
}
