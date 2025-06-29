import React from "react";

interface SystemStatusPanelProps {
  currentIndex: number;
  avatarsCount: number;
  currentPower: string;
  isAutoplay: boolean;
}

const SystemStatusPanel: React.FC<SystemStatusPanelProps> = ({
  currentIndex,
  avatarsCount,
  currentPower,
  isAutoplay,
}) => (
  <div className="mt-14 max-w-4xl mx-auto animate-fade-in">
    <div className="bg-gradient-to-r from-cyan-950/85 via-black/80 to-emerald-950/80 backdrop-blur-lg rounded-2xl p-8 border border-emerald-300/15 relative shadow-[0_4px_80px_0_rgba(16,232,211,0.09)] overflow-hidden">
      {/* Fondo patrón */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_75%,rgba(16,232,211,0.15),transparent_65%)]"></div>
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 bg-cyan-300 rounded-full animate-pulse drop-shadow"></span>
            <span className="text-emerald-200 font-mono text-lg font-bold tracking-wider drop-shadow">
              GALERÍA BÍBLICA
            </span>
          </div>
          <span className="text-cyan-300 font-mono text-xs font-semibold">
            PERSONAJE {currentIndex + 1}/{avatarsCount} · EN EXHIBICIÓN
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-xs">
          {[
            { label: "AUTO-ROTAR", value: isAutoplay ? "ON" : "OFF", color: isAutoplay ? "emerald" : "red" },
            { label: "EXHIBICIÓN", value: "ACTIVA", color: "emerald" },
            { label: "HOLO-SYNC", value: "ONLINE", color: "emerald" },
            { label: "VISUAL", value: "ÓPTIMA", color: "emerald" },
            { label: "HONOR", value: currentPower ?? "--", color: "cyan" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-emerald-200 font-mono mb-2`}>{stat.label}</div>
              <div className={`inline-block px-2.5 py-1 rounded-full font-bold border border-emerald-400/15 shadow
              bg-gradient-to-r from-cyan-900/40 via-emerald-800/60 to-black/40
              ${stat.color === "emerald"
                ? "text-emerald-300"
                : stat.color === "red"
                  ? "text-rose-300"
                  : "text-cyan-300"}
              `}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SystemStatusPanel;
