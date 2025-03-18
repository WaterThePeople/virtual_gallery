import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useGLTF } from "@react-three/drei";

useGLTF.preload("https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Models/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb");

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
