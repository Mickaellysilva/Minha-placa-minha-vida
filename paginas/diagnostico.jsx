import React from "react";

import { useDiagnostico } from "../contexto/contextoDiagnostico"; 

export default function Diagnostico() {
  const { dadosTriagem, atualizarDados } = useDiagnostico();

  const handleEnviar = (e) => {
    e.preventDefault();
    const mensagem = `Olá, meu ${dadosTriagem.aparelho} (${dadosTriagem.modelo})
     está com ${dadosTriagem.problema}. Gostaria de um orçamento.`;
    const linkWhatsapp = `https://wa.me/5599999999999?text=${encodeURIComponent(mensagem)}`;
    window.open(linkWhatsapp, "_blank");
  };

  return (
    <div className="bg-[#051066] min-h-screen text-white py-20 px-4">
      <div className="container mx-auto max-w-lg bg-white/10 p-8 rounded-2xl backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Inicie sua triagem</h2>
        <form onSubmit={handleEnviar} className="flex flex-col gap-4 text-black">
          <select 
            className="p-3 rounded"
            onChange={(e) => atualizarDados({ aparelho: e.target.value })}
            required
          >
            <option value="">Tipo de Equipamento</option>
            <option value="Notebook">Notebook</option>
            <option value="Desktop">Desktop</option>
            <option value="Placa-mãe">Placa-mãe de Eletrodoméstico</option>
          </select>
          
          <input 
            type="text" 
            placeholder="Modelo do Aparelho" 
            className="p-3 rounded"
            onChange={(e) => atualizarDados({ modelo: e.target.value })}
            required
          />

          <textarea 
            placeholder="Descreva o problema" 
            className="p-3 rounded h-32"
            onChange={(e) => atualizarDados({ problema: e.target.value })}
            required
          />

          <button type="submit" className="bg-[#5d946e] text-white py-4 rounded-full font-bold hover:bg-[#4d7a5b] transition-all">
            Gerar Orçamento no WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}