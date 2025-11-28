import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS'>('IDLE');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('SUBMITTING');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('SUCCESS');
        }, 1500);
    };

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900">Entre em Contato</h1>
            <p className="mt-4 text-gray-600">
                Estamos prontos para atender sua cidade. Envie uma mensagem ou visite nossa sede.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form Side */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
                {formStatus === 'SUCCESS' ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                            <Send size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Mensagem Enviada!</h3>
                        <p className="text-gray-600 mt-2">Nossa equipe comercial entrará em contato em breve.</p>
                        <button 
                            onClick={() => setFormStatus('IDLE')}
                            className="mt-6 text-blue-600 font-medium hover:underline"
                        >
                            Enviar nova mensagem
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                            <input 
                                required
                                type="text" 
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                placeholder="Seu nome"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">E-mail Corporativo</label>
                            <input 
                                required
                                type="email" 
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                placeholder="seu@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Assunto</label>
                            <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition">
                                <option>Comercial / Orçamento</option>
                                <option>Suporte Técnico</option>
                                <option>Parcerias</option>
                                <option>Outros</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                            <textarea 
                                required
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                placeholder="Como podemos ajudar?"
                            ></textarea>
                        </div>
                        <button 
                            type="submit"
                            disabled={formStatus === 'SUBMITTING'}
                            className="w-full bg-blue-700 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl flex justify-center items-center gap-2"
                        >
                            {formStatus === 'SUBMITTING' ? 'Enviando...' : 'Enviar Mensagem'}
                            {!formStatus && <Send size={18} />}
                        </button>
                    </form>
                )}
            </div>

            {/* Info Side */}
            <div className="space-y-10">
                <div className="prose prose-blue">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Sede Administrativa</h3>
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900">Endereço</p>
                            <p className="text-slate-600">Rua Marquês de Tamandaré, Q25, L18<br/>Parque Real, Aparecida de Goiânia - GO</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 mb-6">
                         <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900">Telefone</p>
                            <p className="text-slate-600">+55 62 3548-1003</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                         <div className="w-10 h-10 bg-slate-200 text-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900">E-mail</p>
                            <p className="text-slate-600">contato@deltaway.com.br</p>
                        </div>
                    </div>
                </div>

                {/* Simulated Map */}
                <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden shadow-inner relative">
                    <img 
                        src="https://picsum.photos/seed/maplocation/800/400" 
                        alt="Mapa de Localização" 
                        className="w-full h-full object-cover opacity-60"
                    />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold flex items-center gap-2 text-slate-900">
                            <MapPin size={16} className="text-red-500" />
                            Deltaway HQ
                        </div>
                     </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};