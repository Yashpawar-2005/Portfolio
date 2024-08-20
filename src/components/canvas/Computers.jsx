import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload, Text } from '@react-three/drei';
import * as THREE from 'three';

const Computers = ({ screenSize }) => {
  const { scene: modelScene } = useGLTF('/desktop_pc/scene.gltf');
  const { scene: moScene } = useGLTF('/backk/scene.gltf');
  const { scene: mo1Scene } = useGLTF('/o/scene.gltf');
  const { scene: mo2Scene } = useGLTF('/j/scene.gltf');

  

  return (
    <group>
      <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
    <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
        <primitive
          object={modelScene}
          scale={
            screenSize === 'small'
              ? 0.5
              : screenSize === 'medium'
              ? 0.7
              : 1
          }
          position={
            screenSize === 'small'
              ? [0, -3, -2.2]
              : screenSize === 'medium'
              ? [0, -3.15, -1.7]
              : [0, -3.25, -1.5]
          }
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
      <group>
        <mesh
          rotation={[0, 1.3, 0]}
          position={[-2.1, 1.1, 3.8]}
          scale={[0.0018, 0.0018, 0.0018]}
          onClick={(event) => {
            event.stopPropagation();
            // Call applyTexture here if needed
            console.log("mo clicked");
          }}
        >
          <primitive object={moScene} />
          <Text
            position={[0, -100, 0]}
            fontSize={70}
            color="black"
            anchorX='center'
          >
            Project photo
          </Text>
        </mesh>
        
        <mesh
          rotation={[0, 1.3, 0]}
          position={[-2.1, 0.5, 3.8]}
          scale={[0.0018, 0.0018, 0.0018]}
          onClick={(event) => {
            event.stopPropagation();
           
            console.log("mo1 clicked");
          }}
        >
          <primitive object={mo1Scene} />
          <Text position={[0, -100, 0]} fontSize={80} color="black" anchorX='center'>
            About me
          </Text>
        </mesh>
        
        <mesh
          rotation={[0, 1.3, 0]}
          position={[-2.1, 0, 3.8]}
          scale={[0.0018, 0.0018, 0.0018]}
          onClick={(event) => {
            event.stopPropagation();
            // Call applyTexture here if needed
            console.log("mo2 clicked");
          }}
        >
          <primitive object={mo2Scene} />
          <Text position={[0, -100, 0]} fontSize={80} color="black" anchorX='center'>
            Contact Me
          </Text>
        </mesh>
      </group>
      <mesh position={[0, -3.5, -1.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'blue'} />
      </mesh>
    </group>
  );
};

const ComputersCanvas = () => {
  const [screenSize, setScreenSize] = useState('large');

  useEffect(() => {
    const mediaQuery400 = window.matchMedia('(max-width: 400px)');
    const mediaQuery500 = window.matchMedia('(max-width: 500px)');

    const handleMediaQueryChange = () => {
      if (mediaQuery400.matches) {
        setScreenSize('small');
      } else if (mediaQuery500.matches) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };

    handleMediaQueryChange();

    mediaQuery400.addEventListener('change', handleMediaQueryChange);
    mediaQuery500.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery400.removeEventListener('change', handleMediaQueryChange);
      mediaQuery500.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, -10, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <Suspense fallback={null}>
        <Computers isMobile={screenSize} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;







// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor='black' />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };