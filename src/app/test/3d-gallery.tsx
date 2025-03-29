"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";

import {
  PerspectiveCamera,
  Environment,
  useTexture,
  Text,
} from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { MotionConfig } from "framer-motion";
import { easeInOut } from "framer-motion";
import * as THREE from "three";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  type: "image" | "video";
  src?: string;
  date: string;
}

interface Marvel3DGalleryProps {
  items: GalleryItem[];
}

const useDotTexture = () => {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 256, 256);

    const dotSize = 1.5;
    const spacing = 6;
    ctx.fillStyle = "white";
    for (let y = 0; y < 256; y += spacing) {
      for (let x = 0; x < 256; x += spacing) {
        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }, []);
};

function Card({
  item,
  index,
  active,
  setActive,
}: {
  item: GalleryItem;
  index: number;
  active: number;
  setActive: (index: number) => void;
}) {
  const texture = useTexture(
    item.src ||
      "https://media.istockphoto.com/id/1463404970/photo/high-school-students-e-learning-over-computers-in-the-classroom.jpg?s=612x612&w=0&k=20&c=UULwYdTItF65RcKzKgP6xQL-5-pxs2JXXjCdw_fJFqk="
  );

  const dotTexture = useDotTexture();

  const theta = (index - active) * (Math.PI / 8);
  const radius = 4;
  const x = Math.sin(theta) * radius;
  const z = Math.cos(theta) * radius - radius;

  const imageAspect = texture.image.width / texture.image.height;
  const cardAspect = 1.5 / 2;
  let offsetX = 0;
  let offsetY = 0;

  if (imageAspect > cardAspect) {
    offsetX = (1 - cardAspect / imageAspect) / 2;
  } else {
    offsetY = (1 - imageAspect / cardAspect) / 2;
  }

  const imageMaterial = useMemo(() => {
    const mat = new THREE.MeshStandardMaterial({
      map: texture,
      metalness: 0.1, // Reduced from 0.4 to make colors more natural
      roughness: 0.1, // Smoother surface for better reflections
      toneMapped: true, // Keep this true for proper color management
      emissive: "#ffffff",
      emissiveIntensity: 0.05, // Slight glow to boost colors
    });

    mat.map!.offset.set(offsetX, offsetY);
    mat.map!.repeat.set(
      imageAspect > cardAspect ? cardAspect / imageAspect : 1,
      imageAspect > cardAspect ? 1 : imageAspect / cardAspect
    );

    return mat;
  }, [texture, offsetX, offsetY, imageAspect, cardAspect]);

  const frameMaterials = useMemo(
    () => ({
      outerGlow: new THREE.MeshBasicMaterial({
        color: "#ed1d24",
        transparent: true,
        opacity: 0.2, // Further reduced
        side: THREE.BackSide,
      }),
      mainFrame: new THREE.MeshBasicMaterial({
        color: "#000000",
        side: THREE.BackSide,
      }),
      innerBorder: new THREE.MeshStandardMaterial({
        color: "#ed1d24",
        metalness: 0.9,
        roughness: 0.3,
      }),
      comicDots: new THREE.MeshStandardMaterial({
        color: "#ffffff",
        transparent: true,
        alphaMap: dotTexture,
        opacity: 0.1, // Reduced from 0.15 for more subtle effect
      }),
      cornerAccent: new THREE.MeshStandardMaterial({
        color: "#ed1d24",
        metalness: 0.8,
        roughness: 0.2,
      }),
    }),
    [dotTexture]
  );

  return (
    <motion.group
      position={[x, 0, z]}
      rotation={[0, -theta, 0]}
      animate={{
        x,
        z,
        rotateY: -theta,
        scale: index === active ? 1.2 : 1,
      }}
      transition={{ duration: 0.5, ease: easeInOut }}
      onClick={() => setActive(index)}
    >
      <mesh castShadow receiveShadow>
        <planeGeometry args={[1.5, 2]} />
        <primitive object={imageMaterial} attach="material" />
      </mesh>

      <mesh position={[0, 0, 0.02]}>
        <planeGeometry args={[1.5, 2]} />
        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={index === active ? 0 : 0.3}
        />
      </mesh>

      {index === active && (
        <>
          <mesh position={[0, 0, -0.03]}>
            <planeGeometry args={[1.7, 2.2]} />
            <primitive object={frameMaterials.outerGlow} attach="material" />
          </mesh>

          <mesh position={[0, 0, -0.02]}>
            <planeGeometry args={[1.6, 2.1]} />
            <primitive object={frameMaterials.mainFrame} attach="material" />
          </mesh>

          <group position={[0, 0, -0.01]}>
            <mesh>
              <planeGeometry args={[1.55, 2.05]} />
              <primitive
                object={frameMaterials.innerBorder}
                attach="material"
              />
            </mesh>

            <mesh position={[0, 0, 0.001]}>
              <planeGeometry args={[1.52, 2.02]} />
              <meshStandardMaterial
                color="#ed1d24"
                metalness={0.7}
                roughness={0.4}
                transparent
                opacity={0.2} // Reduced from 0.3
              />
            </mesh>
          </group>

          <mesh position={[0, 0, -0.005]}>
            <planeGeometry args={[1.5, 2]} />
            <primitive object={frameMaterials.comicDots} attach="material" />
          </mesh>

          {[1, -1].map((xSign) =>
            [1, -1].map((ySign) => (
              <group
                key={`${xSign}-${ySign}`}
                position={[xSign * 0.72, ySign * 0.97, 0.001]}
                rotation={[
                  0,
                  0,
                  Math.PI * (xSign === -1 ? 1 : 0) +
                    Math.PI * (ySign === -1 ? 0.5 : 0),
                ]}
                scale={0.12}
              >
                <mesh>
                  <shapeGeometry
                    args={[
                      (() => {
                        const shape = new THREE.Shape();
                        shape.moveTo(0, 0);
                        shape.lineTo(1, 0);
                        shape.lineTo(1, 0.3);
                        shape.lineTo(0.7, 0.3);
                        shape.lineTo(0.7, 1);
                        shape.lineTo(0, 1);
                        shape.lineTo(0, 0);
                        return shape;
                      })(),
                    ]}
                  />
                  <primitive
                    object={frameMaterials.cornerAccent}
                    attach="material"
                  />
                </mesh>

                <mesh position={[0.15, 0.15, 0.01]} scale={0.6}>
                  <shapeGeometry
                    args={[
                      (() => {
                        const shape = new THREE.Shape();
                        shape.moveTo(0, 0);
                        shape.lineTo(0.8, 0);
                        shape.lineTo(0.8, 0.2);
                        shape.lineTo(0.5, 0.2);
                        shape.lineTo(0.5, 0.8);
                        shape.lineTo(0, 0.8);
                        shape.lineTo(0, 0);
                        return shape;
                      })(),
                    ]}
                  />
                  <meshStandardMaterial
                    color="#ffffff"
                    metalness={0.5}
                    roughness={0.2}
                  />
                </mesh>
              </group>
            ))
          )}
        </>
      )}

      <Text
        position={[0, -1.2, 0.1]}
        fontSize={0.1}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        letterSpacing={0.01}
        maxWidth={1.4}
        lineHeight={1}
      >
        {item.title}
      </Text>
    </motion.group>
  );
}

function Scene({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState(
    items.length < 5 ? Math.ceil(items.length / 2) : 2
  );
  const groupRef = useRef<THREE.Group>(null);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const { gl } = useThree();
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    // Only access window after component mounts
    setDpr(Math.min(window.devicePixelRatio, 1));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    if (Math.abs(state.mouse.x) > 0.01) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        state.mouse.x * 0.1,
        0.05
      );
    }
  });

  const handlePointerDown = (e: THREE.Event) => {
    startX.current = (e as unknown as MouseEvent).clientX;
  };

  const handlePointerMove = (e: THREE.Event) => {
    if (startX.current) {
      deltaX.current = (e as unknown as MouseEvent).clientX - startX.current;
    }
  };

  const handlePointerUp = () => {
    if (Math.abs(deltaX.current) > 30) {
      setActive((prev) =>
        deltaX.current > 0
          ? Math.max(0, prev - 1)
          : Math.min(items.length - 1, prev + 1)
      );
    }
    startX.current = 0;
    deltaX.current = 0;
  };

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <ambientLight intensity={0.5} color="#ffffff" />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1} // Increased from 1.5
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048} // Higher resolution shadows
        shadow-mapSize-height={2048}
      />
      <directionalLight
        position={[-5, 3, 3]}
        intensity={0.8} // Increased from 0.8
        color="#ffffee"
      />
      <directionalLight position={[0, 10, 0]} intensity={0.2} color="#ffffff" />
      <Environment
        preset="sunset" // Brighter and more neutral than 'night'
        background={false}
        blur={0.5} // Slight blur for reflections
      />
      <group
        ref={groupRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {items.map((item, index) => (
          <Card
            key={item.id}
            item={item}
            index={index}
            active={active}
            setActive={setActive}
          />
        ))}
      </group>
    </>
  );
}

export default function Marvel3DGallery({ items }: Marvel3DGalleryProps) {
  return (
    <div className="relative w-full h-[80vh] bg-black">
      <MotionConfig transition={{ duration: 0.5, ease: easeInOut }}>
        <Canvas>
          <Scene items={items} />
          <EffectComposer>
            <Bloom
              intensity={0.3} // Mild bloom effect
              luminanceThreshold={0.6}
              luminanceSmoothing={0.9}
              height={300}
            />
            <ToneMapping
              adaptive={true}
              resolution={256}
              middleGrey={0.6}
              maxLuminance={16.0}
            />
          </EffectComposer>
        </Canvas>
      </MotionConfig>

      <div className="absolute bottom-4 left-0 right-0 text-center text-white">
        <p className="text-sm">Swipe or click on a card to focus</p>
      </div>
    </div>
  );
}
