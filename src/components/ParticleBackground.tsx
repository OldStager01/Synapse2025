import React, { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
  opacity: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 });
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const softColors = [
      "rgba(193, 66, 66, 1)", // Red (Captain America)
      "rgba(27, 161, 226, 1)", // Blue (Captain America)
      "rgba(0, 0, 0, 1)", // Black (Iron Man)
      "rgba(255, 215, 0, 1)", // Gold (Iron Man)
      "rgba(0, 128, 0, 1)", // Green (Hulk)
    ];

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(
        Math.floor((canvas.width * canvas.height) / 12000),
        100
      );

      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 1.5 + 0.5;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const opacity = Math.random() * 0.5 + 0.1;
        const color = softColors[Math.floor(Math.random() * softColors.length)];

        particlesRef.current.push({
          x,
          y,
          radius,
          color,
          velocity: {
            x: (Math.random() - 0.5) * 0.5,
            y: (Math.random() - 0.5) * 0.5,
          },
          opacity,
        });
      }
    };

    const connect = () => {
      const particles = particlesRef.current;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = 1 - distance / 120;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Move particle
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;

        // Bounce off edges
        if (
          particle.x + particle.radius > canvas.width ||
          particle.x - particle.radius < 0
        ) {
          particle.velocity.x = -particle.velocity.x;
        }
        if (
          particle.y + particle.radius > canvas.height ||
          particle.y - particle.radius < 0
        ) {
          particle.velocity.y = -particle.velocity.y;
        }

        // Mouse interaction logic
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRef.current.radius) {
          if (
            mouseRef.current.x < particle.x &&
            particle.x < canvas.width - particle.radius * 10
          ) {
            particle.x += 1;
          }
          if (
            mouseRef.current.x > particle.x &&
            particle.x > particle.radius * 10
          ) {
            particle.x -= 1;
          }
          if (
            mouseRef.current.y < particle.y &&
            particle.y < canvas.height - particle.radius * 10
          ) {
            particle.y += 1;
          }
          if (
            mouseRef.current.y > particle.y &&
            particle.y > particle.radius * 10
          ) {
            particle.y -= 1;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity; // Apply opacity only for the particle
        ctx.fill();
        ctx.globalAlpha = 1; // Reset globalAlpha for interaction logic
      });

      connect();
      animationFrameRef.current = requestAnimationFrame(draw);
    };
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
