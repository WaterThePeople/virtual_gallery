import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "components/TestCube/TestCube";
import TestModel from "components/TestModel/TestModel";
import style from "./ThreeDScene.module.sass";

const ThreeDScene = () => {
  return (
    <div className={style.container}>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        {/* <Cube /> */}
        <TestModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeDScene;
