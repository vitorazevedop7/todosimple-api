"use client";
import { useState, useEffect } from "react";

// Paleta verde variada (pode ajustar ao seu gosto)
const greenVariants = [
  "bg-green-600",
  "bg-green-700",
  "bg-emerald-700",
  "bg-lime-700",
  "bg-green-800",
  "bg-emerald-800",
  "bg-lime-600",
];

export default function BlockCubeCheck({ index = 0 }) {
  const [rotated, setRotated] = useState(false);
  const [color, setColor] = useState("bg-green-700");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Escolhe uma cor aleatória ao montar
    const randomColor = greenVariants[Math.floor(Math.random() * greenVariants.length)];
    setColor(randomColor);

    // Delay de entrada para animação sequencial
    const timeout = setTimeout(() => setMounted(true), index * 100);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div
      onClick={() => setRotated(!rotated)}
      className={`
        w-12 h-12 m-2 rounded-md cursor-pointer transition-transform duration-700 transform relative flex items-center justify-center
        ${color}
        ${rotated ? "rotate-[180deg] scale-105 shadow-lg" : ""}
        ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"}
        transition-all duration-500 ease-out
      `}
    >
      <span
        className={`text-white text-xl font-bold transition-opacity duration-500 transform ${
          rotated ? "opacity-100 rotate-[-180deg]" : "opacity-0"
        }`}
      >
        ✓
      </span>
    </div>
  );
}
