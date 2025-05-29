
import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <div className="relative">
        {isDark ? (
          <Sun className="w-6 h-6 text-yellow-300 transition-transform duration-300 group-hover:scale-110" />
        ) : (
          <Moon className="w-6 h-6 text-violet-300 transition-transform duration-300 group-hover:scale-110" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
