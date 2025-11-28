import React from 'react';
import { LifeBuoy, Server, FileText, PhoneCall } from 'lucide-react';

export const Support: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Suporte Técnico Especializado</h1>
          <p className="text-lg text-gray-600">
            Canal direto para clientes governamentais e parceiros privados. Estamos prontos para resolver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600 hover:-translate-y-1 transition-transform duration-300">
                <Server className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Fiscalização & Software</h3>
                <p className="text-gray-600 mb-6 text-sm">
                    Suporte para sistemas JARI, conectividade de radares e processamento de imagens.
                </p>
                <button className="text-blue-700 font-semibold text-sm hover:underline">Abrir Chamado &rarr;</button>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-amber-500 hover:-translate-y-1 transition-transform duration-300">
                <LifeBuoy className="w-12 h-12 text-amber-500 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Hardware & Campo</h3>
                <p className="text-gray-600 mb-6 text-sm">
                    Assistência técnica para controladores, grupos focais e infraestrutura física.
                </p>
                <button className="text-amber-600 font-semibold text-sm hover:underline">Solicitar Técnico &rarr;</button>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-slate-600 hover:-translate-y-1 transition-transform duration-300">
                <FileText className="w-12 h-12 text-slate-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Documentação</h3>
                <p className="text-gray-600 mb-6 text-sm">
                    Acesso a manuais técnicos, laudos de aferição e certificações de produtos.
                </p>
                <button className="text-slate-700 font-semibold text-sm hover:underline">Acessar Portal &rarr;</button>
            </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-blue-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Precisa de ajuda imediata?</h2>
                <p className="text-blue-200">Nossa equipe de plantão está disponível para emergências de trânsito.</p>
            </div>
            <a 
                href="tel:+556235481003" 
                className="flex items-center gap-3 bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-500 hover:text-white transition-colors"
            >
                <PhoneCall size={20} />
                Ligar Agora: (62) 3548-1003
            </a>
        </div>

      </div>
    </div>
  );
};