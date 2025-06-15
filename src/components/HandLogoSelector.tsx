
import React, { useState } from "react";
import {
  Hand,
  HandCoins,
  HandHeart,
  HandHelping,
  HandMetal,
  HandPlatter,
  Handshake,
} from "lucide-react";

const handIcons = [
  { name: "Mano Normal", component: Hand },
  { name: "Monedas", component: HandCoins },
  { name: "Corazón", component: HandHeart },
  { name: "Ayudando", component: HandHelping },
  { name: "Metal", component: HandMetal },
  { name: "Sirviendo", component: HandPlatter },
  { name: "Apretón", component: Handshake },
];

export type HandIconType =
  | "Hand"
  | "HandCoins"
  | "HandHeart"
  | "HandHelping"
  | "HandMetal"
  | "HandPlatter"
  | "Handshake";

interface Props {
  value: HandIconType;
  onChange: (value: HandIconType) => void;
}

/**
 * Solo para selección rápida de estilos de mano. Puedes eliminarlo después de elegir.
 */
const HandLogoSelector: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="mb-3 flex flex-wrap gap-2 bg-black/40 px-3 py-2 rounded-lg">
      {handIcons.map((h) => {
        const Icon = h.component;
        const selected =
          value === Icon.displayName || value === Icon.name.replace("Icon", "");
        return (
          <button
            key={h.name}
            onClick={() => onChange(Icon.displayName as HandIconType)}
            className={`flex flex-col items-center px-2 py-1 rounded-md border border-transparent hover:border-violet-400 transition ${
              selected ? "bg-violet-500/30 border-violet-400" : ""
            }`}
            type="button"
          >
            <Icon className="w-7 h-7 mb-1" />
            <span className="text-xs text-gray-200">{h.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default HandLogoSelector;

