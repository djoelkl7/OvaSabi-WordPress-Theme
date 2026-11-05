import React, { useEffect, useRef } from 'react';
import { colorThemes } from '../data/profileData';

export type BackgroundStyle = 'particles' | 'gradient' | 'stars' | 'clean';

interface BackgroundCanvasProps {
  style: BackgroundStyle;
  themeColor: string;
  isDark: boolean;
}

export const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({
  style,
  themeColor,
  isDark,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeColor = colorThemes.find((c) => c.id === themeColor)?.primary || '#10b981';

  useEffect(() => {
    if (style !== 'particles' && style !== 'stars') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes for RyanCV mesh network
    const count = style === 'particles' ? 45 : 70;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * (style === 'particles' ? 0.7 : 0.3),
      vy: (Math.random() - 0.5) * (style === 'particles' ? 0.7 : 0.3),
      radius: Math.random() * 2 + 1,
    }));

    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and connect particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Render point
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `${activeColor}88`
          : `${activeColor}55`;
        ctx.fill();

        // Connect nearby points to form triangles / polygon mesh (Classic RyanCV effect)
        const maxDist = style === 'particles' ? 140 : 100;
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isDark ? 0.15 : 0.1);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${activeColor}${Math.floor(alpha * 255)
              .toString(16)
              .padStart(2, '0')}`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Mouse interaction line
        const mouseDx = p.x - mouseX;
        const mouseDy = p.y - mouseY;
        const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        if (mouseDist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `${activeColor}40`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [style, activeColor, isDark]);

  if (style === 'clean') return null;

  return (
    <>
      {(style === 'particles' || style === 'stars') && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-0"
        />
      )}
      {style === 'gradient' && (
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-25 transition-opacity"
          style={{
            backgroundImage: `radial-gradient(circle at 15% 20%, ${activeColor}33 0%, transparent 40%), radial-gradient(circle at 85% 80%, ${activeColor}22 0%, transparent 40%)`,
          }}
        />
      )}
    </>
  );
};
