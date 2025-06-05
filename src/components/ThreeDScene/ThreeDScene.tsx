import React, { useState, useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ItemModel from "components/ItemModel/ItemModel";
import style from "./ThreeDScene.module.sass";
import cn from "classnames";
import DefaultButton from "components/DefaultButton/DefaultButton";

const Controls = ({
  zoom,
  setZoom,
}: {
  zoom: number;
  setZoom: (v: number) => void;
}) => {
  const controlsRef = useRef<any>(null);
  const { camera } = useThree();

  useEffect(() => {
    const currentDistance = camera.position.length();
    if (Math.abs(currentDistance - zoom) > 0.05) {
      const direction = camera.position.clone().normalize();
      camera.position.copy(direction.multiplyScalar(zoom));
      camera.updateProjectionMatrix();
    }
  }, [zoom, camera]);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    const onChange = () => {
      const distance = camera.position.length();
      if (Math.abs(distance - zoom) > 0.05) {
        setZoom(parseFloat(distance.toFixed(2)));
      }
    };

    controls.addEventListener("change", onChange);
    return () => controls.removeEventListener("change", onChange);
  }, [camera, setZoom, zoom]);

  return (
    <OrbitControls
      ref={controlsRef}
      minDistance={2}
      maxDistance={10}
      enableZoom={true}
    />
  );
};

const ThreeDScene = ({
  model,
  download,
  modelName,
  scale,
}: {
  model: string;
  download: string;
  modelName: string;
  scale: number;
}) => {
  const [sliderValue, setSliderValue] = useState<number>(125);
  const [zoom, setZoom] = useState<number>(6);
  const [preset, setPreset] = useState<"sunset" | "city" | "forest">("sunset");
  const [materialMode, setMaterialMode] = useState<
    "shaded" | "wireframe" | "flat"
  >("shaded");
  const [ambientIntensity, setAmbientIntensity] = useState(0.3);
  const [directionalIntensity, setDirectionalIntensity] = useState(0.6);
  const cameraRef = useRef<any>(null);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  const handleZoomSliderChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setZoom(Number(event.target.value));
  };

  const handleViewChange = (view: "front" | "top" | "side") => {
    if (!cameraRef.current) return;

    const cam = cameraRef.current;
    switch (view) {
      case "front":
        cam.position.set(0, 0, zoom);
        break;
      case "top":
        cam.position.set(0, zoom, 0);
        break;
      case "side":
        cam.position.set(zoom, 0, 0);
        break;
    }
    cam.lookAt(0, 0, 0);
    cam.updateProjectionMatrix();
  };

  const handlePresetChange = (view: "sunset" | "city" | "forest") => {
    switch (view) {
      case "sunset":
        setPreset("sunset");
        break;
      case "city":
        setPreset("city");
        break;
      case "forest":
        setPreset("forest");
        break;
    }
  };

  const handleMaterialChange = (view: "shaded" | "wireframe" | "flat") => {
    switch (view) {
      case "shaded":
        setMaterialMode("shaded");
        break;
      case "wireframe":
        setMaterialMode("wireframe");
        break;
      case "flat":
        setMaterialMode("flat");
        break;
    }
  };

  const downloadModel = () => {
    const link = document.createElement("a");
    link.href = download;
    link.download = `${modelName}.glb`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={style.container}>
      <div className={style.options}>
        <div className={style.slider}>
          <div className={style.slider_text}>Background</div>
          <input
            className={style.slider_input}
            type="range"
            min="0"
            max="255"
            value={sliderValue}
            onChange={handleSliderChange}
          />
        </div>
        <div className={style.slider}>
          <div className={style.slider_text}>Zoom</div>
          <input
            className={style.slider_input}
            type="range"
            min="2"
            max="10"
            step="0.001"
            value={zoom}
            onChange={handleZoomSliderChange}
          />
        </div>
        <div className={style.slider}>
          <div className={style.slider_text}>Ambient Light</div>
          <input
            className={style.slider_input}
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={ambientIntensity}
            onChange={(e) => setAmbientIntensity(Number(e.target.value))}
          />
        </div>

        <div className={style.slider}>
          <div className={style.slider_text}>Directional Light</div>
          <input
            className={style.slider_input}
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={directionalIntensity}
            onChange={(e) => setDirectionalIntensity(Number(e.target.value))}
          />
        </div>
        <div className={style.view_presets}>
          <div className={style.view_presets_text}>View</div>
          <div className={style.view_presets_buttons}>
            <div
              className={style.view_presets_button}
              onClick={() => handleViewChange("front")}
            >
              Front
            </div>
            <div
              className={style.view_presets_button}
              onClick={() => handleViewChange("top")}
            >
              Top
            </div>
            <div
              className={style.view_presets_button}
              onClick={() => handleViewChange("side")}
            >
              Side
            </div>
          </div>
        </div>
        <div className={style.view_presets}>
          <div className={style.view_presets_text}>Preset</div>
          <div className={style.view_presets_buttons}>
            <div
              className={cn(
                style.view_presets_button,
                preset === "sunset" && style.current_button
              )}
              onClick={() => handlePresetChange("sunset")}
            >
              Sunset
            </div>
            <div
              className={cn(
                style.view_presets_button,
                preset === "city" && style.current_button
              )}
              onClick={() => handlePresetChange("city")}
            >
              City
            </div>
            <div
              className={cn(
                style.view_presets_button,
                preset === "forest" && style.current_button
              )}
              onClick={() => handlePresetChange("forest")}
            >
              Forest
            </div>
          </div>
        </div>
        <div className={style.view_presets}>
          <div className={style.view_presets_text}>Material</div>
          <div className={style.view_presets_buttons}>
            <div
              className={cn(
                style.view_presets_button,
                materialMode === "shaded" && style.current_button
              )}
              onClick={() => handleMaterialChange("shaded")}
            >
              Shaded
            </div>
            <div
              className={cn(
                style.view_presets_button,
                materialMode === "wireframe" && style.current_button
              )}
              onClick={() => handleMaterialChange("wireframe")}
            >
              Wireframe
            </div>
            <div
              className={cn(
                style.view_presets_button,
                materialMode === "flat" && style.current_button
              )}
              onClick={() => handleMaterialChange("flat")}
            >
              Flat
            </div>
          </div>
        </div>
        <DefaultButton onClick={downloadModel} text="Download Model" />
      </div>

      <div
        className={style.canvas}
        style={{
          backgroundColor: `rgb(${sliderValue}, ${sliderValue}, ${sliderValue})`,
        }}
      >
        <Canvas
          camera={{ position: [zoom, zoom, zoom], fov: 50 }}
          onCreated={({ camera }) => {
            cameraRef.current = camera;
          }}
        >
          <ambientLight intensity={ambientIntensity} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={directionalIntensity}
          />
          <Environment preset={preset} background={false} />

          <ItemModel model={model} scale={scale} materialMode={materialMode} />

          <Controls zoom={zoom} setZoom={setZoom} />
        </Canvas>
      </div>
    </div>
  );
};

export default ThreeDScene;
