import React, { useRef } from 'react';  // Import useRef
import { Canvas, useFrame } from '@react-three/fiber'; 
import { OrbitControls, Sparkles } from '@react-three/drei';

const RotatingCube = () => {
  const meshRef = useRef();  // Use ref to manipulate the mesh

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;  // Rotate on X axis
      meshRef.current.rotation.y += 0.01;  // Rotate on Y axis
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} /> 
      <meshLambertMaterial color="#468585" emissive="#468585" />
      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="yellow"/>
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{
        height: '100vh', 
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight intensity={1} position={[1, 1, 1]} color={0x9CDBA6} />
      <color attach="background" args={['#F0F0F0']} />
      <RotatingCube />
      
    </Canvas>
  );
};

export default App;
