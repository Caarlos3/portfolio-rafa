'use client';

import { Text } from "@react-three/drei";

import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { isMobile, isTablet } from "react-device-detect";
import * as THREE from "three";
import CloudContainer from "../models/Cloud";
import StarsContainer from "../models/Stars";
import WindowModel from "../models/WindowModel";
import TextWindow from "./TextWindow";

const Hero = () => {
  const titleRef = useRef<THREE.Mesh>(null);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100 && titleRef.current) {
      gsap.fromTo(titleRef.current.position, {
        y: -10,
        duration: 1,
        // delay: 1.5,
      }, {
        y: 0,
        duration: 3
      });
    }
  }, [progress]);

  const fontProps = {
    font: "./soria-font.ttf",
    fontSize: isMobile ? 0.6 : 1.2,
    maxWidth: isMobile ? 3 : 10,
    textAlign: 'center' as const,
  };

  return (
    <>
      <Text position={[0, isMobile ? 3 : 2, -10]} {...fontProps} ref={titleRef}>Hi, I am Rafael Ortiz Larios.</Text>
      <StarsContainer />
      <CloudContainer />
      <group position={[0, isMobile ? -23 : -25, 5.69]} scale={isMobile ? 0.8 : isTablet ? 0.9 : 1}>
        <pointLight castShadow position={[1, 1, -2.5]} intensity={60} distance={10} />
        <WindowModel receiveShadow />
        <TextWindow />
      </group>
    </>
  );
};

export default Hero;
