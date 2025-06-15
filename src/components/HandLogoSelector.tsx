
import React from "react";
import {
  Hand,
  HandCoins,
  HandHeart,
  HandHelping,
  HandMetal,
  HandPlatter,
  Handshake,
} from "lucide-react";

export type HandIconType =
  | "Hand"
  | "HandCoins"
  | "HandHeart"
  | "HandHelping"
  | "HandMetal"
  | "HandPlatter"
  | "Handshake";

const handIcons: { type: HandIconType; name: string; component: React.FC<any> }[] = [
  { type: "Hand", name: "Mano Normal", component: Hand },
  { type: "HandCoins", name: "Monedas", component: HandCoins },
  { type: "HandHeart", name: "Corazón", component: HandHeart },
  { type: "HandHelping", name: "Ayudando", component: HandHelping },
  { type: "HandMetal", name: "Metal", component: HandMetal },
  { type: "HandPlatter", name: "Sirviendo", component: HandPlatter },
  { type: "Handshake", name: "Apretón", component: Handshake },
];

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
        const selected = value === h.type;
        return (
          <button
            key={h.type}
            onClick={() => onChange(h.type)}
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
