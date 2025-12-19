import React from 'react';
import { History, HelpCircle } from 'lucide-react';
import logo from '../fotos/logo.png'; 

export default function SobreNos() {
  return (
    <div className="bg-linear-to-b from-[#051066] to-[#0a1a8b] text-white py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col md:flex-row items-center gap-16 mb-32 text-center md:text-left">
          <img 
            src={logo} 
            alt="Logo Minha Placa Minha Vida" 
            className="max-w-md w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
          />
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Sobre nós e nossa trajetória
            </h2>
            <p className="text-lg opacity-90 leading-relaxed max-w-2xl">
              A Minha Placa Minha Vida surgiu como uma resposta à crescente obsolescência programada e ao descarte prematuro de eletrônicos de alto valor. Somos uma assistência técnica premium focada na excelência, onde cada dispositivo é tratado como uma peça única de engenharia que merece uma segunda chance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1 */}
          <div className="bg-[#030a3d] p-12 rounded-[50px] shadow-2xl flex flex-col items-center text-center border border-white/5 transition-transform hover:scale-[1.02]">
            <History size={60} className="mb-6 text-[#5d946e] opacity-80" />
            <h3 className="text-3xl font-bold mb-6">Nossa história</h3>
            <p className="opacity-90 text-base leading-relaxed">
              Tudo começou em uma pequena bancada de estudos, movida pela insatisfação de ver aparelhos caros serem condenados por falhas simples em componentes minúsculos. Ao longo dos anos, investimos pesado em treinamento e equipamentos de última geração para micro-soldagem. Saímos da troca básica de peças para nos tornarmos especialistas em reconstrução de trilhas, reballing e reparos em nível de componente, sempre focados em entender a raiz do problema.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#030a3d] p-12 rounded-[50px] shadow-2xl flex flex-col items-center text-center border border-white/5 transition-transform hover:scale-[1.02]">
            <HelpCircle size={60} className="mb-6 text-[#5d946e] opacity-80" />
            <h3 className="text-3xl font-bold mb-6">Onde estamos hoje</h3>
            <p className="opacity-90 text-base leading-relaxed">
              Hoje, somos reconhecidos como uma das principais referências em recuperação de placas-mãe de iPhones, MacBooks e consoles. Nosso diferencial não é apenas a técnica, mas a transparência total com o cliente. Oferecemos diagnósticos precisos em tempo recorde, orçamentos detalhados enviados diretamente via WhatsApp e uma garantia sólida que reflete nossa confiança no trabalho executado. Estamos aqui para provar que a vida útil do seu eletrônico pode ir muito além do que o fabricante diz.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
