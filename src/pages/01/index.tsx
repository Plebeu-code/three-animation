import styled from "styled-components";
import './../../index.css'
import HeroBackground from "./../../components/background";
import TextSection from "./../../components/textSection";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./../../components/box/box";
import Sphere from "./../../components/animationSphere";

export default function Page01() {
  return (
    <Wrapper className="App">
      <HeroBackground />
      <TextSection />
      <Canvas className="canvas">
        <OrbitControls  enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1}/>
        <Box />
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls  enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1}/>
        <Sphere/>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 600px;
  }

  narutao {
    height: 100vh;
  }
`;