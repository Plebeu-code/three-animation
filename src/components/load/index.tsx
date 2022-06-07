import { Html, useProgress  } from "@react-three/drei"


export default function Loadeing() {
  const process = useProgress();
  console.log(process, 'process');
  
  //@ts-ignore
  return <Html center>{process}% loaded...</Html>
}