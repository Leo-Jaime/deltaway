import React from 'react';
import { ArrowRight, Zap, Shield, Eye, Settings } from 'lucide-react';
import { PageView } from '../types';
import bgCidade from "../assets/images/cidade.png";
import imgCruzamento from "../assets/images/cruzamento.png";

interface HomeProps {
    onChangeView: (view: PageView) => void;
}

export const Home: React.FC<HomeProps> = ({ onChangeView }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white min-h-[650px] flex items-center overflow-hidden"  style={{ 
                backgroundImage:  `url(${bgCidade})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
  }}>
        
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-1 opacity-20">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-amber-900 blur-3xl rounded-full -translate-x-1/4 translate-y-1/4"></div>
        </div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 z-1 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 z-1" 
             style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px'}}>
        </div>
        {/* overlay azul*/}
        <div className="absolute inset-0 bg-gray-700/60 z-10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-8 py-12 md:py-0">
            <div className="inline-flex items-center space-x-2 bg-blue-900/30 border border-blue-700/50 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium backdrop-blur-sm">
                <Zap size={14} className="text-amber-500" />
                <span>Inovação em trânsito desde 1997</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Tecnologia Inteligente para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Mobilidade Urbana</span>
            </h1>
            <p className="text-lg md:text-xl text-white max-w-lg leading-relaxed">
              Desde 1997 desenvolvendo soluções integradas de trânsito, fiscalização e sinalização para cidades inteligentes em todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onChangeView('PRODUCTS')}
                className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-900/50 group"
              >
                Conhecer Soluções
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onChangeView('CONTACT')}
                className="inline-flex justify-center items-center px-8 py-4 bg-white border-2  hover:border-amber-500 hover:text-amber-500 text-blue-700 font-bold rounded-lg transition-all"
              >
                Fale Conosco
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 relative">
             <div className="relative w-full max-w-md aspect-square">
                 {/* Decorative Image Container */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-amber-500 rounded-2xl rotate-6 opacity-20 blur-lg"></div>
                 <div className="relative h-full w-full rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
                    <img 
                        src={imgCruzamento} 
                        alt="Smart City Traffic Control" 
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-700 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                        <p className="text-white font-semibold">Monitoramento em Tempo Real</p>
                        <p className="text-sm text-blue-400">Sistemas OCR e Radares</p>
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* Quick Services Strip */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900">Pilares da Inovação Deltaway</h2>
                <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 transition-colors duration-300 hover:shadow-xl">
                    <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Eye size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Fiscalização Inteligente</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Radares, lombadas eletrônicas e OCR de alta precisão para garantir a segurança viária e o cumprimento das leis de trânsito.
                    </p>
                </div>

                <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500 transition-colors duration-300 hover:shadow-xl">
                    <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                        <Settings size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Semáforos & Controle</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Controladores semafóricos robustos e centrais de sincronização "Onda Verde" para otimizar o fluxo urbano.
                    </p>
                </div>

                <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 transition-colors duration-300 hover:shadow-xl">
                    <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Shield size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Software Integrado</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Sistemas completos para processamento de infrações, backoffice e validação de imagens com integração governamental.
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};