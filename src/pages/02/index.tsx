import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import Camera from "../../components/camera";
import Cactus from "../../components/cactuAnimation";
import Level from "../../components/level";
import Sudo from "../../components/sudo";
import Icon from "../../components/icon";
import Pyramid from "../../components/payramid";
import { Html } from "@react-three/drei";

import "./02.css";
import Naruto from "../../components/Naruto";
import Axie from "../../components/axie";
import ScrrenGamer from "../../components/screen";

export default function Page02() {
  return (
    <div className="container-bedroom">
      <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>
        <color attach="background" args={["#e0b7ff"]} />
        <ambientLight />
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, -Math.PI / 4, 0]}
          polar={[0, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <group  position-y={-0.75} dispose={null}>
            <Level />
            <Sudo />
            <Camera />
            <Cactus />
            <Icon />
            <Pyramid />
            <Naruto />
            <Axie />
          </group>
          <mesh >
            <Html
              className="content036"
              rotation={[0, 1.59, 0]}
              // rotation-x={[0]}
              // rotation-y={[1.59]}
              position={[-0.49, 0.1, 0.62]}
              transform
              occlude
              dispose={null}
            >
              <ScrrenGamer />
            </Html>
          </mesh>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
