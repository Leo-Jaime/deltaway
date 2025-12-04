import React from 'react';
import { Camera, Cpu, TrafficCone, MonitorCheck, Wrench } from 'lucide-react';
import { ProductParam } from '../types';

import imgMonitoramento from '../assets/images/monitoramento-deltaway2.png';
import imgSala from '../assets/images/sala-de-monitoramento.png';
import imgSinalizacaoSemaforica from '../assets/images/semafaro-sinalização.png'
import imgManutencao from '../assets/images/manutence.png'
import imgControladoraSemaforica from '../assets/images/controladora-semaforica.png'
const products: ProductParam[] = [
    {
        category: "Monitoramento e Fiscalização",
        icon: Camera,
        image: imgMonitoramento,
        items: [
            "Radares de velocidade Fixo",
            "Lombadas eletrônicas com display LED",
            "Câmeras de monitoramento de tráfego",
            "Sistemas OCR/LPR Leitura automática de placas"
        ]
    },
    {
        category: "Controlador Semafórico",
        icon: Cpu,
        image: imgControladoraSemaforica,
        items: [
                "Melhor custo-benefício para controladoras semafóricas, desenvolvido e fabricado pela Deltaway",
                "Equilíbrio entre recursos sofisticados, simplicidade e confiabilidade para o trânsito",
                "Estrutura modular para instalação e manutenção rápidas e práticas",
                "Proteção IP66 resistente ao tempo, chuva, sol e umidade",
                "Primeira controladora com memória removível para troca de módulo sem reprogramação",
                "Acionamento de 1 a 8 fases veiculares com opção para fase de pedestre",
                "Software e circuito de proteção contra verde conflitante",
                "Conexão de cabos simples e segura, com remoção total da eletrônica sem retirar a caixa",
                "Alimentação automática 80~250V AC com proteção e filtro contra descargas e falhas",
                "Compatível com Central de Controle e Operações (CCO)",
                "Autodiagnóstico de erro e identificação de lâmpada queimada",
                "Sincronismo entre controladoras de forma simples (Onda Verde)",
                "Planos configuráveis por horário, dia da semana e acionamento do pedestre",
                "Programação prática via Tablet touch, com aplicativo intuitivo",
                "Armazena mais de 100 planos semafóricos com cálculo automático de tempos",
                "Visualização gráfica da programação e status de funcionamento",
                "Garantia estendida de 18 meses contra defeitos de fabricação"
        ]
    },
    {
        category: "Sinalização Semafórica",
        icon: TrafficCone,
        image: imgSinalizacaoSemaforica,
        items: [
                "Construído em alumínio naval com pintura eletrostática e lentes de policarbonato",
                "Iluminação a LED de alto brilho com ligação individual e sensor de brilho para economia de energia e conforto visual",
                "Manutenção pela parte frontal, facilitando o acesso",
                "Instalação elétrica simples, sem necessidade de cabo auxiliar para alimentação",
                "Instalação com suporte único e 3 eixos de ajuste",
                "Garantia de 2 anos"
        ]
    },
    {
        category: "Processamento de Infrações",
        icon: MonitorCheck,
        image: "",
        items: [
            "Software de gestão completa de multas",
            "Módulo de validação de imagens com IA",
            "Integração direta com DETRAN e órgãos de trânsito",
            "Dashboard de estatísticas e backoffice web"
        ]
    },
    {
        category: "Instalação e Manutenção",
        icon: Wrench,
        image: imgManutencao,
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