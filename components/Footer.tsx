import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Instagram } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
    onChangeView: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onChangeView }) => {
  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">DELTA<span className="text-blue-500">WAY</span></h3>
            <p className="text-sm text-gray-400 mb-6">
              Tecnologia Inteligente para Mobilidade Urbana e Segurança Viária.
            </p>
            <div className="flex space-x-4">
               <a href="#" className="text-gray-400 hover:text-blue-500 transition"><Linkedin size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-amber-500 transition"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onChangeView('HOME')} className="hover:text-amber-500 transition">Home</button></li>
              <li><button onClick={() => onChangeView('ABOUT')} className="hover:text-amber-500 transition">Quem Somos</button></li>
              <li><button onClick={() => onChangeView('PRODUCTS')} className="hover:text-amber-500 transition">Produtos e Serviços</button></li>
              <li><button onClick={() => onChangeView('SUPPORT')} className="hover:text-amber-500 transition">Suporte Técnico</button></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Soluções</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Fiscalização Eletrônica</li>
              <li>Controladores Semafóricos</li>
              <li>Sinalização Viária</li>
              <li>Gestão de Infrações</li>
            </ul>
          </div>

          {/* Contact Small */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Rua Marquês de Tamandaré, Q25, L18, Aparecida de Goiânia - GO</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 flex-shrink-0" />
                <span>+55 62 3548-1003</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 flex-shrink-0" />
                <span>contato@deltaway.com.br</span>
              </li>
            </ul>
          </div>

        </div>
        
<div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Deltaway. Todos os direitos reservados. Orgulhosamente Brasileiro.</p>

          <p className="mt-2 text-gray-400">
            Desenvolvido por 
            <a 
              href="https://leo-portifolio.vercel.app/" 
              target="_blank" 
              className="text-blue-500 font-medium hover:text-amber-500 ml-1 transition"
            >
              Léo Jaime
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};