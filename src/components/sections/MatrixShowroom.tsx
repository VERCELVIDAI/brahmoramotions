"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  Sparkles,
  ArrowUpRight,
  Layers,
  Box,
  Eye,
  Sliders,
  Rotate3d,
  Zap,
} from "lucide-react";
import { soundFx } from "@/lib/sound";

const DISCIPLINES = [
  {
    id: "ai-video",
    label: "01 / AI Video & CGI",
    title: "Cinematic Anamorphic Prisms",
    description:
      "Generative AI camera tracking, photorealistic fluid simulations, and custom shader caustics engineered for viral digital recall.",
    tags: ["Generative AI", "CGI Motion", "Octane Shaders"],
    geometryType: "torusKnot",
  },
  {
    id: "web-arch",
    label: "02 / Web Architecture",
    title: "High-Performance Next.js Crystals",
    description:
      "Sub-second navigation, fluid micro-interactions, responsive 3D WebGL canvases, and scalable component token systems.",
    tags: ["Next.js 14", "WebGL / Three.js", "Tailwind CSS"],
    geometryType: "octahedron",
  },
  {
    id: "saas-systems",
    label: "03 / SaaS & AI Platforms",
    title: "Neural Node Orchestrations",
    description:
      "Full-stack web applications, dynamic multi-tenant permissions, real-time telemetry streams, and autonomous agent backends.",
    tags: ["Full-Stack SaaS", "Autonomous Agents", "Live Telemetry"],
    geometryType: "icosahedron",
  },
  {
    id: "brand-identity",
    label: "04 / Monolithic Brand Systems",
    title: "Architectural Identity Monoliths",
    description:
      "Unmistakable visual grammar, custom display typography, brand token governance, and memorable market differentiation.",
    tags: ["Visual Identity", "Typography", "Design Systems"],
    geometryType: "dodecahedron",
  },
];

interface MatrixShowroomProps {
  onOpenEnquiry?: (serviceName?: string) => void;
}

export function MatrixShowroom({ onOpenEnquiry }: MatrixShowroomProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    mesh: THREE.Mesh | null;
    group: THREE.Group | null;
    renderer: THREE.WebGLRenderer | null;
    scene: THREE.Scene | null;
    camera: THREE.PerspectiveCamera | null;
  }>({
    mesh: null,
    group: null,
    renderer: null,
    scene: null,
    camera: null,
  });

  const activeDiscipline = DISCIPLINES[activeIdx];

  // Initialize Three.js Scene for the Showroom
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const yellowLight = new THREE.PointLight(0xffd400, 4.5, 15);
    yellowLight.position.set(-4, -2, 3);
    scene.add(yellowLight);

    const group = new THREE.Group();
    scene.add(group);

    // Orbiting Rings
    const ringGeo = new THREE.RingGeometry(2.2, 2.22, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffd400,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.5;
    group.add(ringMesh);

    sceneRef.current = { mesh: null, group, renderer, scene, camera };

    // Resize handler
    const handleResize = () => {
      if (!container || !sceneRef.current.renderer || !sceneRef.current.camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      sceneRef.current.camera.aspect = w / h;
      sceneRef.current.camera.updateProjectionMatrix();
      sceneRef.current.renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (group) {
        group.rotation.y = elapsed * 0.35;
        group.rotation.x = Math.sin(elapsed * 0.5) * 0.2;
      }
      if (sceneRef.current.mesh) {
        sceneRef.current.mesh.rotation.y = elapsed * 0.5;
        sceneRef.current.mesh.rotation.z = elapsed * 0.25;
      }
      if (ringMesh) {
        ringMesh.rotation.z = -elapsed * 0.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update Geometry when active discipline changes
  useEffect(() => {
    const { group } = sceneRef.current;
    if (!group) return;

    // Dispose old mesh
    if (sceneRef.current.mesh) {
      group.remove(sceneRef.current.mesh);
      sceneRef.current.mesh.geometry.dispose();
      if (sceneRef.current.mesh.material instanceof THREE.Material) {
        sceneRef.current.mesh.material.dispose();
      }
      sceneRef.current.mesh = null;
    }

    let geo: THREE.BufferGeometry;
    const type = DISCIPLINES[activeIdx].geometryType;

    if (type === "torusKnot") {
      geo = new THREE.TorusKnotGeometry(1.0, 0.32, 100, 16);
    } else if (type === "octahedron") {
      geo = new THREE.OctahedronGeometry(1.4, 0);
    } else if (type === "icosahedron") {
      geo = new THREE.IcosahedronGeometry(1.35, 1);
    } else {
      geo = new THREE.DodecahedronGeometry(1.3, 0);
    }

    const mat = new THREE.MeshPhysicalMaterial({
      color: 0xffd400,
      metalness: 0.3,
      roughness: 0.15,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    group.add(mesh);
    sceneRef.current.mesh = mesh;
  }, [activeIdx]);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-brand-borderLight">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightGrey border border-brand-border text-brand-charcoal text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
              <span>SPATIAL LAB &bull; CHAPTER 03</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-brand-charcoal">
              THE MATRIX <span className="yellow-pill-highlight">SHOWROOM</span>.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-secondaryText max-w-md font-mono">
            Interactive real-time asset primitives inspired by ThreeUI motion standards. Explore each discipline in computational 3D space.
          </p>
        </div>

        {/* Two-Column Spatial Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Discipline Selectors & Copy (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-2.5">
              {DISCIPLINES.map((d, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={d.id}
                    onClick={() => {
                      soundFx.playClick();
                      setActiveIdx(idx);
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                      isActive
                        ? "bg-brand-charcoal text-white border-brand-charcoal shadow-card"
                        : "bg-brand-lightGrey/50 text-brand-charcoal border-brand-border hover:bg-white hover:border-brand-yellow"
                    }`}
                  >
                    <div className="space-y-1">
                      <div
                        className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                          isActive ? "text-brand-yellow" : "text-brand-secondaryText"
                        }`}
                      >
                        {d.label}
                      </div>
                      <div className="text-base font-bold font-display uppercase tracking-tight">
                        {d.title}
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-brand-yellow text-brand-charcoal scale-105"
                          : "bg-white text-neutral-400 group-hover:text-brand-charcoal"
                      }`}
                    >
                      <Zap className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Discipline Information Card */}
            <div className="bg-brand-lightGrey/80 p-6 rounded-2xl border border-brand-border space-y-4">
              <p className="text-xs sm:text-sm text-brand-charcoal font-medium leading-relaxed">
                {activeDiscipline.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-brand-borderLight">
                {activeDiscipline.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2.5 py-1 rounded bg-white text-brand-charcoal border border-brand-border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    if (onOpenEnquiry) {
                      onOpenEnquiry(activeDiscipline.title);
                    } else {
                      const contactEl = document.getElementById("contact");
                      contactEl?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full py-3 rounded-xl bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-brand-yellowHover transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>COMMISSION THIS CAPABILITY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Real-Time 3D Viewport (6 cols) */}
          <div className="lg:col-span-6 relative h-[420px] sm:h-[480px] lg:h-[520px] rounded-3xl bg-gradient-to-b from-stone-50 via-white to-amber-50/20 border border-brand-border p-4 shadow-soft flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
            <div className="absolute w-72 h-72 rounded-full bg-brand-yellow/20 blur-3xl pointer-events-none" />

            {/* Top HUD Telemetry */}
            <div className="absolute top-5 left-5 pointer-events-none flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-charcoal">
                PROCEDURAL GLSL MATRIX
              </span>
            </div>

            <div className="absolute top-5 right-5 pointer-events-none text-right font-mono text-[10px] text-brand-secondaryText">
              <span>PRIMITIVE: {activeDiscipline.geometryType.toUpperCase()}</span>
            </div>

            {/* 3D Viewport Container */}
            <div
              ref={mountRef}
              className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            />

            {/* Bottom Interaction Cue */}
            <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[10px] font-mono text-brand-secondaryText border-t border-brand-borderLight pt-2 pointer-events-none">
              <span>REAL-TIME THREE.JS SHADER</span>
              <span>NOIDA STUDIO &bull; 60 FPS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
