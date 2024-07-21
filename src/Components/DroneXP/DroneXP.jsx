import React, { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DroneModel } from './DroneModel'  // Adjusted import statement
import './DroneXP.css'

gsap.registerPlugin(ScrollTrigger)

export const DroneXP = () => {
  const droneRef = useRef()

  // useEffect(() => {
  //   if (droneRef.current) {
  //     gsap.to(droneRef.current.position, {
  //       x: 2,
  //       scrollTrigger: {
  //         trigger: '.about-section',
  //         start: 'top center',
  //         end: 'bottom center',
  //         scrub: true,
  //       },
  //     })

  //     gsap.to(droneRef.current.position, {
  //       y: -2,
  //       scrollTrigger: {
  //         trigger: '.cta-section',
  //         start: 'top center',
  //         end: 'bottom center',
  //         scrub: true,
  //       },
  //     })
  //   }
  // }, [])

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <Canvas>
        <ambientLight intensity={1} />
        <OrbitControls />
        <DroneModel ref={droneRef} />
      </Canvas>
    </div>
  )
}
