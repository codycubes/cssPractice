import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { DroneModel } from './DroneModel';
import { Leva, useControls } from 'leva';

gsap.registerPlugin(ScrollTrigger);




export const DroneXP = () => {
  const cameraRef = useRef();
  const tl = gsap.timeline();

  // // ScrollTrigger for animating the camera based on scrolling
  // useEffect(() => {
  //   if (cameraRef.current) {
  //     // GSAP ScrollTrigger to manipulate camera position based on scroll
  //     gsap.to(cameraRef.current.position, {
  //       x: 6, // Example value for camera X position
  //       scrollTrigger: {
  //         trigger: '.about-section', // Example section
  //         start: 'top center',
  //         end: 'bottom center',
  //         scrub: true,
  //       },
  //     });

  //     gsap.to(cameraRef.current.position, {
  //       y: -2, // Example value for camera Y position
  //       scrollTrigger: {
  //         trigger: '.cta-section', // Example section
  //         start: 'top center',
  //         end: 'bottom center',
  //         scrub: true,
  //       },
  //     });


  //   }
  // }, []);

  useLayoutEffect(() => {
    new ScrollTrigger({});
    // component About.tsx
    tl.to(cameraRef.position, {
      x: 5,
      y: 4.0,
      z: 2.8,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })



      // component - BuyNow.tsx
      .to(cameraRef.position, {
        x: 5,
        y: 3.8,
        z: 2.8,
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })


  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
      <Canvas>
        <ambientLight intensity={1} />
        <DroneModel />

        {/* Camera setup */}
        <PerspectiveCamera
          makeDefault
          fov={56}
          ref={cameraRef} // Attach the cameraRef to the PerspectiveCamera
        />

        {/* Camera controller for Leva updates */}
        <CameraController cameraRef={cameraRef} />

        <OrbitControls />
      </Canvas>
      <Leva />
    </div>
  );
};




const CameraController = ({ cameraRef }) => {
  // Leva controls for camera position, rotation, and zoom
  const { cameraX, cameraY, cameraZ, rotationX, rotationY, rotationZ, zoom } = useControls({
    cameraX: { value: 4, min: -10, max: 10, step: 0.1 },
    cameraY: { value: 0, min: -10, max: 10, step: 0.1 },
    cameraZ: { value: 5, min: -10, max: 10, step: 0.1 },
    rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
    rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
    rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
    zoom: { value: 0.85, min: 0.5, max: 2, step: 0.05 },
  });

  // Update camera properties with Leva values
  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(cameraX, cameraY, cameraZ);
      cameraRef.current.rotation.set(rotationX, rotationY, rotationZ);
      cameraRef.current.zoom = zoom;
      cameraRef.current.updateProjectionMatrix(); // Important to update after zoom change
    }
  });

  return null;
};