
import React from "react";
import HandLogoSelector, { HandIconType } from "./HandLogoSelector";

interface Props {
  value: HandIconType;
  onChange: (value: HandIconType) => void;
}
const HeaderHandSelector: React.FC<Props> = ({ value, onChange }) => (
  <div className="fixed top-[85px] left-4 z-[110] max-w-xs">
    <HandLogoSelector value={value} onChange={onChange} />
    <div className="text-xs text-white/70">Oculta esto después de elegir ;)</div>
  </div>
);

export default HeaderHandSelector;
