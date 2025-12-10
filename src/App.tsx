import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { CameraControls, OrbitControls } from "@react-three/drei";
import ThreeElement from "./ThreeElement";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Canvas camera={{ fov: 75, far: 100, near: 1, position: [5, 5, 5] }}>
      <CameraControls />
      {/* <OrbitControls /> */}
      <gridHelper args={[10, 10]} />
      <axesHelper args={[10]} />
      <ThreeElement />
    </Canvas>
  );
}

export default App;
