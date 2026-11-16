"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Service3DCanvasProps {
  slug: string;
  badge?: string;
}

export function Service3DCanvas({ slug, badge }: Service3DCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setSupported(false);
        return;
      }
    } catch {
      setSupported(false);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSupported(false);
      return;
    }

    setSupported(true);
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // SCENE
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0, 7);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffd400, 2.5);
    dirLight1.position.set(5, 6, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight2.position.set(-5, -3, 3);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffd400, 2.0, 10);
    pointLight.position.set(0, 2, 2);
    scene.add(pointLight);

    // ROOT GROUP
    const group = new THREE.Group();
    scene.add(group);

    // MATERIALS
    const yellowMat = new THREE.MeshStandardMaterial({
      color: 0xffd400,
      metalness: 0.6,
      roughness: 0.25,
    });

    const charcoalMat = new THREE.MeshStandardMaterial({
      color: 0x171717,
      metalness: 0.8,
      roughness: 0.2,
    });

    const whiteGlossMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.1,
    });

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x171717,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });

    const yellowWireMat = new THREE.MeshBasicMaterial({
      color: 0xffd400,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });

    // BUILD SHAPES ACCORDING TO SERVICE
    const animables: {
      mesh: THREE.Object3D;
      rotX?: number;
      rotY?: number;
      rotZ?: number;
    }[] = [];

    if (slug === "ai-video-production") {
      // Cinema Aperture Torus & Orbiting Rings
      const torusGeo = new THREE.TorusGeometry(1.8, 0.25, 24, 60);
      const torus = new THREE.Mesh(torusGeo, charcoalMat);
      group.add(torus);
      animables.push({ mesh: torus, rotZ: 0.008 });

      const innerTorusGeo = new THREE.TorusGeometry(1.2, 0.08, 16, 40);
      const innerTorus = new THREE.Mesh(innerTorusGeo, yellowMat);
      group.add(innerTorus);
      animables.push({ mesh: innerTorus, rotX: 0.012, rotY: 0.01 });

      const icosaGeo = new THREE.IcosahedronGeometry(0.7, 1);
      const centerCore = new THREE.Mesh(icosaGeo, yellowWireMat);
      group.add(centerCore);
      animables.push({ mesh: centerCore, rotY: -0.015 });

      const ringOuterGeo = new THREE.RingGeometry(2.1, 2.15, 64);
      const ringOuter = new THREE.Mesh(ringOuterGeo, yellowWireMat);
      group.add(ringOuter);
      animables.push({ mesh: ringOuter, rotZ: -0.005 });
    } else if (slug === "website-development") {
      // 3D Glass Layered Viewport Panels
      const baseBoxGeo = new THREE.BoxGeometry(2.8, 1.8, 0.08);
      const basePanel = new THREE.Mesh(baseBoxGeo, whiteGlossMat);
      group.add(basePanel);

      const frameGeo = new THREE.BoxGeometry(2.84, 1.84, 0.09);
      const frameWire = new THREE.Mesh(frameGeo, wireMat);
      group.add(frameWire);

      const navBarGeo = new THREE.BoxGeometry(2.6, 0.22, 0.1);
      const navBar = new THREE.Mesh(navBarGeo, yellowMat);
      navBar.position.set(0, 0.65, 0.02);
      group.add(navBar);

      const heroCardGeo = new THREE.BoxGeometry(1.3, 0.9, 0.12);
      const heroCard = new THREE.Mesh(heroCardGeo, charcoalMat);
      heroCard.position.set(-0.55, -0.15, 0.1);
      group.add(heroCard);

      const sidePillGeo = new THREE.BoxGeometry(0.8, 0.9, 0.12);
      const sidePill = new THREE.Mesh(sidePillGeo, yellowMat);
      sidePill.position.set(0.7, -0.15, 0.12);
      group.add(sidePill);

      animables.push({ mesh: group, rotY: 0.006 });
    } else if (slug === "saas-development") {
      // Crystalline Multi-Node Data Graph
      const centerGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
      const centerCube = new THREE.Mesh(centerGeo, charcoalMat);
      group.add(centerCube);
      animables.push({ mesh: centerCube, rotX: 0.01, rotY: 0.012 });

      const centerWire = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.3, 1.3), yellowWireMat);
      group.add(centerWire);
      animables.push({ mesh: centerWire, rotX: -0.008, rotZ: 0.008 });

      // Satellite Nodes
      const positions = [
        [1.8, 1.2, 0],
        [-1.8, -1.0, 0.5],
        [0, 1.9, -1.0],
        [-1.2, 1.4, 1.2],
        [1.4, -1.5, -0.8],
      ];
      positions.forEach((pos, idx) => {
        const satGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
        const satMesh = new THREE.Mesh(satGeo, idx % 2 === 0 ? yellowMat : whiteGlossMat);
        satMesh.position.set(pos[0], pos[1], pos[2]);
        group.add(satMesh);
        animables.push({ mesh: satMesh, rotY: 0.02, rotX: 0.015 });
      });
    } else if (slug === "branding-design") {
      // Sculptural Monolith & Octahedron
      const octaGeo = new THREE.OctahedronGeometry(1.5, 0);
      const octa = new THREE.Mesh(octaGeo, yellowMat);
      group.add(octa);
      animables.push({ mesh: octa, rotX: 0.008, rotY: 0.012 });

      const wireSphereGeo = new THREE.SphereGeometry(2.0, 16, 16);
      const wireSphere = new THREE.Mesh(wireSphereGeo, wireMat);
      group.add(wireSphere);
      animables.push({ mesh: wireSphere, rotY: -0.006 });

      const innerCube = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), charcoalMat);
      group.add(innerCube);
      animables.push({ mesh: innerCube, rotZ: 0.015 });
    } else if (slug === "social-media-management") {
      // Vertical Kinetic Monolith (9:16) with Orbiting Badges
      const phoneGeo = new THREE.BoxGeometry(1.4, 2.5, 0.15);
      const phone = new THREE.Mesh(phoneGeo, charcoalMat);
      group.add(phone);

      const screenGeo = new THREE.BoxGeometry(1.25, 2.3, 0.17);
      const screen = new THREE.Mesh(screenGeo, whiteGlossMat);
      group.add(screen);

      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.04, 16, 50), yellowWireMat);
      ring1.rotation.x = Math.PI / 3;
      group.add(ring1);
      animables.push({ mesh: ring1, rotZ: 0.015 });

      const badge1 = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.08, 24), yellowMat);
      badge1.position.set(1.4, 0.6, 0.5);
      badge1.rotation.x = Math.PI / 2;
      group.add(badge1);
      animables.push({ mesh: badge1, rotZ: 0.02 });

      animables.push({ mesh: group, rotY: 0.008 });
    } else if (slug === "digital-marketing") {
      // Concentric Funnel & Target Radar
      for (let i = 0; i < 4; i++) {
        const rad = 0.6 + i * 0.45;
        const ringGeo = new THREE.TorusGeometry(rad, 0.06, 16, 40);
        const ring = new THREE.Mesh(ringGeo, i % 2 === 0 ? yellowMat : charcoalMat);
        ring.position.y = (i - 1.5) * 0.5;
        ring.rotation.x = Math.PI / 2.3;
        group.add(ring);
        animables.push({ mesh: ring, rotZ: (i % 2 === 0 ? 1 : -1) * 0.01 });
      }

      const beamGeo = new THREE.CylinderGeometry(0.04, 0.04, 3.2, 16);
      const beam = new THREE.Mesh(beamGeo, yellowMat);
      group.add(beam);
      animables.push({ mesh: beam, rotY: 0.02 });
    } else if (slug === "seo-growth") {
      // Ascending Stepped Pyramid
      for (let i = 0; i < 4; i++) {
        const size = 2.4 - i * 0.5;
        const stepGeo = new THREE.BoxGeometry(size, 0.3, size);
        const step = new THREE.Mesh(stepGeo, i === 3 ? yellowMat : i % 2 === 0 ? charcoalMat : whiteGlossMat);
        step.position.y = (i - 1.5) * 0.35;
        group.add(step);
      }

      const apexGeo = new THREE.ConeGeometry(0.5, 0.8, 4);
      const apex = new THREE.Mesh(apexGeo, yellowMat);
      apex.position.y = 1.0;
      apex.rotation.y = Math.PI / 4;
      group.add(apex);
      animables.push({ mesh: apex, rotY: 0.02 });

      animables.push({ mesh: group, rotY: 0.007 });
    } else if (slug === "ai-automation") {
      // Interlocking Gear Loops & Circuit Core
      const torus1 = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.15, 16, 50), charcoalMat);
      group.add(torus1);
      animables.push({ mesh: torus1, rotX: 0.01, rotY: 0.01 });

      const torus2 = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.1, 16, 50), yellowMat);
      torus2.rotation.x = Math.PI / 2;
      group.add(torus2);
      animables.push({ mesh: torus2, rotZ: 0.015 });

      const coreDodeca = new THREE.Mesh(new THREE.DodecahedronGeometry(0.7), yellowWireMat);
      group.add(coreDodeca);
      animables.push({ mesh: coreDodeca, rotY: -0.02 });
    } else {
      // E-commerce Management / Default: Isometric Cube Vault
      const vaultGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
      const vault = new THREE.Mesh(vaultGeo, charcoalMat);
      group.add(vault);
      animables.push({ mesh: vault, rotX: 0.008, rotY: 0.01 });

      const frameGeo = new THREE.BoxGeometry(1.7, 1.7, 1.7);
      const frame = new THREE.Mesh(frameGeo, yellowWireMat);
      group.add(frame);
      animables.push({ mesh: frame, rotX: -0.008, rotY: -0.01 });

      const goldTorus = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.06, 16, 48), yellowMat);
      goldTorus.rotation.x = Math.PI / 3;
      group.add(goldTorus);
      animables.push({ mesh: goldTorus, rotZ: 0.012 });
    }

    // Floating Particles
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 40;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 6;
      posArray[i + 1] = (Math.random() - 0.5) * 6;
      posArray[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      color: 0xffd400,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // MOUSE TILT INTERACTION
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    container.addEventListener("mousemove", handlePointerMove);

    // ANIMATION LOOP
    let animationFrameId: number;
    let isDestroyed = false;

    const animate = () => {
      if (isDestroyed) return;
      animationFrameId = requestAnimationFrame(animate);

      // Smooth pointer response
      targetRotY += (mouseX * 0.4 - targetRotY) * 0.05;
      targetRotX += (-mouseY * 0.4 - targetRotX) * 0.05;
      group.rotation.y += targetRotY * 0.02;
      group.rotation.x += targetRotX * 0.02;

      // Animate sub-meshes
      for (const item of animables) {
        if (item.rotX) item.mesh.rotation.x += item.rotX;
        if (item.rotY) item.mesh.rotation.y += item.rotY;
        if (item.rotZ) item.mesh.rotation.z += item.rotZ;
      }

      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 400;
      const h = container.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handlePointerMove);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [slug]);

  if (supported === false) {
    return (
      <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-brand-lightGrey via-white to-brand-lightGrey border border-brand-border flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-charcoal mb-4 border border-brand-yellow/50">
          <div className="w-8 h-8 rounded-full bg-brand-yellow" />
        </div>
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
          {badge || "Studio Capability 3D Spec"}
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-gradient-to-b from-brand-lightGrey/60 via-white to-brand-lightGrey/40 border border-brand-border group">
      {/* Telemetry pill */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-brand-border text-[11px] font-mono font-bold text-brand-secondaryText shadow-sm">
        <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
        <span>INTERACTIVE 3D COMPOSITION</span>
      </div>

      <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md bg-brand-charcoal text-white font-mono text-[10px] font-bold">
        THREE.JS WEBGL
      </div>

      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-400 pointer-events-none">
        <span>POINTER RESPONSIVE</span>
        <span>STUDIO RENDER 60FPS</span>
      </div>
    </div>
  );
}
