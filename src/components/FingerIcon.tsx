
import React from "react";

// SVG del dedo índice recto hacia la derecha, estilo línea (outline), tamaño y color personalizables
const FingerIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = "",
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-7 h-7 md:w-9 md:h-9 text-violet-300 animate-pulse drop-shadow ${className}`}
    {...props}
  >
    <path d="M5.5 14v-2.5a3 3 0 0 1 3-3H14m2 0v7.5a3 3 0 0 1-3 3h-2.5a3 3 0 0 1-3-3V14m0 0h6.5"/>
    <path d="M14 8V6.5A2.5 2.5 0 0 1 16.5 4h0A2.5 2.5 0 0 1 19 6.5V10a2 2 0 0 1-2 2h-3.5"/>

    {/* Dedo índice recto a la derecha */}
    <path d="M14 9.75L21 9.75" />
  </svg>
);

export default FingerIcon;
