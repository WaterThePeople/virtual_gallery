import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import {
  MeshStandardMaterial,
  MeshBasicMaterial,
  DoubleSide,
  Color,
  Material,
} from "three";

type MaterialMode = "shaded" | "wireframe" | "flat";

const ItemModel = ({
  model,
  scale = 1,
  materialMode = "shaded",
}: {
  model: string;
  scale: number;
  materialMode?: MaterialMode;
}) => {
  const { scene } = useGLTF(model);

  const processedScene = useMemo(() => {
    const cloned = scene.clone(true);

    cloned.traverse((child: any) => {
      if (child.isMesh) {
        const originalMaterial: Material = child.material;

        if (materialMode === "wireframe") {
          child.material = new MeshBasicMaterial({
            color: new Color("white"),
            wireframe: true,
            side: DoubleSide,
          });
        } else if (materialMode === "flat") {
          const flatMaterial = originalMaterial.clone() as MeshStandardMaterial;
          flatMaterial.flatShading = true;
          flatMaterial.needsUpdate = true;
          child.material = flatMaterial;
        } else {
          child.material = originalMaterial;
        }

        child.material.needsUpdate = true;
      }
    });

    return cloned;
  }, [scene, materialMode]);

  return <primitive object={processedScene} scale={scale} />;
};

export default ItemModel;
