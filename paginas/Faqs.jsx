import React from 'react';
import { Clock, Lightbulb, HelpCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Faqs() {
  // Função para lidar com erro de imagem e não deixar o card vazio
  const handleImgError = (e) => {
    e.target.src = "https://via.placeholder.com/300x300/030a3d/ffffff?text=Imagem+nao+encontrada";
  };

  return (
    <div className="bg-linear-to-b from-[#051066] to-[#0a1a8b] text-white py-20 px-4 min-h-screen font-sans">
      <div className="container mx-auto max-w-6xl">
        
        {/* 1. Título e Benefícios Superiores */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-20">Perguntas frequentes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 text-center">
          <div className="flex flex-col items-center">
            <Clock size={60} className="mb-6 opacity-90" />
            <h3 className="text-xl font-bold mb-4">Quanto tempo demora o concerto?</h3>
            <p className="text-sm opacity-80 leading-relaxed">O tempo médio depende da complexidade do diagnóstico. Serviços de formatação e limpeza levam 24h, reparos de placa variam entre 3 a 5 dias úteis.</p>
          </div>
          <div className="flex flex-col items-center">
            <Lightbulb size={60} className="mb-6 opacity-90" />
            <h3 className="text-xl font-bold mb-4">O meu aparelho tem mesmo conserto?</h3>
            <p className="text-sm opacity-80 leading-relaxed">Sim! Somos especialistas em recuperar dispositivos que outras assistências consideram descartáveis através da micro-soldagem.</p>
          </div>
          <div className="flex flex-col items-center">
            <HelpCircle size={60} className="mb-6 opacity-90" />
            <h3 className="text-xl font-bold mb-4">Vocês trocam peças ou consertam a placa?</h3>
            <p className="text-sm opacity-80 leading-relaxed text-center">Priorizamos o conserto da placa original para manter a integridade do seu aparelho e reduzir custos desnecessários com peças novas.</p>
          </div>
        </div>

 
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 mb-32">
          <div className="w-full max-w-sm">
            <img 
              src="/fotos/duvida.jpg" 
              alt="Dúvidas" 
              onError={handleImgError}
              className="rounded-[40px] shadow-2xl w-full object-cover aspect-square"
            />
          </div>
          <div className="flex flex-col gap-12 max-w-lg text-center md:text-left">
            <div>
              <HelpCircle size={40} className="mb-4 text-white opacity-90 mx-auto md:mx-0" />
              <h3 className="text-xl font-bold mb-2">Como recebo o orçamento?</h3>
              <p className="text-sm opacity-80 leading-relaxed">Após realizar o nosso diagnóstico online, você será direcionado para o WhatsApp para análise ágil do técnico.</p>
            </div>
            <div>
              <CheckCircle size={40} className="mb-4 text-white opacity-90 mx-auto md:mx-0" />
              <h3 className="text-xl font-bold mb-2">Os serviços possuem garantia?</h3>
              <p className="text-sm opacity-80 leading-relaxed">Com certeza! Como uma assistência premium, oferecemos garantia técnica em todos os nossos serviços de reparo.</p>
            </div>
          </div>
        </div>

        {/* 3. Seção: Quais os seus serviços? (Fotos Reais) */}
        <div className="pt-20 border-t border-white/10">
          <h2 className="text-4xl font-bold text-center mb-16">Quais os seus serviços?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto px-4">
            
            <div className="flex items-start gap-6 group">
              <img src="/fotos/formatacao.jpg" onError={handleImgError} className="w-32 h-32 rounded-3xl object-cover shadow-lg group-hover:scale-105 transition-transform" alt="Formatações" />
              <div>
                <h4 className="text-xl font-bold mb-1">Formatações</h4>
                <p className="text-sm opacity-80 leading-relaxed">formatações otimizadas que garantem a máxima performance do sistema e recuperam a velocidade original.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <img src="/fotos/diagnostico.jpg" onError={handleImgError} className="w-32 h-32 rounded-3xl object-cover shadow-lg group-hover:scale-105 transition-transform" alt="Diagnósticos" />
              <div>
                <h4 className="text-xl font-bold mb-1">Diagnósticos avançados</h4>
                <p className="text-sm opacity-80 leading-relaxed">Ferramentas de ponta para realizar diagnósticos profundos em circuitos complexos e identificar a falha exata.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <img src="/fotos/limpeza.jpg" onError={handleImgError} className="w-32 h-32 rounded-3xl object-cover shadow-lg group-hover:scale-105 transition-transform" alt="Limpeza" />
              <div>
                <h4 className="text-xl font-bold mb-1">Limpeza preventiva</h4>
                <p className="text-sm opacity-80 leading-relaxed">Otimização térmica profissional com aplicação de materiais de alta condutividade para evitar superaquecimento.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <img src="/fotos/ConcertoPlacamae.jpg" onError={handleImgError} className="w-32 h-32 rounded-3xl object-cover shadow-lg group-hover:scale-105 transition-transform" alt="Placa-mãe" />
              <div>
                <h4 className="text-xl font-bold mb-1">Concertos da placa-mãe</h4>
                <p className="text-sm opacity-80 leading-relaxed">Reparos avançados com micro-soldagem de alta precisão para recuperar placas-mãe condenadas.</p>
              </div>
            </div>

          </div>

          <div className="text-center mt-20">
            <p className="text-lg font-semibold mb-8">Inicie agora nossa triagem inteligente e receba um pré-orçamento ágil via WhatsApp.</p>
            <Link to="/diagnostico" className="bg-[#5d946e] hover:bg-[#4d7a5b] text-white font-bold py-4 px-10 rounded-full transition-all text-xl shadow-xl inline-block">
              Começar o meu diagnóstico
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}