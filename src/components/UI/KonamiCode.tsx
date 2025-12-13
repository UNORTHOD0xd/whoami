"use client";

import { useEffect, useState, useRef } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export default function KonamiCode() {
  const [activated, setActivated] = useState(false);
  const inputRef = useRef<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      inputRef.current.push(e.code);
      inputRef.current = inputRef.current.slice(-KONAMI_CODE.length);

      if (inputRef.current.join(",") === KONAMI_CODE.join(",")) {
        setActivated(true);
        inputRef.current = [];
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!activated) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(1);

    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF";

    let animationId: number;
    let frameCount = 0;
    const maxFrames = 300; // ~5 seconds at 60fps

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff9f";
      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      frameCount++;
      if (frameCount < maxFrames) {
        animationId = requestAnimationFrame(draw);
      } else {
        // Fade out
        const fadeOut = () => {
          ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          frameCount++;
          if (frameCount < maxFrames + 60) {
            requestAnimationFrame(fadeOut);
          } else {
            setActivated(false);
          }
        };
        fadeOut();
      }
    };

    draw();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [activated]);

  if (!activated) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
      style={{ background: "rgba(0, 0, 0, 0.9)" }}
    />
  );
}
