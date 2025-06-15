
import React from "react";
import { Music } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}
interface Props {
  navItems: NavItem[];
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}
const HeaderDesktopNav: React.FC<Props> = ({ navItems, activeSection, scrollToSection }) => (
  <nav className="hidden lg:flex items-center space-x-1">
    {navItems.map((item) => (
      <button
        key={item.href}
        onClick={() => scrollToSection(item.href)}
        className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 touch-manipulation ${
          activeSection === item.href ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
        } focus:outline-none focus:ring-2 focus:ring-violet-400`}
        tabIndex={0}
      >
        <span className="text-lg">{item.icon}</span>
        <span className="font-medium tracking-wide">{item.label}</span>
      </button>
    ))}
    <button
      onClick={() => scrollToSection('register')}
      className="ml-6 flex items-center px-8 py-3 bg-gradient-to-r from-violet-600 via-purple-600 to-emerald-500 text-white font-bold rounded-full transform transition-all duration-300 hover:scale-105 shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-400"
      tabIndex={0}
    >
      <span className="tracking-wide">Únete Ahora</span>
    </button>
  </nav>
);
export default HeaderDesktopNav;
