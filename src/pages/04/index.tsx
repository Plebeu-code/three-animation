import { OrbitControls, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Space from "../../components/superNew";
import "./page04.css";

export default function Page04() {
  return (
    <div className="Page04">
      <Canvas  camera={{ position: [0, 0, 3] }}>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls  enableZoom={true}/>
          <group position-y={-0.75} dispose={null}>
            <gridHelper />
            <arrowHelper />
            <Space />
            <boxHelper/>
            <axesHelper/>
          </group>
      </Canvas>
    </div>
  );
}
