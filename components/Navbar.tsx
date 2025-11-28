import React, { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { NavItem, PageView } from '../types';
import logo from "../assets/images/logo-delta.png"
interface NavbarProps {
  currentView: PageView;
  onChangeView: (view: PageView) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', view: 'HOME' },
  { label: 'Quem Somos', view: 'ABOUT' },
  { label: 'Produtos e Serviços', view: 'PRODUCTS' },
  { label: 'Suporte', view: 'SUPPORT' },
  { label: 'Contato', view: 'CONTACT' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (view: PageView) => {
    onChangeView(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer gap-2" 
            onClick={() => handleNavClick('HOME')}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white">
                <img src={logo}/>
            </div>
            <span className="font-bold text-2xl text-white tracking-tight">
              DELTA<span className="text-blue-500">WAY</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
                  currentView === item.view
                    ? 'text-white bg-slate-800 border-b-2 border-amber-500'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  currentView === item.view
                    ? 'text-white bg-slate-800 border-l-4 border-amber-500'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};