"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles, Maximize2, RotateCcw, Cpu, Eye, Activity, MoveDown } from "lucide-react";
import { Hero3DFallback } from "./Hero3DFallback";
import { soundFx } from "@/lib/sound";

export function Hero3DCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  const [wireframe, setWireframe] = useState(false);
  const [exploded, setExploded] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [fps, setFps] = useState(60);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sceneStateRef = useRef({
    wireframe: false,
    exploded: false,
    autoRotate: true,
    scrollProgress: 0,
  });

  useEffect(() => {
    sceneStateRef.current = {
      wireframe,
      exploded,
      autoRotate,
      scrollProgress,
    };
  }, [wireframe, exploded, autoRotate, scrollProgress]);

  // Global scroll listener for 3D Camera Dolly
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight || 800;
      const progress = Math.min(Math.max(window.scrollY / heroHeight, 0), 1.5);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setWebglSupported(false);
      return;
    }

    setWebglSupported(true);
    const container = mountRef.current;
    if (!container) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.background = null;

    // CAMERA SETUP
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    const baseCameraZ = 8.2;
    camera.position.set(0, 0, baseCameraZ);

    // RENDERER SETUP
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // LIGHTING SETUP
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    mainKeyLight.position.set(6, 10, 6);
    mainKeyLight.castShadow = true;
    scene.add(mainKeyLight);

    const yellowRimLight = new THREE.PointLight(0xffd400, 5.0, 18);
    yellowRimLight.position.set(-5, -2, 4);
    scene.add(yellowRimLight);

    const backAccentLight = new THREE.DirectionalLight(0xffd400, 2.0);
    backAccentLight.position.set(0, -6, -4);
    scene.add(backAccentLight);

    // MASTER ATRIUM GROUP
    const atriumGroup = new THREE.Group();
    scene.add(atriumGroup);

    // 1. CENTRAL KINETIC CORE (Yellow Polished Polyhedron)
    const coreGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xffd400,
      metalness: 0.35,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.castShadow = true;
    coreMesh.receiveShadow = true;
    atriumGroup.add(coreMesh);

    // Outer Facet Wireframe Cage
    const cageGeo = new THREE.IcosahedronGeometry(1.68, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x171717,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    atriumGroup.add(cageMesh);

    // Inner Radiant Core (Golden Micro-Prism)
    const innerGeo = new THREE.OctahedronGeometry(0.7, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    atriumGroup.add(innerMesh);

    // 2. ORBITING ARCHITECTURAL PANELS (Matrix Dimension Cards)
    interface PanelItem {
      mesh: THREE.Mesh;
      basePos: THREE.Vector3;
      baseRot: THREE.Euler;
      explodeVector: THREE.Vector3;
    }
    const panelItems: PanelItem[] = [];

    const panelConfigs = [
      {
        pos: [2.3, 0.9, 0.6],
        rot: [0.2, -0.4, 0.1],
        size: [0.95, 1.3, 0.04],
        color: 0x171717,
        label: "AI Video",
      },
      {
        pos: [-2.2, -0.8, 0.9],
        rot: [-0.3, 0.5, -0.2],
        size: [1.15, 0.75, 0.04],
        color: 0xffffff,
        label: "Web Dev",
      },
      {
        pos: [0.6, 2.2, -0.6],
        rot: [0.5, 0.2, 0.6],
        size: [0.85, 0.85, 0.04],
        color: 0xffd400,
        label: "SaaS App",
      },
      {
        pos: [-1.4, 2.0, 0.3],
        rot: [0.1, 0.7, -0.4],
        size: [0.75, 1.1, 0.04],
        color: 0xf3f3f3,
        label: "Branding",
      },
      {
        pos: [1.6, -1.9, -0.5],
        rot: [-0.4, -0.3, 0.5],
        size: [1.05, 0.65, 0.04],
        color: 0x171717,
        label: "Automation",
      },
      {
        pos: [-1.9, -1.7, -0.4],
        rot: [0.3, -0.6, 0.3],
        size: [0.9, 0.9, 0.04],
        color: 0xffd400,
        label: "Ad Media",
      },
    ];

    panelConfigs.forEach((cfg) => {
      const pGeo = new THREE.BoxGeometry(cfg.size[0], cfg.size[1], cfg.size[2]);
      const pMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        roughness: 0.25,
        metalness: 0.2,
      });
      const pMesh = new THREE.Mesh(pGeo, pMat);
      const bPos = new THREE.Vector3(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      const bRot = new THREE.Euler(cfg.rot[0], cfg.rot[1], cfg.rot[2]);
      pMesh.position.copy(bPos);
      pMesh.rotation.copy(bRot);
      pMesh.castShadow = true;
      pMesh.receiveShadow = true;
      atriumGroup.add(pMesh);

      panelItems.push({
        mesh: pMesh,
        basePos: bPos.clone(),
        baseRot: bRot.clone(),
        explodeVector: bPos.clone().normalize().multiplyScalar(1.6),
      });
    });

    // 3. ORBITING PARTICLE LATTICE (Matrix Ambient Nodes)
    const particleCount = 60;
    const particleGroup = new THREE.Group();
    const pGeoYellow = new THREE.OctahedronGeometry(0.07, 0);
    const pMatYellow = new THREE.MeshBasicMaterial({ color: 0xffd400 });
    const pMatDark = new THREE.MeshBasicMaterial({ color: 0x171717 });

    for (let i = 0; i < particleCount; i++) {
      const mesh = new THREE.Mesh(
        pGeoYellow,
        i % 2 === 0 ? pMatYellow : pMatDark
      );
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 2.6 + (i % 4) * 0.45;
      const y = Math.sin(i * 1.5) * 2.2;
      mesh.position.set(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      particleGroup.add(mesh);
    }
    atriumGroup.add(particleGroup);

    // MOUSE & POINTER PARALLAX TRACKING WITH EMIL SPRING DAMPING
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevMousePos = { x: clientX, y: clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = (clientX - prevMousePos.x) * 0.005;
        const deltaY = (clientY - prevMousePos.y) * 0.005;
        targetX += deltaX;
        targetY += deltaY;
        prevMousePos = { x: clientX, y: clientY };
      } else {
        const x = (clientX - rect.left) / rect.width - 0.5;
        const y = (clientY - rect.top) / rect.height - 0.5;
        targetX = x * 1.4;
        targetY = y * 1.4;
      }
    };

    container.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mouseup", handlePointerUp);
    container.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("touchend", handlePointerUp);
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // ANIMATION & SCROLL CHOREOGRAPHY LOOP
    let animationFrameId: number;
    const clock = new THREE.Clock();
    let frameCount = 0;
    let lastFpsTime = performance.now();
    let explodeProgress = 0;
    let currentScrollLerp = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // FPS Calculation
      frameCount++;
      const now = performance.now();
      if (now - lastFpsTime >= 500) {
        setFps(Math.round((frameCount * 1000) / (now - lastFpsTime)));
        frameCount = 0;
        lastFpsTime = now;
      }

      const { wireframe: wf, exploded: exp, autoRotate: ar, scrollProgress: sp } =
        sceneStateRef.current;

      // Scroll-driven Camera Dolly & Spatial Parting
      currentScrollLerp += (sp - currentScrollLerp) * 0.08;
      
      // Camera moves closer and pans slightly downward on scroll
      camera.position.z = baseCameraZ - currentScrollLerp * 2.5;
      camera.position.y = -currentScrollLerp * 1.1;

      // Toggle wireframe mode dynamically
      coreMat.wireframe = wf;
      panelItems.forEach((p) => {
        if (p.mesh.material instanceof THREE.MeshStandardMaterial) {
          p.mesh.material.wireframe = wf;
        }
      });

      // Explode + Scroll Parting
      // As user scrolls, panels naturally spread outward in 3D space
      const baseExplode = exp ? 1.0 : 0.0;
      const targetExplode = Math.min(baseExplode + currentScrollLerp * 0.9, 1.8);
      explodeProgress += (targetExplode - explodeProgress) * 0.08;

      panelItems.forEach((item, idx) => {
        const targetPos = item.basePos.clone().add(
          item.explodeVector.clone().multiplyScalar(explodeProgress)
        );
        item.mesh.position.lerp(targetPos, 0.1);
        item.mesh.position.y += Math.sin(elapsedTime * 2 + idx) * 0.002;
        // Scroll rotational deviation
        item.mesh.rotation.z = item.baseRot.z + currentScrollLerp * 0.4;
      });

      // Pointer Lerp using Emil spring factor
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      // Group rotation (Idle Spin + Mouse + Scroll rotation)
      const idleSpin = ar ? elapsedTime * 0.22 : 0;
      const scrollRotationY = currentScrollLerp * 1.5;
      atriumGroup.rotation.y = idleSpin + scrollRotationY + currentX * 1.6;
      atriumGroup.rotation.x = currentY * 1.2 + currentScrollLerp * 0.3;

      // Core rotation
      coreMesh.rotation.x = elapsedTime * 0.18 + currentScrollLerp * 0.5;
      coreMesh.rotation.y = elapsedTime * 0.28 + currentScrollLerp * 0.8;
      innerMesh.rotation.x = -elapsedTime * 0.35;
      innerMesh.rotation.y = elapsedTime * 0.45;

      // Cage breathing
      const s = 1 + Math.sin(elapsedTime * 1.6) * 0.04;
      cageMesh.scale.set(s, s, s);

      // Particle orbit expands slightly with scroll
      particleGroup.rotation.y = -elapsedTime * 0.12 - currentScrollLerp * 0.5;
      const particleScale = 1 + currentScrollLerp * 0.3;
      particleGroup.scale.set(particleScale, particleScale, particleScale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mouseup", handlePointerUp);
      container.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("touchend", handlePointerUp);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("resize", handleResize);

      coreGeo.dispose();
      coreMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      panelItems.forEach((p) => {
        p.mesh.geometry.dispose();
        if (p.mesh.material instanceof THREE.Material) {
          p.mesh.material.dispose();
        }
      });
      pGeoYellow.dispose();
      pMatYellow.dispose();
      pMatDark.dispose();
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (webglSupported === false) {
    return <Hero3DFallback />;
  }

  return (
    <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[640px] flex items-center justify-center select-none overflow-hidden rounded-3xl bg-gradient-to-b from-stone-50/90 via-white to-amber-50/30 border border-brand-border/80 shadow-emil-soft group">
      {/* Background Soft Yellow Ambience & Grid */}
      <div className="absolute w-[440px] h-[440px] rounded-full bg-brand-yellow/15 blur-3xl -top-16 -right-16 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
      />

      {/* Top Left: ThreeUI Telemetry Badge with Scroll Depth */}
      <div className="absolute top-5 left-5 pointer-events-none flex flex-col gap-1.5">
        <div className="glass-card px-3.5 py-1.5 rounded-full border border-brand-border flex items-center gap-2 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-charcoal">
            MATRIX ATRIUM v4.2
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-brand-secondaryText px-1">
          <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
          <span>FPS: {fps}</span>
          <span>&bull;</span>
          <span>VERTICES: 1,840</span>
          <span>&bull;</span>
          <span>SCROLL: {Math.round(scrollProgress * 100)}%</span>
        </div>
      </div>

      {/* Top Right: Studio Shader Controls Bar */}
      <div className="absolute top-5 right-5 flex items-center gap-2">
        {/* Wireframe Mode Toggle */}
        <button
          onClick={() => {
            soundFx.playClick();
            setWireframe(!wireframe);
          }}
          className={`px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all border shadow-sm flex items-center gap-1.5 ${
            wireframe
              ? "bg-brand-charcoal text-brand-yellow border-brand-charcoal"
              : "glass-card text-brand-charcoal border-brand-border hover:border-brand-charcoal"
          }`}
          title="Toggle Wireframe Architecture"
        >
          <Cpu className="w-3 h-3" />
          <span>{wireframe ? "SOLID" : "WIREFRAME"}</span>
        </button>

        {/* Explode / Expand Geometry Toggle */}
        <button
          onClick={() => {
            soundFx.playClick();
            setExploded(!exploded);
          }}
          className={`px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all border shadow-sm flex items-center gap-1.5 ${
            exploded
              ? "bg-brand-yellow text-brand-charcoal border-brand-yellow font-black"
              : "glass-card text-brand-charcoal border-brand-border hover:border-brand-charcoal"
          }`}
          title="Explode 3D Geometric Layers"
        >
          <Maximize2 className="w-3 h-3" />
          <span>{exploded ? "ASSEMBLE" : "EXPLODE"}</span>
        </button>
      </div>

      {/* Bottom Floating Control Strip */}
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between pointer-events-auto">
        <div className="glass-card px-3.5 py-1.5 rounded-xl border border-brand-border text-[10px] font-mono text-brand-secondaryText hidden sm:flex items-center gap-2">
          <MoveDown className="w-3 h-3 text-brand-charcoal animate-bounce" />
          <span>SCROLL TO DOLLY 3D CAMERA &bull; DRAG TO ORBIT</span>
        </div>

        <button
          onClick={() => {
            soundFx.playClick();
            setAutoRotate(!autoRotate);
          }}
          className="glass-card px-3 py-1.5 rounded-xl border border-brand-border text-[10px] font-mono font-bold text-brand-charcoal hover:border-brand-charcoal transition-colors flex items-center gap-1.5 shadow-sm ml-auto"
        >
          <RotateCcw className={`w-3 h-3 ${autoRotate ? "animate-spin-slow" : ""}`} />
          <span>{autoRotate ? "PAUSE SPIN" : "AUTO SPIN"}</span>
        </button>
      </div>
    </div>
  );
}
