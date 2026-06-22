import { useId, useCallback } from "react";
import Particles, { ParticlesProvider, useParticlesProvider } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

type SparklesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

function SparklesInner({ id, className, background, minSize, maxSize, speed, particleColor, particleDensity }: SparklesProps) {
  const { loaded } = useParticlesProvider();
  const controls = useAnimation();
  const generatedId = useId();

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({ opacity: 1, transition: { duration: 1 } });
    }
  };

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {loaded && (
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={{
            background: { color: { value: background || "transparent" } },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 120,
            particles: {
              color: { value: particleColor || "#ffffff" },
              move: {
                enable: true,
                speed: { min: 0.1, max: speed || 1 },
                direction: "none",
                outModes: { default: "out" },
              },
              number: {
                density: { enable: true, width: 400, height: 400 },
                value: particleDensity || 120,
              },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: { enable: true, speed: speed || 4, sync: false },
              },
              size: { value: { min: minSize || 1, max: maxSize || 3 } },
              shape: { type: "circle" },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
}

export function SparklesCore(props: SparklesProps) {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={init}>
      <SparklesInner {...props} />
    </ParticlesProvider>
  );
}
