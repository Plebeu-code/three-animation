import { PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Space from "../../components/superNew";
import "./page04.css";

export default function Page04() {
  return (
    <div className="Page04">
      <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 3] }}>
        <ambientLight />
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, -Math.PI / 4, 0]}
          polar={[0, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <group position-y={-0.75} dispose={null}>
            <gridHelper />
            <arrowHelper />
            <Space />
            <boxHelper/>
            <axesHelper/>
          </group>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
