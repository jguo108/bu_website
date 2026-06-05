"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  baseAlpha: number;
}

export function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const maxParticles = 65; // Balanced for aesthetics and performance
    const connectionDist = 120;
    const mouseConnectionDist = 180;

    // Custom colors matching the BoundaryUnknown theme (orange and warm white)
    const particleColors = [
      "rgba(255, 117, 31, ", // Theme Orange
      "rgba(254, 249, 240, ", // Warm White
      "rgba(208, 106, 76, ",  // Muted Orange
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(maxParticles, (canvas.width * canvas.height) / 18000);
      
      for (let i = 0; i < count; i++) {
        const baseAlpha = Math.random() * 0.4 + 0.2;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          alpha: baseAlpha,
          baseAlpha,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce/Wrap boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Subtle attraction to mouse
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouseConnectionDist) {
            // Apply a micro-force drawing particles towards the cursor
            p.x += (dx / dist) * 0.15;
            p.y += (dy / dist) * 0.15;
            p.alpha = Math.min(1.0, p.baseAlpha + (1 - dist / mouseConnectionDist) * 0.5);
          } else {
            p.alpha = p.baseAlpha;
          }
        } else {
          p.alpha = p.baseAlpha;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ")";
        ctx.fill();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Draw connections to other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 117, 31, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Draw connections to mouse
        if (mouseRef.current.active) {
          const dx = p1.x - mouseRef.current.x;
          const dy = p1.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseConnectionDist) {
            const alpha = (1 - dist / mouseConnectionDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            // Gradient from theme orange to warm white
            const grad = ctx.createLinearGradient(p1.x, p1.y, mouseRef.current.x, mouseRef.current.y);
            grad.addColorStop(0, `rgba(255, 117, 31, ${alpha})`);
            grad.addColorStop(1, `rgba(254, 249, 240, ${alpha * 0.5})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    // Global event handlers (doesn't block click events on overlay items)
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const handleClick = (e: MouseEvent) => {
      // Create a splash of temporary particles
      const splashCount = 8;
      const x = e.clientX;
      const y = e.clientY;
      
      for (let i = 0; i < splashCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        const baseAlpha = Math.random() * 0.6 + 0.4;
        
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 1.5 + 1,
          color: "rgba(255, 117, 31, ",
          alpha: baseAlpha,
          baseAlpha,
        });

        // Cull excess particles if size overflows
        if (particles.length > maxParticles + 15) {
          particles.shift();
        }
      }
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);

    resizeCanvas();
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-transparent"
    />
  );
}
