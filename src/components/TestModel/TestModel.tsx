import { useGLTF } from "@react-three/drei";

const TestModel = () => {
  const gltf = useGLTF(
    "https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Models/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb"
  );

  return <primitive object={gltf.scene} scale={2} />;
};

export default TestModel;
