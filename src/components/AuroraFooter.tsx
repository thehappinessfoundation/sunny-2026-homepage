'use client';

import { useEffect, useRef, useState } from 'react';

export default function AuroraFooter() {
  const currentPos = useRef({ x: -500, y: -500 });
  const targetPos = useRef({ x: -500, y: -500 });
  const velocity = useRef({ vx: 0, vy: 0 });
  const animFrameId = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [siriState, setSiriState] = useState({ 
    x: -500, 
    y: -500, 
    angle: 0,
    stretchX: 1,
    stretchY: 1,
    activeOpacity: 0 
  });

  useEffect(() => {
    // Only enable mouse follower on devices with fine pointers and hover capability (Desktop/Laptop mouse)
    const isHoverable = () => {
      return typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHoverable()) {
        if (isVisible) setIsVisible(false);
        return;
      }
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleTouchStart = () => {
      setIsVisible(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const loop = () => {
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      velocity.current.vx += (dx * 0.08 - velocity.current.vx) * 0.15;
      velocity.current.vy += (dy * 0.08 - velocity.current.vy) * 0.15;

      currentPos.current.x += velocity.current.vx;
      currentPos.current.y += velocity.current.vy;

      const speed = Math.hypot(velocity.current.vx, velocity.current.vy);
      const angle = Math.atan2(velocity.current.vy, velocity.current.vx) * (180 / Math.PI);
      const stretchX = 1 + Math.min(speed * 0.035, 0.45);
      const stretchY = Math.max(0.75, 1 / Math.sqrt(stretchX));

      setSiriState({
        x: currentPos.current.x,
        y: currentPos.current.y,
        angle: speed > 0.5 ? angle : 0,
        stretchX,
        stretchY,
        activeOpacity: isVisible ? 1 : 0,
      });

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [isVisible]);

  return (
    <>
      <style jsx global>{`
        @keyframes siri-fluid-circle-1 {
          0% {
            border-radius: 48% 52% 53% 47% / 52% 48% 51% 49%;
            transform: rotate(0deg) scale(1);
          }
          25% {
            border-radius: 54% 46% 47% 53% / 47% 53% 52% 48%;
            transform: rotate(90deg) scale(1.04, 0.96);
          }
          50% {
            border-radius: 47% 53% 52% 48% / 53% 47% 48% 52%;
            transform: rotate(180deg) scale(0.96, 1.04);
          }
          75% {
            border-radius: 52% 48% 46% 54% / 48% 52% 54% 46%;
            transform: rotate(270deg) scale(1.03, 0.97);
          }
          100% {
            border-radius: 48% 52% 53% 47% / 52% 48% 51% 49%;
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes siri-fluid-circle-2 {
          0% {
            border-radius: 52% 48% 46% 54% / 48% 52% 53% 47%;
            transform: rotate(360deg) scale(1);
          }
          50% {
            border-radius: 46% 54% 53% 47% / 52% 48% 47% 53%;
            transform: rotate(180deg) scale(0.95, 1.05);
          }
          100% {
            border-radius: 52% 48% 46% 54% / 48% 52% 53% 47%;
            transform: rotate(0deg) scale(1);
          }
        @keyframes siri-breathe-rhythm {
          0% {
            opacity: 0.10;
            transform: scale(0.90);
            animation-timing-function: cubic-bezier(0.34, 1.3, 0.64, 1);
          }
          38% {
            opacity: 0.22;
            transform: scale(1.14);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          48% {
            opacity: 0.20;
            transform: scale(1.11);
            animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
          }
          85% {
            opacity: 0.10;
            transform: scale(0.90);
            animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
          }
          100% {
            opacity: 0.10;
            transform: scale(0.90);
          }
        }
        @media (hover: none), (pointer: coarse) {
          .siri-mouse-glow {
            display: none !important;
          }
        }
      `}</style>

      {/* Global Siri / Aurora Fluid Wave Mesh Glow */}
      <div className="siri-mouse-glow fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute transition-opacity duration-700 ease-out pointer-events-none"
          style={{
            left: `${siriState.x}px`,
            top: `${siriState.y}px`,
            opacity: siriState.activeOpacity,
            transform: `translate3d(-50%, -50%, 0) rotate(${siriState.angle}deg) scale(${siriState.stretchX}, ${siriState.stretchY})`,
            willChange: 'transform, opacity',
          }}
        >
          {/* Accelerated Biological Breathing Animation Wrapper */}
          <div
            style={{
              animation: 'siri-breathe-rhythm 4.2s infinite',
            }}
          >
            {/* Outer Electric Blue Siri Aurora Fluid Layer (52px) */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] rounded-full bg-gradient-to-r from-[#2563EB]/50 via-[#3B82F6]/45 to-[#06B6D4]/50 blur-[10px] mix-blend-screen"
              style={{
                animation: 'siri-fluid-circle-1 10s linear infinite reverse',
              }}
            />

            {/* Middle Vibrant Purple Siri Fluid Wave Layer (36px) */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[36px] h-[36px] rounded-full bg-gradient-to-tr from-[#9333EA]/75 via-[#7C3AED]/65 to-[#C084FC]/75 blur-[7px] mix-blend-screen"
              style={{
                animation: 'siri-fluid-circle-2 7s ease-in-out infinite',
              }}
            />

            {/* Center Sunset Orange Core Wave Layer (22px - Pre-footer-orange palette) */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#FF3D00] via-[#FF9800] to-[#FFC107] blur-[4px] mix-blend-screen"
              style={{
                animation: 'siri-fluid-circle-1 4.5s ease-in-out infinite alternate',
              }}
            />
          </div>
        </div>
      </div>

      {/* Base Footer Aurora Waves (Mobile-only Slightly Lowered Shift, Original PC Desktop Positioning Intact) */}
      <div className="absolute bottom-0 left-0 w-full h-[100vh] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[200vw] h-[26vh] md:h-[20vh]">
          <div className="absolute -bottom-[18vh] md:-bottom-[26vh] left-1/2 -translate-x-1/2 w-[240vw] h-[68vh] md:h-[60vh] bg-[#5515af] opacity-80 blur-[100px] rounded-[50%]" style={{ animation: 'wave-purple-1 28s cubic-bezier(0.4, 0, 0.2, 1) infinite' }} />
          <div className="absolute -bottom-[20vh] md:-bottom-[30vh] left-1/2 -translate-x-1/2 w-[240vw] h-[70vh] md:h-[62vh] bg-[#4a10e5] opacity-90 blur-[100px] rounded-[50%]" style={{ animation: 'wave-purple-2 34s cubic-bezier(0.4, 0, 0.2, 1) infinite' }} />

          <div className="absolute -bottom-[35vh] md:-bottom-[48vh] left-1/2 w-[220vw] h-[74vh] md:h-[67vh] -translate-x-1/2 bg-[#FFD73C] opacity-95 blur-[75px] md:blur-[70px] rounded-[50%]" style={{ animation: 'wave-orb-1 32s cubic-bezier(0.4, 0, 0.2, 1) infinite reverse' }} />
          <div className="absolute -bottom-[27vh] md:-bottom-[38vh] left-[10%] w-[120vw] h-[64vh] md:h-[57vh] bg-[#FFD73C] opacity-90 blur-[75px] md:blur-[70px] rounded-[50%]" style={{ animation: 'wave-orb-1 24s cubic-bezier(0.4, 0, 0.2, 1) infinite' }} />
          <div className="absolute -bottom-[27vh] md:-bottom-[38vh] left-1/2 w-[140vw] h-[64vh] md:h-[57vh] -translate-x-1/2 bg-[#FFD73C] opacity-[0.85] blur-[75px] md:blur-[70px] rounded-[50%]" style={{ animation: 'wave-orb-2 28s cubic-bezier(0.4, 0, 0.2, 1) infinite' }} />
          <div className="absolute -bottom-[27vh] md:-bottom-[38vh] right-[10%] w-[120vw] h-[64vh] md:h-[57vh] bg-[#FFD73C] opacity-90 blur-[75px] md:blur-[70px] rounded-[50%]" style={{ animation: 'wave-orb-3 30s cubic-bezier(0.4, 0, 0.2, 1) infinite' }} />

          <div className="absolute -bottom-[32vh] md:-bottom-[44vh] left-1/2 w-[250vw] h-[75vh] md:h-[68vh] -translate-x-1/2 bg-[#FF9800] opacity-95 blur-[85px] md:blur-[80px] rounded-[50%]" style={{ animation: 'wave-orb-1 35s cubic-bezier(0.4, 0, 0.2, 1) infinite' }} />
        </div>
      </div>
    </>
  );
}
