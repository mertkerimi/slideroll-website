import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

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

type Particle = {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  alpha: number;
  alphaDir: number;
  alphaSpeed: number;
};

export const SparklesCore = ({
  background = "transparent",
  minSize = 1,
  maxSize = 3,
  speed = 1,
  particleColor = "#ffffff",
  particleDensity = 120,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<{ particles: Particle[]; raf: number; w: number; h: number }>({
    particles: [], raf: 0, w: 0, h: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const state = stateRef.current;

    function makeParticle(w: number, h: number): Particle {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * speed * 0.4,
        vy: (Math.random() - 0.5) * speed * 0.4,
        r: minSize + Math.random() * (maxSize - minSize),
        alpha: Math.random(),
        alphaDir: Math.random() < 0.5 ? 1 : -1,
        alphaSpeed: (0.006 + Math.random() * 0.012) * speed,
      };
    }

    function resize() {
      const w = wrap!.offsetWidth;
      const h = wrap!.offsetHeight;
      if (w === 0 || h === 0) return;
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.scale(dpr, dpr);
      state.w = w;
      state.h = h;
      const count = Math.round((w * h) / 160000 * particleDensity);
      state.particles = Array.from({ length: count }, () => makeParticle(w, h));
    }

    function draw() {
      const { w, h, particles } = state;
      ctx!.clearRect(0, 0, w, h);

      if (background !== "transparent") {
        ctx!.fillStyle = background;
        ctx!.fillRect(0, 0, w, h);
      }

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDir * p.alphaSpeed;

        if (p.alpha >= 1) { p.alpha = 1; p.alphaDir = -1; }
        else if (p.alpha <= 0) { p.alpha = 0; p.alphaDir = 1; }

        if (p.x < 0) p.x = w; else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; else if (p.y > h) p.y = 0;

        ctx!.globalAlpha = p.alpha;
        ctx!.fillStyle = particleColor;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      ctx!.globalAlpha = 1;
      state.raf = requestAnimationFrame(draw);
    }

    resize();
    state.raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    return () => {
      cancelAnimationFrame(state.raf);
      ro.disconnect();
    };
  }, [background, minSize, maxSize, speed, particleColor, particleDensity]);

  return (
    <motion.div
      ref={wrapRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </motion.div>
  );
};
