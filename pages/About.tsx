import React from 'react';
import { Target, TrendingUp, Heart, CheckCircle, Flag } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossa História & Propósito</h1>
            <p className="text-xl text-gray-400">
                Uma trajetória de inovação 100% brasileira dedicada a salvar vidas e organizar cidades.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        
        {/* History Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border-t-4 border-blue-600">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                        <Flag className="text-amber-500" />
                        Desde 1997
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        Fundada em 1997, a Deltaway é uma empresa genuinamente brasileira. Nascemos da prestação de serviços e evoluímos para o desenvolvimento de 
                        tecnologia própria — hardware e software — para suprir a carência de inovação no mercado de trânsito nacional.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        Entendemos a realidade das ruas brasileiras e projetamos soluções robustas que unem engenharia de ponta com a durabilidade necessária para o nosso ambiente.
                    </p>
                </div>
                <div className="w-full md:w-1/3">
                    <img 
                        src="https://picsum.photos/seed/techhistory/600/400" 
                        alt="Engenharia Deltaway" 
                        className="rounded-xl shadow-lg w-full object-cover h-64 grayscale hover:grayscale-0 transition duration-500"
                    />
                </div>
            </div>
        </div>

        {/* Mission Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6">
                    <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Missão</h3>
                <p className="text-slate-600 leading-relaxed">
                    Oferecer à sociedade soluções para a mobilidade e segurança de pessoas e veículos, 
                    com o uso de tecnologias inovadoras, visando simplicidade e segurança sem perder a sofisticação.
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Visão</h3>
                <p className="text-slate-600 leading-relaxed">
                    Estar presente em todos os Estados brasileiros, sendo reconhecida pelo melhor custo-benefício 
                    em produtos e serviços de tecnologia de trânsito.
                </p>
            </div>
        </div>

        {/* Values */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-10 text-center">Nossos Valores</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-800/50 rounded-2xl flex items-center justify-center mb-4 text-blue-300">
                            <CheckCircle size={32} />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Dedicação</h4>
                        <p className="text-sm text-gray-400">Excelência na execução de cada detalhe do trabalho.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-amber-800/50 rounded-2xl flex items-center justify-center mb-4 text-amber-400">
                            <Heart size={32} />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Compromisso</h4>
                        <p className="text-sm text-gray-400">Responsabilidade com o cliente e impacto social positivo.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-800/50 rounded-2xl flex items-center justify-center mb-4 text-blue-300">
                            <TrendingUp size={32} />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Inovação</h4>
                        <p className="text-sm text-gray-400">Busca constante por novas tecnologias e métodos.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-amber-800/50 rounded-2xl flex items-center justify-center mb-4 text-amber-400">
                            <Target size={32} />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Ética</h4>
                        <p className="text-sm text-gray-400">Postura transparente e íntegra em todas as relações comerciais.</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};