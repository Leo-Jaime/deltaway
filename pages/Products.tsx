import React from 'react';
import { Camera, Cpu, TrafficCone, MonitorCheck, Wrench } from 'lucide-react';
import { ProductParam } from '../types';

const products: ProductParam[] = [
    {
        category: "Monitoramento e Fiscalização",
        icon: Camera,
        image: "./assets/images/monitoramento-deltaway2.png",
        items: [
            "Radares de velocidade (Fixo e Portátil)",
            "Lombadas eletrônicas com display LED",
            "Câmeras de monitoramento de tráfego (CFTV)",
            "Sistemas OCR/LPR (Leitura automática de placas)"
        ]
    },
    {
        category: "Controlador Semafórico",
        icon: Cpu,
        image: "./assets/images/sala-de-monitoramento.png",
        items: [
            "Controladores de tráfego inteligentes em tempo real",
            "Centrais de sincronização (Onda Verde)",
            "Hardware robusto IP65 para ambientes hostis",
            "Sistemas de no-break para cruzamentos críticos"
        ]
    },
    {
        category: "Sinalização Semafórica",
        icon: TrafficCone,
        image: "",
        items: [
            "Grupos focais de alto brilho (LED)",
            "Estruturas metálicas: Pórticos e Semipórticos",
            "Braços projetados para semáforos",
            "Botoeiras sonoras para acessibilidade de pedestres"
        ]
    },
    {
        category: "Processamento de Infrações",
        icon: MonitorCheck,
        image: "",
        items: [
            "Software de gestão completa de multas (JARI)",
            "Módulo de validação de imagens com IA",
            "Integração direta com DETRAN e órgãos de trânsito",
            "Dashboard de estatísticas e backoffice web"
        ]
    },
    {
        category: "Instalação e Manutenção",
        icon: Wrench,
        image: "",
        items: [
            "Equipes especializadas para implantação viária",
            "Manutenção preventiva de equipamentos eletrônicos",
            "Correção emergencial 24/7",
            "Sinalização horizontal e vertical de apoio"
        ]
    }
];

export const Products: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Catálogo Técnico</span>
                <h1 className="mt-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">Produtos e Serviços</h1>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                    Soluções end-to-end para Smart Cities. Do hardware na rua ao software na nuvem.
                </p>
            </div>

            <div className="space-y-12">
                {products.map((product, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    >
                       
                    <div className="w-full md:w-2/5 aspect-square bg-slate-200 relative">
                        <img
                            src={product.image}
                            alt={product.category}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
                    </div>

                        {/* Content Side */}
                        <div className="w-full md:w-3/5 p-8 md:p-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-slate-100 rounded-lg text-blue-700">
                                    <product.icon size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">{product.category}</h2>
                            </div>
                            
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {product.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                                            <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                                        </div>
                                        <p className="ml-3 text-base text-gray-600">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};