"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";


function Model() {

  const { scene } = useGLTF("/models/nexIOT.glb");

  const modelRef = useRef<THREE.Group>(null);


  useFrame((state) => {

    if (modelRef.current) {

      // floating animation
      modelRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 1.5) * 0.12;


      // smooth rotation
      modelRef.current.rotation.y += 0.004;

    }

  });



  return (

    <primitive
      ref={modelRef}
      object={scene}
      scale={0.7}
      position={[0, -0.8, 0]}
    />

  );

}



export default function ModelViewer() {


return (

<Canvas

camera={{
  position:[0,0,3.5],
  fov:35
}}

>



{/* Lighting */}

<ambientLight intensity={2}/>


<directionalLight

position={[5,5,5]}

intensity={3}

/>



<pointLight

position={[0,2,3]}

intensity={2}

color="#FFD700"

/>



<Suspense fallback={null}>

<Model/>

</Suspense>



</Canvas>


);

}