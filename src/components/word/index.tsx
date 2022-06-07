
import { Physics } from "@react-three/cannon";
import { PointerLockControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "../box/box";
import Dragon from "../drag/Drag";
import { Ground } from "../ground";
import { Player } from "../player";
import Village from "../village";

export default function World() {
  return (
      <Canvas shadows gl={{ alpha: false }} camera={{ fov: 45 }}>
        <Sky sunPosition={[100, 130, 100]} />
        <ambientLight intensity={0.1} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        <Physics gravity={[0, -30, 0]}>
          <Ground />
          <Box />
          <Player />
          <Dragon />
          <Village />
        </Physics>
        <PointerLockControls />
      </Canvas>
  );
}
