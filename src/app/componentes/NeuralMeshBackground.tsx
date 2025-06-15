'use client'

import Particles from "@tsparticles/react";

export default function NeuralMeshBackground() {
  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={{
        preset: "links",
        background: {
          color: {
            value: "#0e1c28",
          },
        },
        particles: {
          color: {
            value: "#00ffff",
          },
          links: {
            color: "#00ffff",
            distance: 120,
            enable: true,
            opacity: 0.5,
            width: 1.2,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            value: 60,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        fullScreen: {
          enable: false,
        },
      }}
    />
  );
}
