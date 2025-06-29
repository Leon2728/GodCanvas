
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
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-emerald-300 to-violet-300 mb-4">
          ✨ Galería Bíblica
        </h2>
        <h3 className="text-xl font-semibold text-emerald-200 mb-6">
          Huellas Eternas en la Historia de Dios
        </h3>
        <div className="space-y-4 text-cyan-100 leading-relaxed">
          <p>
            Esta galería rinde homenaje a los personajes bíblicos que marcaron la historia sagrada, ya sea por su fe, su obediencia o incluso sus caídas.
          </p>
          <p>
            Cada rostro representa una vida real que dejó una lección eterna en el desarrollo del plan redentor.
          </p>
          <p>
            Más que retratos, aquí contemplamos testimonios vivos que siguen hablando al alma de cada generación.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SystemStatusPanel;
