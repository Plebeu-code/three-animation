import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
    //@ts-ignore
    <Sphere visible={true} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        attach="material"
        color="#8352FD"
        distort={0.5}
        speed={4.5}
        roughness={1}
      />
    </Sphere>
  );
}
