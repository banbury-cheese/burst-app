import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import useDatGui from "../../Hooks/useDatGui";

import useStore from "../../Helpers/store";
import { vertexShader, fragmentShader } from "../../Helpers/shader";

// Default settings
const settings = {
  speed: 0.1,
  density: 1.5,
  strength: 0.2,
  frequency: 2.0,
  amplitude: 6.0,
  intensity: 10.0,
  wireframe: false,
  showGui: true,
  brighthness_R: 0.938,
  brighthness_G: 0.328,
  brighthness_B: 0.718,
  contrast_R: 0.659,
  contrast_G: 0.438,
  contrast_B: 0.328,
  oscillation_R: 0.388,
  oscillation_G: 0.388,
  oscillation_B: 0.296,
  phase_R: 2.538,
  phase_G: 2.478,
  phase_B: 0.168,
};

const Blob = () => {
  useStore.setState({ title: "Sphere" });

  /**
   * GUI controls
   */
  const { wireframe } = useDatGui(settings);

  const Icosahedron = (props) => {
    const mesh = useRef();

    const uniforms = {
      uTime: { value: 0 },
      uSpeed: { value: settings.speed },
      uNoiseDensity: { value: settings.density },
      uNoiseStrength: { value: settings.strength },
      uFrequency: { value: settings.frequency },
      uAmplitude: { value: settings.amplitude },
      uIntensity: { value: settings.intensity },
      uBrightness_r: { value: settings.brighthness_R },
      uBrightness_g: { value: settings.brighthness_G },
      uBrightness_b: { value: settings.brighthness_B },
      uContrast_r: { value: settings.contrast_R },
      uContrast_g: { value: settings.contrast_G },
      uContrast_b: { value: settings.contrast_B },
      uOscillation_r: { value: settings.oscillation_R },
      uOscillation_g: { value: settings.oscillation_G },
      uOscillation_b: { value: settings.oscillation_B },
      uPhase_r: { value: settings.phase_R },
      uPhase_g: { value: settings.phase_G },
      uPhase_b: { value: settings.phase_B },
    };

    useFrame(({ clock }) => {
      const current = mesh.current.material.uniforms;

      current.uTime.value = clock.getElapsedTime();
      current.uSpeed.value = settings.speed;
      current.uNoiseDensity.value = settings.density;
      current.uNoiseStrength.value = settings.strength;
      current.uFrequency.value = settings.frequency;
      current.uAmplitude.value = settings.amplitude;
      current.uIntensity.value = settings.intensity;
      current.uBrightness_r.value = settings.brighthness_R;
      current.uBrightness_g.value = settings.brighthness_G;
      current.uBrightness_b.value = settings.brighthness_B;
      current.uContrast_r.value = settings.contrast_R;
      current.uContrast_g.value = settings.contrast_G;
      current.uContrast_b.value = settings.contrast_B;
      current.uOscillation_r.value = settings.oscillation_R;
      current.uOscillation_g.value = settings.oscillation_G;
      current.uOscillation_b.value = settings.oscillation_B;
      current.uPhase_r.value = settings.phase_R;
      current.uPhase_g.value = settings.phase_G;
      current.uPhase_b.value = settings.phase_B;
    });

    return (
      <mesh ref={mesh} {...props}>
        <icosahedronBufferGeometry attach="geometry" args={[1, 54]} />
        <shaderMaterial
          attach="material"
          {...{ vertexShader, fragmentShader, uniforms, wireframe }}
        />
      </mesh>
    );
  };

  const Scene = () => {
    return (
      <Canvas>
        <PerspectiveCamera makeDefault fov={15} position={[0, 0, 4]} />
        <Icosahedron position={[-0.4, -0.2, 0]} />
        <OrbitControls />
      </Canvas>
    );
  };

  return (
    <>
      <Scene />
    </>
  );
};

export default Blob;
