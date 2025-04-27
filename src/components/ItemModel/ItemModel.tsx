import { useGLTF } from "@react-three/drei";
const ItemModel = ({ modelName, scale = 1 }) => {
  const gltf = useGLTF(`/models/${modelName}.glb`);

  return <primitive object={gltf.scene} scale={scale} />;
};

export default ItemModel;
