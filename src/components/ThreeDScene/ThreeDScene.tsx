import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ItemModel from "components/ItemModel/ItemModel";
import style from "./ThreeDScene.module.sass";

const ThreeDScene = () => {
  return (
    <div className={style.container}>
      <Canvas
        camera={{ position: [3, 3, 3], fov: 50 }}
        gl={{ antialias: true, toneMappingExposure: 1 }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <Environment preset="sunset" background={false} />

        <ItemModel modelName="bird" scale={10} />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeDScene;
