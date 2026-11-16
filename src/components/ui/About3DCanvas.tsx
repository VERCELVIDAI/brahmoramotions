"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function About3DCanvas() {
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

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 50);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffd400, 3.0);
    dirLight1.position.set(5, 7, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight2.position.set(-6, -4, 4);
    scene.add(dirLight2);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Center Core: Sculptural Golden Monolith
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xffd400,
      metalness: 0.65,
      roughness: 0.22,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // Wireframe Cage
    const cageGeo = new THREE.IcosahedronGeometry(1.85, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x171717,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    rootGroup.add(cageMesh);

    // 4 Orbiting Rings representing 4 Pillars
    const ringMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x171717, metalness: 0.8, roughness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0xffd400, metalness: 0.5, roughness: 0.3 }),
      new THREE.MeshStandardMaterial({ color: 0x171717, metalness: 0.8, roughness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0xffd400, metalness: 0.5, roughness: 0.3 }),
    ];

    const rings: THREE.Mesh[] = [];
    const ringRotations = [
      { x: Math.PI / 4, y: 0, z: 0 },
      { x: -Math.PI / 4, y: Math.PI / 3, z: 0 },
      { x: 0, y: Math.PI / 2, z: Math.PI / 6 },
      { x: Math.PI / 3, y: -Math.PI / 4, z: Math.PI / 4 },
    ];

    for (let i = 0; i < 4; i++) {
      const ringGeo = new THREE.TorusGeometry(2.3 + i * 0.18, 0.04, 16, 60);
      const ring = new THREE.Mesh(ringGeo, ringMaterials[i]);
      ring.rotation.set(ringRotations[i].x, ringRotations[i].y, ringRotations[i].z);
      rootGroup.add(ring);
      rings.push(ring);
    }

    // Floating micro dust particles
    const particleGeo = new THREE.BufferGeometry();
    const count = 50;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffd400,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    container.addEventListener("mousemove", onPointerMove);

    let animId: number;
    let destroyed = false;

    const render = () => {
      if (destroyed) return;
      animId = requestAnimationFrame(render);

      targetRotY += (mouseX * 0.4 - targetRotY) * 0.05;
      targetRotX += (-mouseY * 0.4 - targetRotX) * 0.05;

      rootGroup.rotation.y += targetRotY * 0.02 + 0.003;
      rootGroup.rotation.x += targetRotX * 0.02;

      coreMesh.rotation.y += 0.005;
      coreMesh.rotation.x += 0.004;

      cageMesh.rotation.y -= 0.006;
      cageMesh.rotation.z += 0.003;

      rings.forEach((ring, idx) => {
        ring.rotation.z += (idx % 2 === 0 ? 1 : -1) * 0.008;
      });

      particles.rotation.y += 0.0008;

      renderer.render(scene, camera);
    };

    render();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || 450;
      const h = container.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", onResize);

    return () => {
      destroyed = true;
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onPointerMove);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (supported === false) {
    return (
      <div className="w-full h-96 rounded-3xl bg-brand-lightGrey border border-brand-border flex flex-col items-center justify-center p-8 text-center">
        <div className="w-20 h-20 rounded-full bg-brand-yellow/30 flex items-center justify-center mb-4">
          <div className="w-10 h-10 rounded-full bg-brand-yellow" />
        </div>
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
          Studio Monolith Visual
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden bg-gradient-to-b from-brand-lightGrey/60 via-white to-brand-lightGrey/30 border border-brand-border group">
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-brand-border text-[11px] font-mono font-bold text-brand-secondaryText shadow-sm">
        <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
        <span>BRAHMORA MONOLITH • 3D WEBGL</span>
      </div>

      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-400 pointer-events-none">
        <span>INTERACTIVE SCULPTURE</span>
        <span>NOIDA STUDIO CORE</span>
      </div>
    </div>
  );
}
