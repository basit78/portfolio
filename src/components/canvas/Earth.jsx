import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./astronaut/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <ambientLight intensity={0.1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        // color={"blue"}
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive object={earth.scene} scale={1.4} position={[0, -2.4, -0.5]} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      // frameloop="demand"
      // dpr={[1, 2]}
      // gl={{ preserveDrawingBuffer: true }}
      // camera={{
      //   fov: 45,
      //   near: 0.1,
      //   far: 200,
      //   position: [-4, 3, 6],
      // }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
