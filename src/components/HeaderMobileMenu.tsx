
import React from "react";
import { X, Music } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  navItems: NavItem[];
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  scrollToTop: () => void;
}
const HeaderMobileMenu: React.FC<Props> = ({ open, setOpen, navItems, activeSection, scrollToSection, scrollToTop }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden" onClick={() => setOpen(false)}>
      <aside
        className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-gradient-to-b from-gray-950 via-violet-950 to-emerald-950 shadow-xl border-r border-violet-700/20 p-6 flex flex-col gap-8 animate-slide-in-right"
        role="dialog"
        aria-label="Menú de navegación móvil"
        onClick={e => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          className="self-end mb-4 p-2 rounded-full hover:bg-violet-900/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
        >
          <X className="w-7 h-7 text-violet-300" />
        </button>
        <nav className="flex flex-col gap-5">
          <button
            onClick={scrollToTop}
            className="flex items-center px-4 py-3 rounded-xl text-violet-300 hover:bg-violet-900/30 font-bold text-lg transition-all focus:outline-none focus:ring-2 focus:ring-violet-400"
            tabIndex={0}
          >
            Inicio
          </button>
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 hover:bg-violet-900/30 text-base transition-all focus:outline-none focus:ring-2 focus:ring-violet-400 ${
                activeSection === item.href ? 'text-violet-200 font-bold' : ''
              }`}
              tabIndex={0}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => scrollToSection('register')}
            className="w-full mt-6 bg-gradient-to-r from-violet-600 via-purple-600 to-emerald-500 text-white font-bold rounded-full px-4 py-3 shadow focus:outline-none focus:ring-2 focus:ring-violet-400"
            tabIndex={0}
          >
            Únete Ahora
          </button>
        </nav>
      </aside>
    </div>
  )
};

export default HeaderMobileMenu;
