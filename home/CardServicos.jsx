import React from 'react';
// Importações com as extensões que você confirmou
import imgFormatacao from '../fotos/formatacao.jpg'; 
import imgLimpeza from '../fotos/limpeza.jpg'; 
import imgDiag from '../fotos/diagnostico.jpg'; 
import imgConcerto from '../fotos/concertoPlacamae.jpg'; 

export default function CardServicos() {
  const servicos = [
    { 
      titulo: "Formatações", 
      desc: "formatações otimizadas que garantem a máxima performance do sistema, recuperando a velocidade original do seu equipamento", 
      img: imgFormatacao 
    },
    { 
      titulo: "Diagnósticos avançados", 
      desc: "Utilizamos ferramentas de ponta para realizar diagnósticos profundos em circuitos complexos, identificando a falha exata antes de iniciar qualquer reparo técnico.", 
      img: imgDiag 
    },
    { 
      titulo: "Limpeza preventiva", 
      desc: "Otimização térmica profissional com aplicação de materiais de alta condutividade para evitar superaquecimento e prolongar a vida útil do seu hardware.", 
      img: imgLimpeza 
    },
    { 
      titulo: "Concertos da placa-mãe", 
      desc: "Realizamos reparos avançados com micro-soldagem de alta precisão para recuperar placas-mãe condenadas, devolvendo a funcionalidade total ao seu dispositivo eletrônico.", 
      img: imgConcerto 
    }
  ];

  return (
    <section className="bg-linear-to-b from-[#051066] to-[#0a1a8b] text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 font-sans">Nossos serviços</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {servicos.map((s, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <img 
                src={s.img} 
                alt={s.titulo} 
                className="w-48 h-32 object-cover rounded-2xl shadow-xl border border-white/10" 
              />
              <div className="grow">
                <h3 className="text-2xl font-bold mb-3">{s.titulo}</h3>
                <p className="text-sm opacity-90 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé da seção com texto idêntico à imagem */}
        <div className="text-center mt-24">
          <p className="text-xl font-bold mb-8 leading-tight">
            Inicie agora nossa triagem inteligente e <br />
            receba um pré-orçamento ágil via WhatsApp.
          </p>
          <button className="bg-[#5d946e] hover:bg-[#c8824f] text-white px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 shadow-2xl transform hover:scale-105">
            Começar o meu diagnóstico
          </button>
        </div>
      </div>
    </section>
  );
}