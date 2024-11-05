import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './App.css';

function Box() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]} castShadow receiveShadow>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} castShadow />
      <Box />
      <mesh receiveShadow position={[0, -3, 0]}>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.5} />
      </mesh>
    </Canvas>
  );
}

export default App;