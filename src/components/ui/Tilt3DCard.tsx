"use client";

import React, { useRef, useState, useCallback } from "react";
import { soundFx } from "@/lib/sound";

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // degrees, default 8
  spotlight?: boolean;
  glareColor?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

export function Tilt3DCard({
  children,
  className = "",
  maxTilt = 7,
  spotlight = true,
  onClick,
  onMouseEnter,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePos({ x, y });

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Emil's gentle tilt physics
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setTilt({ x: rotateX, y: rotateY });
    },
    [maxTilt]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundFx.playHover();
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 relative group transition-transform duration-200 ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="w-full h-full rounded-3xl transition-transform ease-out will-change-transform"
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(8px)`
            : "rotateX(0deg) rotateY(0deg) translateZ(0px)",
          transitionDuration: isHovered ? "120ms" : "400ms",
          transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Emil's Cursor Spotlight Glow */}
        {spotlight && isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-300 z-30"
            style={{
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 212, 0, 0.22), transparent 75%)`,
            }}
          />
        )}

        {/* Content Container with 3D Depth */}
        <div className="relative z-10 w-full h-full" style={{ transform: "translateZ(12px)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
