import React from 'react';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

import logoMarca from '../fotos/logo.png'; 

export default function Contatos() {
  return (
    <div className="bg-linear-to-b from-[#051066] to-[#0a1a8b] text-white py-20 px-4 min-h-screen font-sans">
      <div className="container mx-auto max-w-6xl">
        

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-32 text-center md:text-left">
          <div className="w-full max-w-sm">
            <img 
              src={logoMarca} 
              alt="Minha Placa Minha Vida" 
              className="w-full h-auto drop-shadow-2xl"
              onError={(e) => e.target.src = "https://via.placeholder.com/400x400/030a3d/ffffff?text=Logo+Aqui"}
            />
          </div>
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Quer acabar de vez com seus problemas?
            </h1>
            <p className="text-lg opacity-90 leading-relaxed">
              Escolha o canal de sua preferência ou inicie sua triagem agora mesmo para um orçamento agilizado. Veja abaixo os canais de atendimento.
            </p>
          </div>
        </div>

        <div className="pt-20 border-t border-white/10">
          <h2 className="text-4xl font-bold text-center mb-20">Canais de atendimento</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            

            <div className="flex flex-col items-center group">
              <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <MessageCircle size={50} className="text-white" />
              </div>
              <p className="text-sm opacity-80 mb-8 max-w-[200px] h-12">
                Atendimento técnico em tempo real para orçamentos e dúvidas rápidas.
              </p>
              <a 
                href="https://wa.me/SEUNUMERO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#5d946e] hover:bg-[#4d7a5b] text-white font-bold py-3 px-10 rounded-full transition-all shadow-lg w-full max-w-[200px]"
              >
                Whatsapp
              </a>
            </div>

            <div className="flex flex-col items-center group">
              <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <Mail size={50} className="text-white" />
              </div>
              <p className="text-sm opacity-80 mb-8 max-w-[200px] h-12">
                Envie fotos do seu aparelho ou solicitações para parcerias e empresas.
              </p>
              <a 
                href="mailto:contato@exemplo.com" 
                className="bg-[#5d946e] hover:bg-[#4d7a5b] text-white font-bold py-3 px-10 rounded-full transition-all shadow-lg w-full max-w-[200px]"
              >
                Email
              </a>
            </div>

            <div className="flex flex-col items-center group">
              <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <MapPin size={50} className="text-white" />
              </div>
              <p className="text-sm opacity-80 mb-8 max-w-[200px] h-12">
                Visite nosso laboratório especializado (Assistência Premium).
              </p>
              <button className="bg-[#5d946e] hover:bg-[#4d7a5b] text-white font-bold py-3 px-10 rounded-full transition-all shadow-lg w-full max-w-[200px]">
                Loja física
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}